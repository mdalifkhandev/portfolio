
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Computer Science and Technology',
    institution: 'Thakurgaon Polytechnic Institute, Thakurgaon.',
    period: '2021 - 2025',
    status:'GPA- (3.60 out of 4.00)',
    score: '85%',
  },
  {
    degree: 'Secondary School Certificate-(SSC)',
    institution: 'Boda Govt. Pilot Model School & College',
    period: '2019 - 2021',
    status:'GPA- (4.67 out of 5.00)',
    score: '100%',
  },
  {
    degree: 'Junior School Certificate-(JSC)',
    institution: 'Boda Govt. Pilot Model School & College, Boda , Panchagarh',
    period: '2016 - 2018',
    status:'GPA- (4.00 out of 5.00)',
    score: '100%',
  },
  {
    degree: 'Primary School Certificate-(PSC)',
    institution: 'Chandanbari Primary School, Boda , Panchagarh',//5HJR+RHP
    period: '2011 - 2015',
    status:'GPA- (5.00 out of 5.00)',
    score: '100%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}