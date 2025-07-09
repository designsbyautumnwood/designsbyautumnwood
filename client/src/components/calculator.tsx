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
  const [brandNamingType, setBrandNamingType] = useState<string>("");
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [originalPrice, setOriginalPrice] = useState<number>(0);

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
    let originalPrice = 0;
    
    // Base service pricing
    if (selectedService === "website") {
      switch (websiteType) {
        case "landing":
          originalPrice += 750;
          price += 400; // $750 - $350 promotional discount
          break;
        case "business":
          originalPrice += 1000;
          price += 600; // $1000 - $400 promotional discount
          break;
        case "ecommerce":
          originalPrice += 1500;
          price += 1100; // $1500 - $400 promotional discount
          break;
      }
    } else if (selectedService === "logo") {
      switch (logoComplexity) {
        case "standard":
          originalPrice += 500;
          price += 500;
          break;
        case "premium":
          originalPrice += 800;
          price += 800;
          break;
      }
    } else if (selectedService === "brand-naming") {
      switch (brandNamingType) {
        case "business-name":
          originalPrice += 300;
          price += 300;
          break;
        case "business-logo":
          originalPrice += 500;
          price += 500;
          break;
        case "business-website":
          originalPrice += 750;
          price += 750;
          break;
        case "complete-package":
          originalPrice += 1200;
          price += 1200;
          break;
      }
    }

    // Additional services (15% discount applied)
    additionalServices.forEach(service => {
      switch (service) {
        case "seo":
          originalPrice += 500;
          price += 425; // $500 - 15% = $425
          break;
        case "maintenance":
          originalPrice += 150;
          price += 100; // $150 - $50 = $100 (first 3 months special)
          break;
        case "hosting":
          originalPrice += 100;
          price += 85; // $100 - 15% = $85
          break;
      }
    });

    console.log("Calculated price:", price);
    console.log("Original price:", originalPrice);
    console.log("Selected service:", selectedService);
    console.log("Website type:", websiteType);
    console.log("Logo complexity:", logoComplexity);
    console.log("Brand naming type:", brandNamingType);
    console.log("Additional services:", additionalServices);
    
    setTotalPrice(price);
    setOriginalPrice(originalPrice);
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
          <div className="mb-8 mx-auto max-w-md">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg text-center font-bold text-lg shadow-lg hover:from-red-600 hover:to-orange-600 transition-all transform hover:scale-105 cursor-pointer w-full"
            >
              🔥 SPECIAL OFFER: First 5 Websites Save Up To 30% OFF! 🔥
            </button>
          </div>
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
                    <SelectItem value="brand-naming">Brand Naming</SelectItem>
                    <SelectItem value="additional-only">Additional Services Only</SelectItem>
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
                      <SelectItem value="landing">Landing Page - $750 <span className="text-red-500 font-bold">($400 with up to 30% OFF!)</span></SelectItem>
                      <SelectItem value="business">Business Website - $1,000 <span className="text-red-500 font-bold">($600 with up to 30% OFF!)</span></SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store - $1,500 <span className="text-red-500 font-bold">($1,100 with up to 30% OFF!)</span></SelectItem>
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
                      <SelectItem value="standard">Standard Logo - $500</SelectItem>
                      <SelectItem value="premium">Premium Logo - $800</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Brand Naming Options */}
              {selectedService === "brand-naming" && (
                <div>
                  <Label className="text-lg font-semibold text-charcoal mb-4 block">
                    Brand Naming Service
                  </Label>
                  <Select value={brandNamingType} onValueChange={setBrandNamingType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select brand naming service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business-name">Business Name Creation - $300</SelectItem>
                      <SelectItem value="business-logo">Business Name + Logo - $500</SelectItem>
                      <SelectItem value="business-website">Business Name + Website - $750</SelectItem>
                      <SelectItem value="complete-package">Complete Package (Name + Logo + Website) - $1,200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Additional Services Only Message */}
              {selectedService === "additional-only" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ocean-blue mb-2">Additional Services</h3>
                  <p className="text-gray-600 mb-4">
                    Select from our additional services below. These can be added to any project or purchased separately.
                  </p>
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
                      { id: "seo", label: "SEO Optimization", price: "$500", discountedPrice: "$425" },
                      { id: "maintenance", label: "Monthly Maintenance", price: "$150/month", discountedPrice: "$100/month (first 3 months)" },
                      { id: "hosting", label: "Web Hosting Setup", price: "$100", discountedPrice: "$85" }
                    ].map((item) => (
                      <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.id}
                          checked={additionalServices.includes(item.id)}
                          onCheckedChange={(checked) => handleAdditionalService(item.id, checked as boolean)}
                        />
                        <Label htmlFor={item.id} className="text-sm">
                          {item.label} - <span className="line-through text-gray-500">{item.price}</span> <span className="text-red-500 font-bold">{item.discountedPrice}</span>
                          {item.id === "maintenance" && <span className="text-xs text-gray-600 block mt-1">Then $150/month after 3 months</span>}
                          {item.id !== "maintenance" && <span className="text-red-500 font-bold"> (15% OFF!)</span>}
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  {/* Post-Launch Changes Notice */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0 mt-0.5"></div>
                      <div className="text-sm text-yellow-800">
                        <p className="font-medium mb-1">Post-Launch Changes</p>
                        <p>Additional changes to your website, logo, or brand after project completion will be quoted separately based on the scope of each modification. This ensures you only pay for what you need.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Calculate Button */}
              <Button
                onClick={calculatePrice}
                className="w-full bg-gradient-sky hover:bg-ocean-blue text-white py-4 text-lg font-medium"
                disabled={!selectedService || (selectedService === "website" && !websiteType) || (selectedService === "logo" && !logoComplexity) || (selectedService === "brand-naming" && !brandNamingType) || (selectedService === "additional-only" && additionalServices.length === 0)}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Estimate
              </Button>

              {/* Price Display */}
              {totalPrice > 0 && (
                <div className="bg-white border-2 border-ocean-blue p-6 rounded-lg text-center shadow-lg">
                  {originalPrice > totalPrice ? (
                    <div className="mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-xl text-gray-500 line-through mr-3">
                          ${originalPrice.toLocaleString()}
                        </span>
                        <DollarSign className="w-8 h-8 mr-2 text-ocean-blue" />
                        <span className="text-3xl font-bold text-charcoal">${totalPrice.toLocaleString()}</span>
                      </div>
                      <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                        You Save: ${(originalPrice - totalPrice).toLocaleString()}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center mb-2">
                      <DollarSign className="w-8 h-8 mr-2 text-ocean-blue" />
                      <span className="text-3xl font-bold text-charcoal">${totalPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <p className="text-gray-600 mb-4 text-lg font-medium">Estimated Project Cost</p>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-ocean text-white hover:bg-deep-blue font-medium"
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