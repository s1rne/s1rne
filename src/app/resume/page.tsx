"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Globe,
  Calendar,
  Award,
  BookOpen,
  Code,
  Users,
  Target,
  Star
} from "lucide-react";
import { resumeData } from "@/data/resume-data";
import { downloadResumePDF } from "@/lib/pdf-generator";

export default function Resume() {

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center gap-2">
        <span className="font-medium text-sm sm:text-base break-words min-w-0 flex-1">{name}</span>
        <span className="text-xs sm:text-sm text-muted-foreground flex-shrink-0">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-primary h-2 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 pt-20 sm:pt-24 pb-12 sm:pb-16" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      <div className="container mx-auto max-w-6xl px-4 overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-primary">
                  <AvatarImage src="/avatar.jpg" alt={resumeData.personal.name} />
                  <AvatarFallback className="text-xl sm:text-2xl font-bold bg-primary text-primary-foreground">
                    АИ
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">{resumeData.personal.name}</h1>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-4 break-words">{resumeData.personal.position}</p>
                  
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{resumeData.personal.location}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{resumeData.personal.email}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{resumeData.personal.phone}</span>
                    </div>
                  </div>
                  
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                      {resumeData.personal.github && (
                        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                          <a href={`https://${resumeData.personal.github}`} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                      {resumeData.personal.telegram && (
                        <Button asChild variant="outline" size="sm" className="w-full sm:w-auto">
                          <a href={`https://t.me/${resumeData.personal.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                            <Mail className="w-4 h-4 mr-2" />
                            Telegram
                          </a>
                        </Button>
                      )}
                      <Button size="sm" onClick={downloadResumePDF} className="w-full sm:w-auto">
                        <Download className="w-4 h-4 mr-2" />
                        Скачать PDF
                      </Button>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8 min-w-0">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">О себе</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed break-words">{resumeData.summary}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Опыт работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 overflow-hidden">
                  {resumeData.experience.map((job, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-2 mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg break-words">{job.title}</h3>
                          <p className="text-primary font-medium text-sm sm:text-base break-words">{job.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit text-xs">
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm sm:text-base break-words">{job.description}</p>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm break-words">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      {index < resumeData.experience.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Собственные проекты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 overflow-hidden">
                  {resumeData.projects.map((project, index) => (
                    <div key={index}>
                      <div className="flex flex-col gap-2 mb-2">
                        <h3 className="font-semibold text-sm sm:text-base md:text-lg break-words">{project.name}</h3>
                        <Badge variant="secondary" className="w-fit text-xs break-words">
                          {project.role}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm sm:text-base break-words">{project.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs break-words">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-primary break-words">{project.results}</p>
                      {index < resumeData.projects.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8 min-w-0">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Технические навыки</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resumeData.skills
                    .filter(skill => skill.category === 'frontend' || skill.category === 'backend')
                    .slice(0, 6)
                    .map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Личностные качества</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {resumeData.softSkills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs break-words">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Образование</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-sm sm:text-base break-words">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm sm:text-base break-words">{edu.institution}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{edu.period}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{edu.field}</p>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-2">
                          {edu.achievements.map((achievement, idx) => (
                            <p key={idx} className="text-xs sm:text-sm text-muted-foreground break-words">• {achievement}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Сертификации</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <div className="min-w-0 flex-1">
                        <span className="text-xs sm:text-sm font-medium block break-words">{cert.name}</span>
                        <p className="text-xs text-muted-foreground break-words">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="break-words">Языки</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {resumeData.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center gap-2">
                      <span className="font-medium text-sm sm:text-base break-words">{lang.name}</span>
                      <Badge variant="outline" className="text-xs flex-shrink-0">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
