"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Database, Network } from "lucide-react";

interface Certification {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    title: "Cybersecurity",
    items: ["Google Cybersecurity Professional Certificate"],
    icon: <Shield className="h-8 w-8" />,
  },
  {
    title: "Data Science & Analytics",
    items: [
      "IBM Data Analyst Professional Certificate",
      "IBM Data Science Professional Certificate",
    ],
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "Networking & Cloud",
    items: [
      "Cisco Certified Network Associate (CCNA)",
      "AWS Cloud Practioner Essentials",
    ],
    icon: <Network className="h-8 w-8" />,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    {cert.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {cert.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + itemIndex * 0.1 }}
                        className="flex gap-3 group/item"
                      >
                        <span className="text-primary mt-1 text-lg font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                          ▹
                        </span>
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

