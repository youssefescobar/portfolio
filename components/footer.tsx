"use client";

import { Linkedin, Instagram, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/youssef-hussain-salem/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/yousseff_hussainn/",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "https://wa.me/201115771844",
      icon: MessageCircle,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:border-primary hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            &copy; {currentYear} Youssef Hussain. Crafted with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

