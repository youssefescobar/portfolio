"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

            <CardContent className="pt-8 pb-8 px-8 md:px-12 relative z-10">
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Decorative icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-16 h-16 bg-primary/30 rounded-full blur-md"
                    />
                  </div>
                </motion.div>

                {/* First paragraph with enhanced styling */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed group-hover:text-primary transition-colors duration-300"
                >
                  Hey there! I&apos;m a Computer Science graduate who fell in love with{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                    AI Engineering
                  </span>{" "}
                  and machine learning. I spend most of my time working with Python, SQL, and cloud technologies, building and deploying models from scratch.
                </motion.p>

                {/* Second paragraph with enhanced styling */}
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4"
                >
                  <span className="block">
                    What keeps me going is{" "}
                    <span className="text-primary font-medium group-hover:scale-105 inline-block transition-transform duration-300">
                      curiosity
                    </span>{" "}
                    — I love diving deep into how things work and always trying to learn something new.
                  </span>
                  <span className="block">
                    There&apos;s something satisfying about taking{" "}
                    <span className="font-medium text-foreground">
                      messy, complicated problems
                    </span>{" "}
                    and turning them into clean, working solutions.
                  </span>
                </motion.p>

                {/* Feature highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50"
                >
                  {[
                    { icon: Target, text: "Problem Solver" },
                    { icon: Rocket, text: "Continuous Learner" },
                    { icon: Sparkles, text: "Innovation Driven" },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group/item"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground group-hover/item:text-primary transition-colors duration-300">
                          {item.text}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

