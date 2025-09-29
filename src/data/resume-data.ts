export interface PersonalInfo {
  name: string;
  nickname?: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
  website?: string;
  avatar?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'database' | 'tools' | 'other';
}

export interface SoftSkill {
  name: string;
  description?: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  results: string;
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  status: 'completed' | 'in-progress' | 'planned';
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  category: 'professional' | 'academic' | 'personal';
}

export interface Language {
  name: string;
  level: string;
  native?: boolean;
}

export interface ResumeData {
  personal: PersonalInfo;
  summary: string;
  skills: Skill[];
  softSkills: SoftSkill[];
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
  languages: Language[];
  interests: string[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Александр Симаранов",
    nickname: "s1rne",
    position: "Middle+ Fullstack Developer",
    location: "Москва, Россия",
    email: "s.simaranov8@email.com",
    phone: "+7 (965) 093-07-00",
    github: "github.com/s1rne",
    telegram: "@s1rne",
    avatar: "https://github.com/s1rne.png"
  },

  summary: "Творческий разработчик с 4+ годами проектной и коммерческой работы. Специализируюсь на React, Node.js, Python и инструментах DevOps. Быстрое саморазвитие, лидерские качества по сплочению команды, трудоголик с творческими подходами к решению задач. Мотивирован созданием продуктов, которые приносят реальную пользу людям и обществу.",

  skills: [
    // Frontend
    { name: "TypeScript/JavaScript", level: 95, category: 'frontend' },
    { name: "React", level: 90, category: 'frontend' },
    { name: "Next.js", level: 85, category: 'frontend' },
    { name: "Tailwind CSS", level: 85, category: 'frontend' },
    
    // Backend
    { name: "Python", level: 95, category: 'backend' },
    { name: "Node.js", level: 95, category: 'backend' },
    { name: "Express", level: 70, category: 'backend' },
    { name: "NestJS", level: 80, category: 'backend' },
    { name: "FastAPI", level: 75, category: 'backend' },
    { name: "Java", level: 50, category: 'backend' },
    { name: "Go", level: 60, category: 'backend' },
    
    // Databases
    { name: "PostgreSQL", level: 80, category: 'database' },
    { name: "MongoDB", level: 90, category: 'database' },
    { name: "MySQL", level: 85, category: 'database' },
    { name: "Redis", level: 70, category: 'database' },
    
    // DevOps
    { name: "Docker", level: 80, category: 'devops' },
    { name: "Nginx", level: 75, category: 'devops' },
    { name: "CI/CD", level: 70, category: 'devops' },
    
    // Tools
    { name: "Git", level: 90, category: 'tools' },
    { name: "VS Code", level: 85, category: 'tools' },
    { name: "Cursor", level: 90, category: 'tools' },
    
    // Other
    { name: "Machine Learning", level: 45, category: 'other' },
    { name: "Cybersecurity", level: 75, category: 'other' },
    { name: "API Development", level: 85, category: 'other' }
  ],

  softSkills: [
    { name: "Быстрое саморазвитие", description: "Постоянно изучаю новые технологии и подходы" },
    { name: "Лидерские качества", description: "Способность сплачивать команды и вести проекты" },
    { name: "Трудоголик", description: "Высокая работоспособность и преданность делу" },
    { name: "Выполнение дел до конца", description: "Ответственность и доведение задач до результата" },
    { name: "Творческие подходы", description: "Нестандартное мышление и инновационные решения" },
    { name: "Коммуникация", description: "Эффективное взаимодействие в команде" },
    { name: "Менторство", description: "Опыт обучения и развития коллег" },
    { name: "Отсутствие конфликтов", description: "Лояльность и конструктивное взаимодействие" }
  ],

