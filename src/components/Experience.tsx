import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Backend Developer Intern (Node.js)',
    company: 'BD Calling Academy IT Ltd.',
    period: 'September 2025 - Present',
    description: 'Contributing to the development and maintenance of web applications using the MERN stack. Implemented core backend features and optimized APIs, resulting in improved system performance and enhanced user engagement.',
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