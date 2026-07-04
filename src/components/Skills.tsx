import { SectionTitle } from './ui/SectionTitle';
import { 
  SiHtml5, SiCss, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, 
  SiTypescript, SiGit, SiGithub, SiVite, SiMongoose, SiMaterialdesign, SiAntdesign, 
  SiDaisyui, SiBootstrap, SiRedux, SiFigma, SiSocketdotio, SiCplusplus, SiPrisma, 
  SiPostgresql, SiPostman, SiSwagger, SiVercel, SiStripe, SiNamecheap, SiCpanel, 
  SiExpo, SiLinux 
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs, FaReact, FaWindows } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';

const skills = [
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'React.js', icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS3', icon: SiCss, color: '#1572b6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  { name: 'Material UI', icon: SiMaterialdesign, color: '#007fff' },
  { name: 'Daisy UI', icon: SiDaisyui, color: '#c084fc' },
  { name: 'Ant Design', icon: SiAntdesign, color: '#0170fe' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68a063' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Socket.IO', icon: SiSocketdotio, color: '#808080' },
  { name: 'Git', icon: SiGit, color: '#f34f29' },
  { name: 'GitHub', icon: SiGithub, color: '#808080' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Apidog', icon: MdApi, color: '#FF5C5C' },
  { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
  { name: 'Firebase', icon: IoLogoFirebase, color: '#ffca28' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
  { name: 'Namecheap', icon: SiNamecheap, color: '#DE3926' },
  { name: 'cPanel', icon: SiCpanel, color: '#FF6C2C' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'React Native', icon: FaReact, color: '#61dafb' },
  { name: 'Expo', icon: SiExpo, color: '#000000' },
  { name: 'Windows', icon: FaWindows, color: '#0078D6' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* skills */}
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110 cursor-pointer w-24 sm:w-28"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200 mt-2">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
