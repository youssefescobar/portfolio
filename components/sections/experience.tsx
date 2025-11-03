"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer Intern",
    company: "Cyber Talents",
    period: "3 Month Internship • 2025",
    bullets: [
      "Built a large language model (LLM) pipeline from scratch to automate the generation of CTF writeups.",
      "Processed raw CTF writeups: cleaning, formatting, and structuring into usable datasets.",
      "Applied data augmentation, model selection, fine-tuning, and PEFT techniques.",
      "Deployed the trained LLM for automated writeup generation, improving efficiency in cybersecurity reporting.",
    ],
  },
  {
    title: "Embedded Linux Engineer Intern",
    company: "El Sewedy Electric",
    period: "2 Month Internship • 2025",
    bullets: [
      "Automated the calibration process for electric meter test benches using Python scripts, significantly reducing manual testing time and improving data accuracy.",
      "Developed and executed Bash scripts for system administration and process management in an embedded Linux environment.",
      "Interfaced with hardware devices using communication protocols (UART, I2C, SPI) and built foundational REST APIs with Python for device interaction.",
    ],
  },
  {
    title: "Network Security Intern",
    company: "Optima Professional Services",
    period: "1-Month Internship • 2025",
    bullets: [
      "Performed as a SOC Analyst in a CTF simulation, actively monitoring firewall logs to detect and report intrusion attempts in real-time.",
      "Configured and deployed firewall policies on Palo Alto networks to isolate threats and secure critical network zones.",
      "Executed Red Team operations by conducting scans, exploiting identified attack vectors.",
    ],
  },
  {
    title: "CCNA Training Intern",
    company: "DEPI",
    period: "6 Month Internship • 2024",
    bullets: [
      "Completed hands-on training in routing, switching, VLANs, and troubleshooting.",
      "Designed and simulated network infrastructures using Cisco Packet Tracer.",
      "Configured DHCP, inter-VLAN routing, and security protocols to optimize network performance.",
      "Key Impact: Strengthened troubleshooting skills for real-world networking issues.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            Experience
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Timeline line with glow effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary via-secondary to-primary transform -translate-x-1/2 hidden md:block shadow-lg shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 blur-sm" />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-[48%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500 pointer-events-none" />
                    
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                    <CardHeader className="relative z-10 pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className="w-fit bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 text-primary hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 shadow-sm border"
                        >
                          {exp.company}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {exp.period}
                      </p>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-4">
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + bulletIndex * 0.1 }}
                            className="flex gap-3 group/item"
                          >
                            <span className="text-primary mt-1.5 text-lg font-bold group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                              ▹
                            </span>
                            <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                              {bullet}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Enhanced Timeline dot with pulsing animation */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="relative">
                    {/* Outer pulsing ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-6 h-6 bg-primary rounded-full blur-sm"
                    />
                    {/* Main dot */}
                    <div className="relative w-5 h-5 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg shadow-primary/50">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    </div>
                    {/* Inner glow */}
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-md" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

