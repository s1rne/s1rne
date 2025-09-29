"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Save, X } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectData {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  results: string;
  status: 'completed' | 'in-progress' | 'planned';
  links: {
    demo?: string;
    github?: string;
    website?: string;
  };
  featured: boolean;
}

interface ExperienceData {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  current: boolean;
}

interface AdminPanelProps {
  onAddProject?: (project: ProjectData) => void;
  onAddExperience?: (experience: ExperienceData) => void;
}

export default function AdminPanel({ onAddProject, onAddExperience }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'project' | 'experience'>('project');
  const [showForm, setShowForm] = useState(false);

  // Форма для проекта
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    technologies: '',
    role: '',
    results: '',
    status: 'completed' as 'completed' | 'in-progress' | 'planned',
    links: {
      demo: '',
      github: '',
      website: ''
    }
  });

  // Форма для опыта работы
  const [experienceForm, setExperienceForm] = useState({
    title: '',
    company: '',
    period: '',
    description: '',
    responsibilities: '',
    achievements: '',
    technologies: '',
    current: false
  });

  const handleAddProject = () => {
    const newProject = {
      id: `project-${Date.now()}`,
      name: projectForm.name,
      description: projectForm.description,
      technologies: projectForm.technologies.split(',').map(tech => tech.trim()),
      role: projectForm.role,
      results: projectForm.results,
      status: projectForm.status,
      links: {
        demo: projectForm.links.demo || undefined,
        github: projectForm.links.github || undefined,
        website: projectForm.links.website || undefined
      },
      featured: true
    };

    onAddProject?.(newProject);
    setProjectForm({
      name: '',
      description: '',
      technologies: '',
      role: '',
      results: '',
      status: 'completed',
      links: { demo: '', github: '', website: '' }
    });
    setShowForm(false);
  };

  const handleAddExperience = () => {
    const newExperience = {
      id: `exp-${Date.now()}`,
      title: experienceForm.title,
      company: experienceForm.company,
      period: experienceForm.period,
      description: experienceForm.description,
      responsibilities: experienceForm.responsibilities.split('\n').filter(r => r.trim()),
      achievements: experienceForm.achievements.split('\n').filter(a => a.trim()),
      technologies: experienceForm.technologies.split(',').map(tech => tech.trim()),
      current: experienceForm.current
    };

    onAddExperience?.(newExperience);
    setExperienceForm({
      title: '',
      company: '',
      period: '',
      description: '',
      responsibilities: '',
      achievements: '',
      technologies: '',
      current: false
    });
    setShowForm(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {!showForm ? (
          <Button
            onClick={() => setShowForm(true)}
            className="rounded-full w-14 h-14 shadow-lg"
            size="lg"
          >
            <Plus className="w-6 h-6" />
          </Button>
        ) : (
          <Card className="w-96 max-h-[80vh] overflow-y-auto">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Добавить {activeTab === 'project' ? 'проект' : 'опыт работы'}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForm(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={activeTab === 'project' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('project')}
                >
                  Проект
                </Button>
                <Button
                  variant={activeTab === 'experience' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('experience')}
                >
                  Опыт работы
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {activeTab === 'project' ? (
                <>
                  <div>
                    <label className="text-sm font-medium">Название проекта</label>
                    <Input
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                      placeholder="RoboFirst Platform"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Описание</label>
                    <Textarea
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      placeholder="Обучающая платформа по программированию роботов..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Технологии (через запятую)</label>
                    <Input
                      value={projectForm.technologies}
                      onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                      placeholder="Next.js, MongoDB, Docker, Python"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Ваша роль</label>
                    <Input
                      value={projectForm.role}
                      onChange={(e) => setProjectForm({...projectForm, role: e.target.value})}
                      placeholder="Fullstack Developer, Tech Lead"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Результаты</label>
                    <Textarea
                      value={projectForm.results}
                      onChange={(e) => setProjectForm({...projectForm, results: e.target.value})}
                      placeholder="Активное развитие проекта, получение грантов..."
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Статус</label>
                    <div className="flex gap-2">
                      {['completed', 'in-progress', 'planned'].map((status) => (
                        <Button
                          key={status}
                          variant={projectForm.status === status ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setProjectForm({...projectForm, status: status as 'completed' | 'in-progress' | 'planned'})}
                        >
                          {status === 'completed' ? 'Завершён' : 
                           status === 'in-progress' ? 'В разработке' : 'Планируется'}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ссылки</label>
                    <Input
                      value={projectForm.links.demo}
                      onChange={(e) => setProjectForm({
                        ...projectForm, 
                        links: {...projectForm.links, demo: e.target.value}
                      })}
                      placeholder="Демо (https://...)"
                    />
                    <Input
                      value={projectForm.links.github}
                      onChange={(e) => setProjectForm({
                        ...projectForm, 
                        links: {...projectForm.links, github: e.target.value}
                      })}
                      placeholder="GitHub (https://github.com/...)"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium">Должность</label>
                    <Input
                      value={experienceForm.title}
                      onChange={(e) => setExperienceForm({...experienceForm, title: e.target.value})}
                      placeholder="Middle Frontend Developer"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Компания</label>
                    <Input
                      value={experienceForm.company}
                      onChange={(e) => setExperienceForm({...experienceForm, company: e.target.value})}
                      placeholder="BlockFirst"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Период работы</label>
                    <Input
                      value={experienceForm.period}
                      onChange={(e) => setExperienceForm({...experienceForm, period: e.target.value})}
                      placeholder="2025"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Описание</label>
                    <Textarea
                      value={experienceForm.description}
                      onChange={(e) => setExperienceForm({...experienceForm, description: e.target.value})}
                      placeholder="Разработка адаптивных интерфейсов..."
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Обязанности (каждая с новой строки)</label>
                    <Textarea
                      value={experienceForm.responsibilities}
                      onChange={(e) => setExperienceForm({...experienceForm, responsibilities: e.target.value})}
                      placeholder="Адаптивная вёрстка по Figma&#10;Разработка бизнес-логики"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Достижения (каждое с новой строки)</label>
                    <Textarea
                      value={experienceForm.achievements}
                      onChange={(e) => setExperienceForm({...experienceForm, achievements: e.target.value})}
                      placeholder="Полное удовлетворение владельца проекта&#10;Запуск проекта раньше срока"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Технологии (через запятую)</label>
                    <Input
                      value={experienceForm.technologies}
                      onChange={(e) => setExperienceForm({...experienceForm, technologies: e.target.value})}
                      placeholder="React, Next.js, TypeScript, Tailwind CSS"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="current"
                      checked={experienceForm.current}
                      onChange={(e) => setExperienceForm({...experienceForm, current: e.target.checked})}
                    />
                    <label htmlFor="current" className="text-sm">Текущее место работы</label>
                  </div>
                </>
              )}

              <div className="flex gap-2 pt-4">
                <Button onClick={activeTab === 'project' ? handleAddProject : handleAddExperience} className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  Добавить
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
