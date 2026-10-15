import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { 
  SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, 
  SiTypescript, SiGit, SiGithub, SiVite, SiMongoose, SiMaterialdesign, SiAntdesign, 
  SiDaisyui, SiBootstrap, SiRedux, SiFigma, SiSocketdotio, SiCplusplus, SiPrisma, 
  SiPostgresql, SiPostman, SiSwagger, SiVercel, SiStripe, SiExpo, SiLinux, 
  SiNestjs, SiFramer, SiJsonwebtokens, SiZod, SiCloudinary
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';
import { Layout, Server, Database, Cloud, Wrench, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CategoryId = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Cloud & Auth' | 'Tools & Mobile';

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface SkillCategory {
  id: CategoryId;
  title: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'Frontend',
    title: 'Frontend & UI',
    icon: Layout,
    skills: [
      { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'Material UI', icon: SiMaterialdesign, color: '#007fff' },
      { name: 'Daisy UI', icon: SiDaisyui, color: '#c084fc' },
      { name: 'Ant Design', icon: SiAntdesign, color: '#0170fe' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
    ],
  },
  {
    id: 'Backend',
    title: 'Backend & APIs',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Nest.js', icon: SiNestjs, color: '#E0234E' },
      { name: 'REST APIs', icon: MdApi, color: '#FF5C5C' },
      { name: 'Socket.IO', icon: SiSocketdotio, color: '#808080' },
      { name: 'JWT Auth', icon: SiJsonwebtokens, color: '#000000' },
      { name: 'Zod', icon: SiZod, color: '#3E67B1' },
    ],
  },
  {
    id: 'Database',
    title: 'Databases & ORM',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
    ],
  },
  {
    id: 'Cloud & Auth',
    title: 'Cloud & Services',
    icon: Cloud,
    skills: [
      { name: 'AWS (S3)', icon: FaAws, color: '#FF9900' },
      { name: 'Firebase', icon: IoLogoFirebase, color: '#ffca28' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
  },
  {
    id: 'Tools & Mobile',
    title: 'Mobile, Tools & Systems',
    icon: Wrench,
    skills: [
      { name: 'React Native', icon: FaReact, color: '#61dafb' },
      { name: 'Expo', icon: SiExpo, color: '#000000' },
      { name: 'Git', icon: SiGit, color: '#f34f29' },
      { name: 'GitHub', icon: SiGithub, color: '#808080' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Vite', icon: SiVite, color: '#646cff' },
      { name: 'VS Code', icon: VscVscode, color: '#007acc' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
];

const tabs = [
  { id: 'All', label: 'All Skills', icon: Sparkles },
  { id: 'Frontend', label: 'Frontend', icon: Layout },
  { id: 'Backend', label: 'Backend', icon: Server },
  { id: 'Database', label: 'Database', icon: Database },
  { id: 'Cloud & Auth', label: 'Cloud & Auth', icon: Cloud },
  { id: 'Tools & Mobile', label: 'Tools & Mobile', icon: Wrench },
] as const;

export function Skills() {
  const [activeTab, setActiveTab] = useState<CategoryId>('All');

  const visibleCategories = activeTab === 'All'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <SectionTitle>Technical Skills</SectionTitle>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as CategoryId)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            {visibleCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div
                  key={category.id}
                  className="p-6 sm:p-8 rounded-2xl bg-gray-50/80 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700/60 shadow-sm"
                >
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                      {category.title}
                    </h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 font-semibold ml-auto">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:bg-blue-50/30 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1 cursor-default text-center"
                        >
                          <Icon size={36} color={tech.color} />
                          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 mt-2.5 line-clamp-1">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