  experience: [
    {
      id: "blockfirst-2025",
      title: "Middle Frontend Developer",
      company: "BlockFirst",
      period: "2025",
      description: "Разработка адаптивных интерфейсов и бизнес-логики для веб-приложений",
      responsibilities: [
        "Адаптивная вёрстка по Figma",
        "Разработка бизнес-логики элементов и страниц",
        "Code review и поддержание качества кода"
      ],
      achievements: [
        "Полное удовлетворение владельца проекта",
        "Создание эффективного User flow",
        "Запуск проекта раньше запланированного срока"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      current: true
    },
    {
      id: "luckygames-2024-2025",
      title: "Middle+ Backend Developer + DevOps",
      company: "LuckyGames",
      period: "2024-2025",
      description: "Миграция монолитной архитектуры на микросервисную с обеспечением безопасности",
      responsibilities: [
        "Перенос монолитной архитектуры на микросервисную",
        "Полный цикл разработки микросервисов",
        "Обеспечение безопасности бизнес-систем",
        "Взаимодействие с frontend разработчиками",
        "Развёртывание и поддержание сервисов",
        "Улучшение работы с базами данных",
        "Обеспечение информационной безопасности и тестирование продукта"
      ],
      achievements: [
        "Качественное улучшение архитектуры системы",
        "Внедрение новых функций и фич",
        "Защита от кибер-уязвимостей",
        "Значительное повышение скорости работы сайта"
      ],
      technologies: ["Node.js", "Python", "Docker", "PostgreSQL", "Redis", "Nginx"],
      current: false
    },
    {
      id: "pet-projects-2024-2025",
      title: "Fullstack Developer + Product Manager",
      company: "Собственные pet проекты",
      period: "2024-2025",
      description: "Полный цикл разработки и запуска собственных проектов",
      responsibilities: [
        "Разработка полного проекта от идеи до запуска",
        "Поиск и сплочение людей в команде",
        "Развитие и продвижение продукта",
        "Поддержка работы проекта"
      ],
      achievements: [
        "Успешные проекты по количеству пользователей",
        "Огромный технический и продуктовый опыт",
        "Приобретение ценных связей в индустрии"
      ],
      technologies: ["Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"],
      current: false
    }
  ],

  projects: [
    {
      id: "robo-first",
      name: "RoboFirst Platform",
      description: "Обучающая платформа по программированию роботов с интерактивным, прикладным и не скучным форматом обучения",
      technologies: ["Next.js", "MongoDB", "PostgreSQL", "Redis", "Web Unity", "REST", "tRPC", "Docker"],
      role: "Fullstack Developer, Tech Lead, DevOps Engineer, Product Manager",
      results: "Активное развитие и разработка проекта, получение грантов на продвижение",
      status: "in-progress",
      featured: true
    },
    {
      id: "misis-auth",
      name: "MISIS Auth",
      description: "Сервис OAuth 2.0 для подключения авторизации через личный кабинет вуза",
      technologies: ["Next.js", "MongoDB", "OAuth 2.0", "tRPC", "REST API", "Crypto"],
      role: "Fullstack Developer",
      results: "Полностью выполнена поставленная задача для подключения авторизации OAuth 2.0 студентов МИСИС",
      links: {
        github: "https://github.com/s1rne/misis-auth",
        demo: "https://misis-auth.vercel.app/"
      },
      status: "completed",
      featured: true
    },
    {
      id: "dao-lingo",
      name: "DaoLingo",
      description: "TON кликер-игра с интеграцией reverse Duolingo app API",
      technologies: ["Next.js", "MongoDB", "Telegram Web App", "tRPC", "Python", "Aiogram"],
      role: "Fullstack Developer, Product Manager, DevOps Engineer",
      results: "Заинтересованность людей и получение базы пользователей, успешная бизнес-модель и техническая часть",
      status: "completed",
      featured: true
    },
    {
      id: "telegram-story-bot",
      name: "Telegram Story Bot",
      description: "Бот для анонимного скачивания Telegram историй",
      technologies: ["Python", "Reverse Engineering", "API", "Telegram Bot API"],
      role: "Reverse Developer, Backend Developer",
      results: "Отреверсены Instagram mobile app API и создан сервер для подключения дополнительного функционала. Успешная продажа услуг пользователям",
      status: "completed",
      featured: false
    },
    {
      id: "kandinsky-api",
      name: "Kandinsky Async API",
      description: "OpenSource Python библиотека для работы с сервисом Kandinsky",
      technologies: ["Python", "AsyncIO", "API", "HTTP"],
      role: "Backend Developer, Library Maintainer",
      results: "Рабочая, удобная и полезная библиотека для использования и интеграции в проекты",
      links: {
        github: "https://github.com/s1rne/kandinsky-async-api"
      },
      status: "completed",
      featured: false
    },
    {
      id: "misis-id",
      name: "MISIS ID",
      description: "OpenSource Python библиотека для работы с системой идентификации МИСИС",
      technologies: ["Python", "API", "Authentication", "HTTP"],
      role: "Backend Developer, Library Maintainer",
      results: "Рабочая, удобная и полезная библиотека для использования и интеграции в проекты",
      links: {
        github: "https://github.com/s1rne/misis-id"
      },
      status: "completed",
      featured: false
    }
  ],

  education: [
    {
      institution: "НИТУ МИСИС",
      degree: "Бакалавр",
      field: "Информатика и вычислительная техника",
      period: "2025 - настоящее время",
      achievements: ["Специализация: Искусственные системы анализа данных"]
    }
  ],

  certifications: [
    {
      name: "Диплом Кибершколы МГУ",
      issuer: "МГУ при ВМК",
      date: "2024",
      description: "Информационная безопасность"
    },
    {
      name: "Специальность инженер-чертёжник",
      issuer: "Профессиональное обучение",
      date: "2024",
      description: "Технические навыки для работы по профессии"
    }
  ],

  achievements: [
    {
      title: "Победитель хакатона 'Вайбатон'",
      description: "Победа в хакатоне от МИСИС",
      date: "2025",
      category: "professional"
    },
    {
      title: "Призовые места на CTF соревнованиях",
      description: "Участие во всероссийских CTF соревнованиях",
      date: "2024-2025",
      category: "professional"
    },
    {
      title: "Дипломы победителя олимпиад по робототехнике",
      description: "Многочисленные дипломы победителя Московских и Российских олимпиад по робототехнике",
      date: "2018-2024",
      category: "academic"
    }
  ],

  languages: [
    { name: "Русский", level: "Родной", native: true },
    { name: "Английский", level: "Средний (B1-B2)", native: false }
  ],

  interests: [
    "Полу-профессиональный волейбол",
    "Игра на флейте",
    "Спортивное саморазвитие",
    "Палаточные путешествия",
    "Робототехника",
    "Кулинария",
    "Футбол, баскетбол, плавание",
    "Художественное творчество"
  ]
};
