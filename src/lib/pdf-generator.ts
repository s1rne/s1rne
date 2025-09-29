import { resumeData } from "@/data/resume-data";

export function generateResumeMarkdown(): string {
  const formatSkills = (skills: typeof resumeData.skills) => {
    const categories = {
      frontend: skills.filter(s => s.category === 'frontend'),
      backend: skills.filter(s => s.category === 'backend'),
      database: skills.filter(s => s.category === 'database'),
      devops: skills.filter(s => s.category === 'devops'),
      tools: skills.filter(s => s.category === 'tools'),
      other: skills.filter(s => s.category === 'other')
    };

    let result = '';
    
    if (categories.frontend.length > 0) {
      result += '### Frontend\n';
      categories.frontend.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    if (categories.backend.length > 0) {
      result += '### Backend\n';
      categories.backend.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    if (categories.database.length > 0) {
      result += '### Базы данных\n';
      categories.database.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    if (categories.devops.length > 0) {
      result += '### DevOps & Инструменты\n';
      categories.devops.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    if (categories.tools.length > 0) {
      result += '### Инструменты разработки\n';
      categories.tools.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    if (categories.other.length > 0) {
      result += '### Дополнительно\n';
      categories.other.forEach(skill => {
        result += `- **${skill.name}** - ${getSkillLevel(skill.level)}\n`;
      });
      result += '\n';
    }

    return result;
  };

  const getSkillLevel = (level: number): string => {
    if (level >= 90) return 'Эксперт';
    if (level >= 80) return 'Продвинутый';
    if (level >= 60) return 'Средний';
    return 'Начинающий';
  };

  const formatExperience = (exp: typeof resumeData.experience[0]) => {
    return `### ${exp.title}
**${exp.company}** | ${exp.period}

${exp.description}

**Обязанности:**
${exp.responsibilities.map(r => `- ${r}`).join('\n')}

**Достижения:**
${exp.achievements.map(a => `- ${a}`).join('\n')}

**Технологии:** ${exp.technologies.join(', ')}

---`;
  };

  const formatProject = (project: typeof resumeData.projects[0]) => {
    const statusMap = {
      'completed': 'Завершён',
      'in-progress': 'В разработке',
      'planned': 'Планируется'
    };

    let result = `### ${project.name}
**${project.role}**

${project.description}

**Технологии:** ${project.technologies.join(', ')}

**Результаты:** ${project.results}

**Статус:** ${statusMap[project.status]}`;

    if (project.links?.demo || project.links?.github || project.links?.website) {
      result += '\n\n**Ссылки:**';
      if (project.links.demo) result += `\n- Демо: ${project.links.demo}`;
      if (project.links.github) result += `\n- GitHub: ${project.links.github}`;
      if (project.links.website) result += `\n- Сайт: ${project.links.website}`;
    }

    result += '\n\n---';
    return result;
  };

  const formatEducation = (edu: typeof resumeData.education[0]) => {
    let result = `### ${edu.institution}
**${edu.degree}** | ${edu.period}

**Направление:** ${edu.field}`;

    if (edu.achievements && edu.achievements.length > 0) {
      result += '\n\n**Достижения:**';
      edu.achievements.forEach(achievement => {
        result += `\n- ${achievement}`;
      });
    }

    return result;
  };

  const formatCertification = (cert: typeof resumeData.certifications[0]) => {
    let result = `- **${cert.name}** - ${cert.issuer} (${cert.date})`;
    if (cert.description) {
      result += `\n  ${cert.description}`;
    }
    return result;
  };

  const formatAchievement = (achievement: typeof resumeData.achievements[0]) => {
    return `- **${achievement.title}** - ${achievement.description} (${achievement.date})`;
  };

  const formatLanguage = (lang: typeof resumeData.languages[0]) => {
    return `- **${lang.name}** - ${lang.level}${lang.native ? ' (Родной)' : ''}`;
  };

  return `# ${resumeData.personal.name}
## ${resumeData.personal.position}

---

**📧 Email:** ${resumeData.personal.email}  
**📱 Телефон:** ${resumeData.personal.phone}  
**📍 Локация:** ${resumeData.personal.location}  
${resumeData.personal.telegram ? `**💬 Telegram:** ${resumeData.personal.telegram}` : ''}  
${resumeData.personal.github ? `**🐙 GitHub:** ${resumeData.personal.github}` : ''}  

---

## 🎯 О себе

${resumeData.summary}

**Ключевые качества:**
${resumeData.softSkills.map(skill => `- ${skill.name}`).join('\n')}

---

## 💻 Технические навыки

${formatSkills(resumeData.skills)}

---

## 💼 Опыт работы

${resumeData.experience.map(formatExperience).join('\n\n')}

---

## 🚀 Ключевые проекты

${resumeData.projects.filter(p => p.featured).map(formatProject).join('\n\n')}

---

## 🎓 Образование

${resumeData.education.map(formatEducation).join('\n\n')}

---

## 🏆 Сертификации и достижения

### Сертификации
${resumeData.certifications.map(formatCertification).join('\n')}

### Профессиональные награды
${resumeData.achievements.map(formatAchievement).join('\n')}

---

## 🌍 Языки

${resumeData.languages.map(formatLanguage).join('\n')}

---

## 🎨 Интересы и хобби

${resumeData.interests.map(interest => `- ${interest}`).join('\n')}

---

## 📝 Дополнительная информация

- **Формат работы:** Удалённо/коворкинг
- **Командная работа:** Люблю работать в команде с интересными людьми
- **Технологии:** Увлекаюсь новыми технологиями и их применением
- **Международный опыт:** Имею опыт работы с международными командами

---

*Резюме создано с использованием современных технологий и структурированных данных для лёгкого обновления.*`;
}

export function downloadResumePDF() {
  const markdown = generateResumeMarkdown();
  
  // Создаем blob с markdown содержимым
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  
  // Создаем ссылку для скачивания
  const link = document.createElement('a');
  link.href = url;
  link.download = `resume-${resumeData.personal.name.replace(/\s+/g, '-').toLowerCase()}.md`;
  
  // Добавляем ссылку в DOM, кликаем и удаляем
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Освобождаем память
  URL.revokeObjectURL(url);
}

export function copyResumeToClipboard() {
  const markdown = generateResumeMarkdown();
  navigator.clipboard.writeText(markdown).then(() => {
    alert('Резюме скопировано в буфер обмена!');
  });
}
