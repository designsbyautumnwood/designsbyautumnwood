import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const faqs = [
    {
      question: "What is included in your advanced SEO optimization?",
      answer: "Our advanced SEO optimization includes keyword research, on-page SEO setup, meta tags optimization, structured data markup, Google Analytics integration, XML sitemap creation, mobile optimization, page speed optimization, and comprehensive SEO strategy to help you rank higher on Google."
    },
    {
      question: "How long does it take to design a website?",
      answer: "Most websites are completed within 2-3 weeks. Custom websites take 1-2 weeks, while e-commerce sites may take 3-4 weeks. The timeline depends on the complexity of your project and how quickly you provide feedback and content."
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes! We offer monthly maintenance services starting at $100/month for the first 3 months (then $150/month). This includes security updates, content updates, performance monitoring, SEO maintenance, and technical support."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive. They work perfectly on smartphones, tablets, and desktops. Mobile optimization is crucial for SEO and user experience."
    },
    {
      question: "How much does a professional website cost?",
      answer: "Website pricing starts at $1,000 for basic sites and goes up to $3,000+ for advanced e-commerce sites. Logo design ranges from $500-$800, and brand naming from $300-$1,200. We're currently offering 30% OFF for the first 5 website customers!"
    },
    {
      question: "Do you provide logo design and brand naming services?",
      answer: "Yes! We offer comprehensive branding services including custom logo design ($500-$800), brand naming ($300-$1,200), and complete brand packages. All services include multiple revisions and professional guidelines."
    },
    {
      question: "How do you help with search engine rankings?",
      answer: "We implement advanced SEO strategies including keyword optimization, technical SEO, local SEO setup, Google My Business optimization, content optimization, and ongoing SEO monitoring. Our clients typically see 95% first-page Google rankings and 300% average traffic increase."
    },
    {
      question: "What happens after my website is completed?",
      answer: "After completion, you'll receive all website files, hosting setup assistance, training on how to update content, and ongoing support. Payment is due upon completion, and your website will be delivered once payment clears."
    }
  ];

  return (
    <section className="py-24 bg-white reveal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light mb-8 text-charcoal">
            Frequently Asked <span className="font-semibold text-ocean-blue">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our website design, logo creation, and brand naming services with advanced SEO optimization.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-ocean-blue flex-shrink-0" />
                  <span className="font-medium text-charcoal">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pl-8 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ocean-blue to-deep-blue text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Still have questions? Get a free consultation and personalized quote for your project.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-ocean-blue px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}