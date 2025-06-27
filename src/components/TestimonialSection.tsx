
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Innrspark gave me clarity I didn't get in 3 years of college. I finally understand why certain paths never felt right for me.",
      name: "Maya R.",
      title: "Digital Marketing Specialist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The mentor matching was incredible. My mentor understood exactly what I was going through because they had the same personality type and faced similar challenges.",
      name: "Alex T.",
      title: "Software Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "As someone who loves too many things, Innrspark helped me see how my diverse interests could converge into a unique career path instead of forcing me to choose.",
      name: "Priya K.",
      title: "UX Researcher & Writer",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            Hear from Our Early Seekers
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-8"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-innrspark-charcoal p-6 md:p-10 rounded-2xl shadow-lg">
            <div className="mb-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-innrspark-yellow" fill="#FFD600" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white italic">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>
            
            <div className="flex items-center">
              <img 
                src={testimonials[currentIndex].avatar} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full border-2 border-innrspark-yellow object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-300 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 md:-translate-x-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white border-innrspark-yellow text-innrspark-charcoal hover:bg-innrspark-yellow"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 md:translate-x-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white border-innrspark-yellow text-innrspark-charcoal hover:bg-innrspark-yellow"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center flex-1">
            <div className="text-4xl font-bold text-innrspark-yellow mb-2">95%</div>
            <p className="text-innrspark-charcoal">felt more confident in 2 weeks</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center flex-1">
            <div className="text-4xl font-bold text-innrspark-yellow mb-2">80%</div>
            <p className="text-innrspark-charcoal">found their ideal career path</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center flex-1">
            <div className="text-4xl font-bold text-innrspark-yellow mb-2">87%</div>
            <p className="text-innrspark-charcoal">recommend to friends</p>
          </div>
        </div>
      </div>
    </section>
  );
};
