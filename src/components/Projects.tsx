import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

interface ProjectData {
  title: string;
  description: string;
  image: string;
  link?: string;
  gitlink?: string;
  playStore?: string;
  appStore?: string;
  isPortrait?: boolean;
  tags: string[];
}

const projects: ProjectData[] = [
  {
    title: 'Phixels Ecosystem (Full-Stack SaaS)',
    description: 'A scalable full-stack SaaS platform featuring a dynamic landing page, client dashboard, custom CMS with Tiptap rich-text editor, JWT authentication, Zod validation, and Cloudinary media management.',
    image: '/assets/phixels.png',
    link: 'https://phixels.agency/',
    gitlink: 'https://github.com/mdalifkhandev/phixels-web',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Cloudinary', 'Zod'],
  },
  {
    title: 'Hiruu App (Job Marketplace & Workforce Management)',
    description: 'A cross-platform mobile application bridging employers and job seekers with real-time shift scheduling, live messaging via WebSockets, QR code attendance tracking, and push notifications.',
    image: '/assets/hiruu.png',
    gitlink: 'https://github.com/mdalifkhandev/Hiruu.git',
    playStore: 'https://play.google.com/store/apps/details?id=app.hiruu',
    appStore: 'https://apps.apple.com/gr/app/hiruu/id6780495511',
    isPortrait: true,
    tags: ['React Native', 'Expo', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets', 'JWT'],
  },
  {
    title: 'Bank Management System',
    description: 'A modern financial platform for clients and lenders featuring credit scoring, loan management, real-time analytics dashboards, and enterprise solutions.',
    image: '/assets/lone.png',
    link: 'https://lone-frontend.vercel.app/',
    gitlink: 'https://github.com/mdalifkhandev/lone-frontend',
    tags: ['Next.js', 'React', 'TypeScript', 'Zustand', 'React Query', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
  },
  {
    title: 'Fashion E-Commerce (Daraz Clone)',
    description: 'A full-featured e-commerce web application inspired by Daraz, featuring multi-category product catalog, cart system, user authentication, and responsive design.',
    image: '/assets/daraz-e-comarch.png',
    link: 'https://daraz-e-comarch.web.app/',
    gitlink: 'https://github.com/mdalifkhandev/daraz-e-comarch-clain.git',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase', 'DaisyUI'],
  },
  {
    title: 'Fitness Equipment Sales & Services',
    description: 'A dynamic full-stack web application designed for selling fitness gear and booking maintenance services with an intuitive user interface and product browsing.',
    image: '/assets/fitness-equipment.png',
    link: 'https://fitness-equipment.vercel.app',
    gitlink: 'https://github.com/mdalifkhandev/fitness-equipment.git',
    tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Vite', 'Ant Design'],
  },
  {
    title: 'Flight Ticket Booking Application',
    description: 'A responsive and modern travel booking user interface designed for smooth search, flight comparison, and reservation workflows for flights and hotels.',
    image: '/assets/flight-ticket.png',
    link: 'https://flight-taiket.vercel.app/',
    gitlink: 'https://github.com/mdalifkhandev/flight-taiket',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Ant Design'],
  },
  {
    title: 'Developer Portfolio',
    description: 'A high-performance personal portfolio built with React, Vite, and Tailwind CSS showcasing projects, technical skills, and engineering background.',
    image: '/assets/portfolio.png',
    link: 'https://mdalifkhan.vercel.app/',
    gitlink: 'https://github.com/mdalifkhandev/portfolio',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}