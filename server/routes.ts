import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      try {
        await transporter.sendMail({
          from: process.env.SMTP_USER || "designsbyautumnwood@gmail.com",
          to: process.env.CONTACT_EMAIL || "designsbyautumnwood@gmail.com",
          subject: `New Quote Request - ${validatedData.service}`,
          html: `
            <h2>New Quote Request from Autumnwood Designs Website</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Service:</strong> ${validatedData.service}</p>
            <p><strong>Budget:</strong> ${validatedData.budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
          `,
        });
        
        // Send confirmation email to user
        await transporter.sendMail({
          from: process.env.SMTP_USER || "designsbyautumnwood@gmail.com",
          to: validatedData.email,
          subject: "Quote Request Received - Autumnwood Designs",
          html: `
            <h2>Thank you for your quote request!</h2>
            <p>Hi ${validatedData.name},</p>
            <p>We've received your quote request for <strong>${validatedData.service}</strong> services.</p>
            <p>We'll review your requirements and get back to you within 24 hours.</p>
            <p>If you have any urgent questions, please don't hesitate to contact us directly at designsbyautumnwood@gmail.com.</p>
            <br>
            <p>Best regards,<br>
            The Autumnwood Designs Team</p>
          `,
        });
        
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Continue with success response even if email fails
      }
      
      res.json({ 
        success: true, 
        message: "Quote request submitted successfully",
        id: submission.id 
      });
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
