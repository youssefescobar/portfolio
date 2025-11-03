"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
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
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-center text-lg md:text-xl text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
          >
            <Card className="border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <CardContent className="pt-8 pb-8 text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-primary mx-auto mb-4 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                >
                  <Phone className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Phone</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">+201115771844</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            <Card className="border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <CardContent className="pt-8 pb-8 text-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-primary mx-auto mb-4 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                >
                  <Mail className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">Email</h3>
                <a
                  href="mailto:youssef.hussain9000@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block"
                >
                  youssef.hussain9000@gmail.com
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

