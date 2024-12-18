import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';

export default function Help() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Help Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Getting Started',
              icon: HelpCircle,
              content: 'Learn how to set up your profile and start tracking your fitness journey.',
              link: '#getting-started'
            },
            {
              title: 'Contact Support',
              icon: Mail,
              content: 'Need help? Our support team is available 24/7.',
              link: 'mailto:support@movemate.com'
            },
            {
              title: 'FAQ',
              icon: MessageCircle,
              content: 'Find answers to commonly asked questions about MoveMate.',
              link: '#faq'
            },
            {
              title: 'Phone Support',
              icon: Phone,
              content: 'Call us directly for immediate assistance.',
              link: 'tel:+1234567890'
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-[#800000]" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <a 
                  href={item.link}
                  className="text-[#800000] hover:text-[#600000] font-medium"
                >
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
