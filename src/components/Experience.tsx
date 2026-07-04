import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Jr. React Native Developer',
    company: 'Sparktech Agency',
    period: 'October 2025 - Present',
    description: '• Developed and maintained web and mobile applications\n• Integrated REST APIs and managed database operations\n• Fixed bugs and improved application performance\n• Participated in client meetings and gathered requirements\n• Collaborated with team members to build client projects on time',
  },
  {
    title: 'Intern/Industrial Attachment Trainee',
    company: 'BD Calling Academy – Betopia Group',
    period: 'September – December 2025',
    description: '• Actively assisted in backend development using Node.js, Express.js, MongoDB, and Mongoose\n• Applied concepts of REST API design, database modelling, and Authentication/ Authorization in scalable systems.\n• Collaborated with senior developers to implement clean code and best development practices.',
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}