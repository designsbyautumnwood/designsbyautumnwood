import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Clock, MapPin, Check } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Quote Request Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at info@designsbyautumnwood.com",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Request a <span className="font-semibold">Quote</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with us and let's discuss how we can help you create something amazing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-charcoal">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-warm-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-warm-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Email</div>
                    <div className="text-gray-600">designsbyautumnwood@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-warm-blue/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-warm-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-warm-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-warm-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Location</div>
                    <div className="text-gray-600">United States</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-warm-blue text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Autumnwood?</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Personalized service and attention to detail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Fast turnaround times without compromise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Affordable pricing for quality work</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span>Ongoing support and revisions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="floating-form p-8 rounded-2xl shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal">Your Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="focus:ring-warm-blue focus:border-warm-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="focus:ring-warm-blue focus:border-warm-blue"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal">Service Needed *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-warm-blue focus:border-warm-blue">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="website">Website Design</SelectItem>
                            <SelectItem value="logo">Logo Creation</SelectItem>
                            <SelectItem value="branding">Brand Naming</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal">Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-warm-blue focus:border-warm-blue">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over-10000">Over $10,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal">Project Details *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6} 
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          className="resize-none focus:ring-warm-blue focus:border-warm-blue"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-warm-blue hover:bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-medium transition-all transform hover:scale-105"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Quote Request"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
