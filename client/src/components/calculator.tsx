import { useState } from "react";
import { Calculator, DollarSign, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ServicesCalculator() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [websiteType, setWebsiteType] = useState<string>("");
  const [logoComplexity, setLogoComplexity] = useState<string>("");
  const [brandingOptions, setBrandingOptions] = useState<string[]>([]);
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const calculatePrice = () => {
    let price = 0;
    
    // Base service pricing
    if (selectedService === "website") {
      switch (websiteType) {
        case "landing":
          price += 800;
          break;
        case "business":
          price += 1500;
          break;
        case "ecommerce":
          price += 2500;
          break;

      }
    } else if (selectedService === "logo") {
      switch (logoComplexity) {
        case "simple":
          price += 300;
          break;
        case "standard":
          price += 500;
          break;
        case "premium":
          price += 800;
          break;
        case "luxury":
          price += 1200;
          break;
      }
    } else if (selectedService === "branding") {
      price += 1000; // Base branding package
      
      // Add branding options
      brandingOptions.forEach(option => {
        switch (option) {
          case "business-cards":
            price += 200;
            break;
          case "letterhead":
            price += 150;
            break;
          case "social-media":
            price += 300;
            break;
          case "brand-guidelines":
            price += 400;
            break;
        }
      });
    }

    // Additional services
    additionalServices.forEach(service => {
      switch (service) {
        case "seo":
          price += 500;
          break;
        case "copywriting":
          price += 400;
          break;
        case "maintenance":
          price += 200;
          break;
        case "hosting":
          price += 100;
          break;
      }
    });

    setTotalPrice(price);
  };

  const handleBrandingOption = (option: string, checked: boolean) => {
    if (checked) {
      setBrandingOptions([...brandingOptions, option]);
    } else {
      setBrandingOptions(brandingOptions.filter(o => o !== option));
    }
  };

  const handleAdditionalService = (service: string, checked: boolean) => {
    if (checked) {
      setAdditionalServices([...additionalServices, service]);
    } else {
      setAdditionalServices(additionalServices.filter(s => s !== service));
    }
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-br from-ice-blue/5 via-powder-blue/5 to-sky-blue/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Services <span className="font-semibold text-ocean-blue">Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your project. Select your services and options to see pricing.
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-gradient-ocean text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="w-6 h-6" />
              Project Calculator
            </CardTitle>
            <CardDescription className="text-white/90">
              Configure your project requirements to get an estimated price
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Service Selection */}
              <div>
                <Label className="text-lg font-semibold text-charcoal mb-4 block">
                  Choose Your Main Service
                </Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Design</SelectItem>
                    <SelectItem value="logo">Logo Creation</SelectItem>
                    <SelectItem value="branding">Complete Branding Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Website Options */}
              {selectedService === "website" && (
                <div>
                  <Label className="text-lg font-semibold text-charcoal mb-4 block">
                    Website Type
                  </Label>
                  <Select value={websiteType} onValueChange={setWebsiteType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select website type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landing">Landing Page - $800</SelectItem>
                      <SelectItem value="business">Business Website - $1,500</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store - $2,500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Logo Options */}
              {selectedService === "logo" && (
                <div>
                  <Label className="text-lg font-semibold text-charcoal mb-4 block">
                    Logo Complexity
                  </Label>
                  <Select value={logoComplexity} onValueChange={setLogoComplexity}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select logo complexity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="simple">Simple Logo - $300</SelectItem>
                      <SelectItem value="standard">Standard Logo - $500</SelectItem>
                      <SelectItem value="premium">Premium Logo - $800</SelectItem>
                      <SelectItem value="luxury">Luxury Logo - $1,200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Branding Options */}
              {selectedService === "branding" && (
                <div>
                  <Label className="text-lg font-semibold text-charcoal mb-4 block">
                    Branding Package Additions (Base: $1,000)
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "business-cards", label: "Business Cards", price: "$200" },
                      { id: "letterhead", label: "Letterhead Design", price: "$150" },
                      { id: "social-media", label: "Social Media Kit", price: "$300" },
                      { id: "brand-guidelines", label: "Brand Guidelines", price: "$400" }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.id}
                          checked={brandingOptions.includes(item.id)}
                          onCheckedChange={(checked) => handleBrandingOption(item.id, checked as boolean)}
                        />
                        <Label htmlFor={item.id} className="text-sm">
                          {item.label} - {item.price}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Services */}
              {selectedService && (
                <div>
                  <Label className="text-lg font-semibold text-charcoal mb-4 block">
                    Additional Services
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: "seo", label: "SEO Optimization", price: "$500" },
                      { id: "copywriting", label: "Professional Copywriting", price: "$400" },
                      { id: "maintenance", label: "Monthly Maintenance", price: "$200/month" },
                      { id: "hosting", label: "Web Hosting Setup", price: "$100" }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.id}
                          checked={additionalServices.includes(item.id)}
                          onCheckedChange={(checked) => handleAdditionalService(item.id, checked as boolean)}
                        />
                        <Label htmlFor={item.id} className="text-sm">
                          {item.label} - {item.price}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Calculate Button */}
              <Button
                onClick={calculatePrice}
                className="w-full bg-gradient-sky hover:bg-ocean-blue text-white py-4 text-lg font-medium"
                disabled={!selectedService || (selectedService === "website" && !websiteType) || (selectedService === "logo" && !logoComplexity)}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Estimate
              </Button>

              {/* Price Display */}
              {totalPrice > 0 && (
                <div className="bg-gradient-to-r from-ocean-blue to-deep-blue text-white p-6 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-8 h-8 mr-2" />
                    <span className="text-3xl font-bold">${totalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-white/90 mb-4">Estimated Project Cost</p>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-white text-ocean-blue hover:bg-gray-100 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Official Quote
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            * Prices are estimates only. Final pricing may vary based on specific requirements and project complexity.
          </p>
        </div>
      </div>
    </section>
  );
}