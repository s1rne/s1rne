"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Code, Palette, Database, Globe, Heart } from "lucide-react";
import Link from "next/link";
import { resumeData } from "@/data/resume-data";

export default function Home() {
  const skills = [
    { name: "React/Next.js", icon: Code, color: "bg-blue-500", level: 90 },
    { name: "Node.js/Python", icon: Database, color: "bg-green-500", level: 95 },
    { name: "DevOps", icon: Globe, color: "bg-orange-500", level: 80 },
    { name: "Leadership", icon: Palette, color: "bg-purple-500", level: 85 },
  ];

  // Получаем топ-3 проекта из данных
  const featuredProjects = resumeData.projects
    .filter(project => project.featured)
    .slice(0, 3)
    .map(project => ({
      title: project.name,
      description: project.description,
      tech: project.technologies.slice(0, 4), // Показываем только первые 4 технологии
      status: project.status === 'completed' ? 'Завершён' : 
              project.status === 'in-progress' ? 'В разработке' : 'Планируется'
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative overflow-hidden">

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 sm:mb-8 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto border-4 border-background shadow-lg">
                <AvatarImage 
                  src={resumeData.personal.avatar} 
                  alt={resumeData.personal.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl sm:text-4xl font-bold bg-gradient-to-br from-primary to-accent text-white">
                  {resumeData.personal.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-foreground text-lg sm:text-xl md:text-2xl"
              >
                Привет, я
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200 }}
                className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
                whileHover={{ 
                  scale: 1.05,
                  backgroundPosition: "200% center",
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundSize: "200% auto",
                  backgroundImage: "linear-gradient(45deg, var(--primary), var(--accent), var(--primary))"
                }}
              >
                {resumeData.personal.name}
              </motion.span>
              
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
            >
              Творческий разработчик с 4+ годами проектной и коммерческой работой. 
              Специализируюсь на React, Node.js, Python и инструментах DevOps
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 cursor-pointer w-full sm:w-auto">
                  <Link href="/resume">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      Посмотреть резюме
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 cursor-pointer w-full sm:w-auto">
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Связаться со мной
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Мои навыки
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: 5,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ 
                      scale: 0.9,
                      transition: { duration: 0.1 }
                    }}
                    className="group cursor-pointer"
                  >
                    <Card className="text-center p-3 sm:p-4 md:p-6 hover:shadow-2xl transition-all duration-500 group-hover:shadow-primary/30 group-hover:border-primary/50 border-2 border-transparent group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-primary/5">
                      <CardContent className="p-0">
                        <motion.div 
                          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-125 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                          whileHover={{ 
                            rotate: [0, -10, 10, 0],
                            scale: 1.2
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                        </motion.div>
                        <motion.h3 
                          className="font-semibold text-xs sm:text-sm md:text-base group-hover:text-primary transition-all duration-300"
                          whileHover={{ y: -2 }}
                        >
                          {skill.name}
                        </motion.h3>
                        <motion.div
                          className="w-full h-1 bg-muted rounded-full mt-2 overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `100%` }}
                            transition={{ 
                              delay: 1.2 + index * 0.1, 
                              duration: 1,
                              ease: "easeOut"
                            }}
                          />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Projects Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Последние проекты</h2>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="/projects">
                  Все проекты
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
        </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    rotateX: 5
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:shadow-primary/10 cursor-pointer overflow-hidden">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <Badge 
                          variant={project.status === "Завершён" ? "default" : "secondary"}
                          className="w-fit"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tech.map((tech) => (
                          <motion.div
                            key={tech}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <CardContent className="p-6 sm:p-8">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-4" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold mb-4"
                    whileHover={{ 
                      scale: 1.05,
                      color: "var(--primary)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Готов к новым вызовам!
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Ищу интересные проекты и возможности для профессионального роста. 
                    Давайте создадим что-то удивительное вместе!
                  </motion.p>
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild size="lg" className="cursor-pointer w-full sm:w-auto">
                      <Link href="/contact">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center justify-center"
                        >
                          Начать сотрудничество
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                          </motion.div>
                        </motion.div>
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
