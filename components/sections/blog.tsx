"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "OVER ENGINEERING AT ITS FINEST",
    description: "This post details the journey of building a multi-intent AI hotel agent, exploring different architectural approaches like LangGraph and ReAct agents, and the challenges faced in balancing flexibility with predictability and cost-effectiveness.",
    link: "https://medium.com/@youssef.hussain9000/over-engineering-at-its-finest-c36226ffba18",
    linkText: "Read More",
  },
  {
    title: "Simple Data Warehouse",
    description: "A blog post about building a simple ELT pipeline and a warehouse using Docker, Airflow, DBT, Postgres, and Medallion Architecture.",
    link: "#",
    linkText: "Coming Soon",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
            My Blog
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
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
              <Card className="h-full flex flex-col border-primary/20 hover:border-primary/60 transition-all duration-500 group relative overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10 transition-all duration-500 pointer-events-none" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/0 to-secondary/0 group-hover:from-primary/30 group-hover:via-primary/20 group-hover:to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:border-primary/60 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
                  >
                    <BookOpen className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                  <CardDescription className="mt-2 group-hover:text-foreground/80 transition-colors duration-300">{post.description}</CardDescription>
                </CardHeader>
                <CardFooter className="relative z-10">
                  <Button
                    variant={post.link === "#" ? "outline" : "default"}
                    className="w-full group/btn"
                    asChild
                  >
                    <a href={post.link} target={post.link !== "#" ? "_blank" : undefined} rel={post.link !== "#" ? "noopener noreferrer" : undefined}>
                      {post.linkText}
                      {post.link !== "#" && (
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

