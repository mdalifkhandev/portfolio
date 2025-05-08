import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Unknown It Ltd.',
    period: 'July 2025 - Novembar 2025',
    description: 'Developing and maintaining web applications using MERN stack. Implemented key features that improved user engagement by 40%.',
  },
  {
    title: 'Web Development Lead',
    company: 'College Tech Club',
    period: '2024 - Present',
    description: 'Led a team of Some developers in creating the college event management platform. Mentored junior developers in web technologies.',
  },
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