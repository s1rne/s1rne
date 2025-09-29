"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import { resumeData } from "@/data/resume-data";
import InteractiveBackground from "@/components/interactive-background";

export default function Projects() {
  const projects = resumeData.projects.map(project => ({
    title: project.name,
    description: project.description,
    image: `/project${project.id}.jpg`,
    tech: project.technologies,
    status: project.status === 'completed' ? 'Завершён' : 
            project.status === 'in-progress' ? 'В разработке' : 'Планируется',
    year: "2024-2025",
    features: project.technologies.slice(0, 4),
    links: {
      live: project.links?.demo,
      github: project.links?.github
    },
    impact: project.results,
    role: project.role
  }));


  const getStatusColor = (status: string) => {
    switch (status) {
      case "Завершён":
        return "default";
      case "В разработке":
        return "secondary";
      case "Планируется":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Мои проекты
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Коллекция проектов, демонстрирующих мой опыт в различных технологиях и подходах к разработке
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col sm:flex-row gap-1 sm:gap-2">
                      <Badge variant={getStatusColor(project.status)} className="text-xs">
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Ключевые функции:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Технологии:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Результат:</h4>
                    <p className="text-sm text-primary font-medium">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    {project.links.live && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Демо
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Код
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Заинтересованы в сотрудничестве?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                Готов обсудить новые проекты и возможности. Давайте создадим что-то удивительное вместе!
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="/contact">
                  Связаться со мной
                  <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
