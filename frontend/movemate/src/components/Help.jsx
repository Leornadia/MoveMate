import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen text-white p-8 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.you.com/youagent-images/flux1_1-pro/8cf8e3b6-584c-4edb-b30f-b4c0d8699398.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-6 text-gradient-peach-pink">Help Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {helpItems.map((item) => (
            <Card key={item.title} className="bg-black border-gradient-peach-pink">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.content}</p>
                {item.link.startsWith('/') ? (
                  <Link to={item.link}>
                    <Button
                      className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
                    >
                      Learn More →
                    </Button>
                  </Link>
                ) : (
                  <a
                    href={item.link}
                    className="inline-block"
                  >
                    <Button
                      className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
                    >
                      Contact Now →
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
