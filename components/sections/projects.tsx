"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Brain, MessageSquare, Dumbbell, Database, Lock, Network, Warehouse } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
  linkText?: string;
  blogLink?: string;
}

const projects: Project[] = [
  {
    title: "AI-Powered Auction Backend",
    description: "A scalable Node.js backend for an online auction/e-commerce platform with an integrated LLM (Large Language Model) as a RAG chatbot.",
    tags: ["Node.js", "LLM", "RAG"],
    link: "https://github.com/youssefescobar/BeMazady2",
    icon: <Bot className="h-8 w-8" />,
    linkText: "View Project",
  },
  {
    title: "CTF Writeup LLM",
    description: "An end-to-end LLM pipeline to automate CTF challenge writeups, demonstrating expertise in data preparation, LLM fine-tuning, and deployment.",
    tags: ["RAG", "LLM", "PEFT"],
    link: "#",
    icon: <Brain className="h-8 w-8" />,
    linkText: "Closed Source",
  },
  {
    title: "Hotel WhatsApp AI Agent",
    description: "A conversational AI agent for a hotel, accessible via WhatsApp, that can answer FAQs, query databases for room availability, and handle secure bookings. over engineering at its finest",
    tags: ["Supabase", "Langchain", "Langgraph", "Pydantic", "Meta Api integration"],
    link: "#",
    icon: <MessageSquare className="h-8 w-8" />,
    linkText: "Closed source",
    blogLink: "https://medium.com/@youssef.hussain9000/building-a-production-grade-elt-pipeline-from-raw-data-to-business-intelligence-f444b398284a",
  },
  {
    title: "AI Fitness & Nutrition Planner",
    description: "A tool built with LangChain, Pydantic, and Google Gemini to generate custom workout and nutrition plans with a conversational agent for follow-up questions.",
    tags: ["LangChain", "Pydantic", "Gemini"],
    link: "https://github.com/youssefescobar/Coach-Ai",
    icon: <Dumbbell className="h-8 w-8" />,
    linkText: "View Project",
  },
  {
    title: "Simple Data Warehouse",
    description: "A simple ELT pipeline and a warehouse using Docker, Airflow, DBT, Postgres, and Medallion Architecture. A realistic prod db was also made to pull data from. the elt warehouse blog post",
    tags: ["Docker", "Airflow", "DBT", "PostgreSQL"],
    link: "https://github.com/youssefescobar/simple-data-warehouse",
    icon: <Warehouse className="h-8 w-8" />,
    linkText: "View Project",
    blogLink: "https://medium.com/@youssef.hussain9000/building-a-production-grade-elt-pipeline-from-raw-data-to-business-intelligence-f444b398284a",
  },
  {
    title: "Ciphers",
    description: "A small project for encryption and decryption of typical ciphers.",
    tags: ["Python", "Cryptography"],
    link: "https://github.com/youssefescobar/Crpyto-project",
    icon: <Lock className="h-8 w-8" />,
    linkText: "View Project",
  },
  {
    title: "Small Office Network Design",
    description: "A small office network designed and implemented using Cisco Packet Tracer, including features such as VLANs, inter-VLAN routing, DHCP, and IP phone configurations.",
    tags: ["Cisco Packet Tracer", "Networking"],
    link: "https://github.com/youssefescobar/ccna-project",
    icon: <Network className="h-8 w-8" />,
    linkText: "View Project",
  },

];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
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
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <Card className="h-full flex flex-col border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    {project.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="mt-2 group-hover:text-foreground/80 transition-colors duration-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="relative z-10 flex gap-2">
                  <Button
                    variant={project.link === "#" ? "outline" : "default"}
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={project.link} target={project.link !== "#" ? "_blank" : undefined} rel={project.link !== "#" ? "noopener noreferrer" : undefined}>
                      {project.linkText}
                      {project.link !== "#" && (
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </a>
                  </Button>
                  {project.blogLink && (
                    <Button
                      variant="outline"
                      className="w-full group/btn"
                      asChild
                    >
                      <a href={project.blogLink} target="_blank" rel="noopener noreferrer">
                        View Blog
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

