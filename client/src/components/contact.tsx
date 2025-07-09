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
        title: "Order Submitted!",
        description: "Thank you for your order. We'll get back to you within 24 hours to confirm details.",
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
    <section id="contact" className="py-24 bg-gradient-to-br from-powder-blue/10 via-sky-blue/10 to-cyan-blue/10 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Order Services <span className="font-semibold text-deep-blue">Here</span>
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
                  <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Email</div>
                    <div className="text-gray-600">designsbyautumnwood@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center shadow-md">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Response Time</div>
                    <div className="text-gray-600">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-deep rounded-lg flex items-center justify-center shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">Location</div>
                    <div className="text-gray-600">United States</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-ocean text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Autumnwood Designs?</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>Personalized service and attention to detail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>Fast turnaround times without compromise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span>Affordable pricing for quality work</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
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
                        <FormLabel className="text-white">Your Name *</FormLabel>
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
                        <FormLabel className="text-white">Email Address *</FormLabel>
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
                        <FormLabel className="text-white">Service Needed *</FormLabel>
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
                        <FormLabel className="text-white">Budget Range</FormLabel>
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
                      <FormLabel className="text-white">Project Details *</FormLabel>
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
                
                {/* Payment Terms Notice */}
                <div className="bg-gray-800 border border-blue-600 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-400 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div className="text-sm text-gray-300">
                      <p className="font-medium mb-1 text-white">Payment Terms</p>
                      <p>Payment is due upon completion of your project. Your completed website, logo, or brand will be delivered once payment has cleared.</p>
                    </div>
                  </div>
                </div>
                
                {/* Post-Launch Changes Notice */}
                <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mt-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                    <div className="text-sm text-gray-300">
                      <p className="font-medium mb-1 text-white">Important Note</p>
                      <p>Changes to your website, logo, or brand after project completion are quoted separately based on each modification's scope. This ensures transparent pricing for future updates.</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-deep hover:bg-deep-blue text-white py-4 px-6 rounded-lg text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                    "Place Order"
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
