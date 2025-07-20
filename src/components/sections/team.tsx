import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    bio: 'Alex is a full-stack wizard with over a decade of experience in building complex web applications.',
    image: 'https://placehold.co/200x200.png',
    hint: 'male developer portrait',
    expertise: ['React', 'Node.js', 'DevOps'],
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Maria Garcia',
    role: 'UI/UX Designer',
    bio: 'Maria has a keen eye for design and crafts beautiful, user-friendly interfaces that users love.',
    image: 'https://placehold.co/200x200.png',
    hint: 'female designer portrait',
    expertise: ['Figma', 'User Research', 'Prototyping'],
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Sam Chen',
    role: 'Frontend Developer',
    bio: 'Sam specializes in creating pixel-perfect, responsive frontends with a focus on performance.',
    image: 'https://placehold.co/200x200.png',
    hint: 'male programmer portrait',
    expertise: ['Vue.js', 'TypeScript', 'Web Animation'],
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Jessica Williams',
    role: 'Project Manager',
    bio: 'Jessica ensures projects are delivered on time and on budget, keeping clients happy and informed.',
    image: 'https://placehold.co/200x200.png',
    hint: 'female manager portrait',
    expertise: ['Agile', 'Scrum', 'Client Relations'],
    social: { linkedin: '#', github: '#' },
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet the Team</h2>
          <p className="text-lg text-muted-foreground mt-2">
            The creative minds behind our successful projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  data-ai-hint={member.hint}
                  width={128}
                  height={128}
                  className="rounded-full mx-auto mb-4 border-4 border-accent/20"
                />
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                <p className="text-muted-foreground mt-3 text-sm">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {member.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
              <div className="flex justify-center gap-4 pb-6">
                <Link href={member.social.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href={member.social.github} target="_blank">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
