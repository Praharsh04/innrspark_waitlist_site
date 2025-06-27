
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "Our comprehensive assessment takes approximately 15-20 minutes to complete. We've designed it to be engaging and insightful without being overwhelming. You can pause and resume the assessment at any time."
    },
    {
      question: "What if I need a new mentor?",
      answer: "We understand that finding the right mentor match is crucial. If you feel your current mentor isn't the right fit, you can request a new match at any time. Our AI will use what we've learned about your preferences to suggest even better matches."
    },
    {
      question: "Is Innrspark for seniors or mid-career professionals?",
      answer: "Innrspark is designed for individuals at all career stages - from students just starting out to mid-career professionals and senior leaders looking to pivot or advance. Our personalized approach means we adapt to your specific career stage and goals."
    },
    {
      question: "How private is my data?",
      answer: "We take data privacy extremely seriously. Your assessment data and personal information are encrypted and never sold to third parties. You have complete control over what information is shared with mentors, and you can request data deletion at any time."
    },
    {
      question: "How is AI used in the mentorship matching?",
      answer: "Our proprietary AI analyzes over 100 personality traits, communication styles, values, and lived experiences to find mentors who truly understand your unique journey. Unlike other platforms that match based on industry alone, we focus on compatibility at a deeper level."
    }
  ];

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            Your Questions, Answered
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-8"></div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-innrspark-charcoal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
