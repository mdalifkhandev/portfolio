
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'Fatchen Shop Copy Daraz',
    description: 'This is a fully functional e-commerce web application inspired by Daraz, designed to provide a seamless shopping experience for both men and women.  It offers a wide range of products, including electronics, fashion items, and more.',
    image: '/assets/daraz-e-comarch.png',
    link: 'https://daraz-e-comarch.web.app/',
    gitlink:'https://github.com/mdalifkhandev/daraz-e-comarch-clain.git',
    tags: ['React', 'Node.js', 'Tailwind CSS','MongoDB','ExpressJS',"Firebase","DaisyUI"],
  },
  {
    title: 'Fitness Equipment sales and services',
    description: 'This is a dynamic full-stack web application built for selling fitness equipment and offering maintenance services. It provides a user-friendly interface for browsing products .',
    image: '/assets/fitness-equipment.png',
    link: 'https://fitness-equipment.vercel.app',
    gitlink:'https://github.com/mdalifkhandev/fitness-equipment.git',
    tags: ['React', 'Node.js', 'Tailwind CSS','MongoDB','ExpressJS',"Typescript",'vite',"Antd Design"],
  },
  {
    title: 'Flight Ticket Application',
    description: 'This is a responsive and modern frontend travel booking user interface, designed to provide a smooth user experience for searching and booking flights, hotels, and tour packages. ',
    image: '/assets/flight-ticket.png',
    link: 'https://flight-taiket.vercel.app/',
    gitlink:'https://github.com/mdalifkhandev/flight-taiket',
    tags: ['React', 'Node.js', 'Tailwind CSS','Redux','Antd Design'],
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing projects, skills, and accomplishments, highlighting expertise in web development and design.',
    image: '/assets/portfolio.png',
    link: '/',
    gitlink:'',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}