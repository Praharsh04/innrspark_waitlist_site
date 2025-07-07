import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitQuestionToGoogleForm } from "@/lib/google-form-api";
import { useToast } from "@/components/ui/use-toast";

export const QuestionForm = () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter your question before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitQuestionToGoogleForm(question, email);
      setSubmitted(true);
      setQuestion(''); // Clear the textarea
      setEmail(''); // Clear the email input
      toast({
        title: "Success!",
        description: "Thanks for reaching out! We’ll get back to you soon.",
      });
    } catch (error) {
      console.error("Failed to submit question:", error);
      toast({
        title: "Error",
        description: "Failed to submit your question. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-16 p-8 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-6 text-innrspark-charcoal">
        Got questions, doubts, or ideas?
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Your Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-innrspark-yellow focus:border-innrspark-yellow transition-all"
          disabled={isSubmitting || submitted}
        />
        <Textarea
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={5}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-innrspark-yellow focus:border-innrspark-yellow transition-all"
          disabled={isSubmitting || submitted}
        />
        <Button
          type="submit"
          className="w-full bg-innrspark-yellow text-innrspark-charcoal hover:bg-innrspark-yellow/90 rounded-md py-3 text-lg font-semibold transition-all"
          disabled={isSubmitting || submitted}
        >
          {isSubmitting ? 'Submitting...' : submitted ? 'Submitted!' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};