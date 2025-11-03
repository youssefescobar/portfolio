"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, TrendingUp, Brain, Database, BarChart3, Wrench } from "lucide-react";

interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    title: "Programming & Scripting",
    description: "Python (Pandas, NumPy, Scikit-learn), SQL, JavaScript, HTML, CSS, Bash, C++",
    icon: <Code className="h-8 w-8" />,
  },
  {
    title: "Machine Learning",
    description: "Supervised/Unsupervised Learning, Feature Engineering, Model Selection, Hyperparameter Tuning, Cross-validation, Ensemble Methods",
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: "Deep Learning & AI",
    description: "Neural Networks, CNNs, RNNs, Transformers, LLMs, Fine-tuning, Transfer Learning, PyTorch, TensorFlow, RAG, LangChain, Langgraph, Pydantic, PEFT",
    icon: <Brain className="h-8 w-8" />,
  },
  {
    title: "Databases & Backend",
    description: "PostgreSQL, MySQL, MongoDB, Prisma, Database Design, Data Warehousing, REST APIs, FastAPI, Express.js, Docker",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "Data Analysis & Visualization",
    description: "Data Cleaning, Preprocessing, EDA, Statistical Analysis, Power BI, Excel, Matplotlib, Seaborn",
    icon: <BarChart3 className="h-8 w-8" />,
  },
  {
    title: "Tools & Technologies",
    description: "Git, Linux, Cloud Services (AWS), Virtualization, Automation (n8n)",
    icon: <Wrench className="h-8 w-8" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
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
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
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
                    {skill.icon}
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

