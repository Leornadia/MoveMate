import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Mail, MessageCircle, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Help() {
  const helpItems = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      content: 'Learn how to set up your profile and start tracking your fitness journey.',
      link: '/help/getting-started'
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
      link: '/help/faq'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      content: 'Call us directly for immediate assistance.',
      link: 'tel:+1234567890'
    }
  ];

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-black p-6 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-pink-300">Help Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpItems.map((item) => (
            <Card key={item.title} className="bg-black border border-pink-300/20 hover:border-pink-300/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-300">
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.content}</p>
                {item.link.startsWith('/') ? (
                  <Link to={item.link}>
                    <Button 
                      variant="ghost" 
                      className="text-pink-300 hover:text-pink-400 hover:bg-pink-300/10 p-0"
                    >
                      Learn More →
                    </Button>
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    className="text-pink-300 hover:text-pink-400 font-medium inline-flex items-center"
                  >
                    Learn More →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
