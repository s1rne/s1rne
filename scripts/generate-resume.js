const fs = require('fs');
const path = require('path');

// Импортируем данные резюме
const resumeData = require('../src/data/resume-data.ts').resumeData;

function getSkillLevel(level) {
  if (level >= 90) return 'Эксперт';
  if (level >= 80) return 'Продвинутый';
  if (level >= 60) return 'Средний';
  return 'Начинающий';
}

function formatSkills(skills) {
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
}

function formatExperience(exp) {
  return `### ${exp.title}
**${exp.company}** | ${exp.period}

${exp.description}

**Обязанности:**
${exp.responsibilities.map(r => `- ${r}`).join('\n')}

**Достижения:**
${exp.achievements.map(a => `- ${a}`).join('\n')}

**Технологии:** ${exp.technologies.join(', ')}

---`;
}

function formatProject(project) {
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
}

function formatEducation(edu) {
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
}

function formatCertification(cert) {
  let result = `- **${cert.name}** - ${cert.issuer} (${cert.date})`;
  if (cert.description) {
    result += `\n  ${cert.description}`;
  }
  return result;
}

function formatAchievement(achievement) {
  return `- **${achievement.title}** - ${achievement.description} (${achievement.date})`;
}

function formatLanguage(lang) {
  return `- **${lang.name}** - ${lang.level}${lang.native ? ' (Родной)' : ''}`;
}

function generateResumeMarkdown() {
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

// Генерируем резюме
const markdown = generateResumeMarkdown();

// Сохраняем в файл
fs.writeFileSync('resume.md', markdown, 'utf8');

console.log('✅ Резюме сгенерировано и сохранено в resume.md');
console.log('📄 Теперь вы можете конвертировать его в PDF используя инструкции из CONVERT_TO_PDF.md');
