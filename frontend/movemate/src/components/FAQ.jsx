import React from 'react';
import DashboardLayout from "./DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Can I sync MoveMate with other fitness apps?",
      answer: "Yes, MoveMate can be synced with popular fitness apps and devices. Go to 'Settings' and select 'Integrations' to connect your preferred apps or devices."
    },
    {
      question: "How often should I log my workouts?",
      answer: "For best results, we recommend logging your workouts immediately after completion. This ensures accurate tracking and helps you maintain consistency in your fitness journey."
    },
    {
      question: "What types of challenges are available?",
      answer: "MoveMate offers various challenges, including step challenges, workout streaks, weight loss goals, and community competitions. Check the 'Challenges' section regularly for new and exciting events."
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
        <Card>
          <CardHeader>
            <CardTitle>Common Questions about MoveMate</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
