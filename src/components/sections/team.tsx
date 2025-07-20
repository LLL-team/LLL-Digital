import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

type Member = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
};

type Dictionary = {
  title: string;
  subtitle: string;
  members: Member[];
};

const teamMemberData = [
  {
    image: 'https://placehold.co/200x200.png',
    hint: 'male developer portrait',
    social: { linkedin: '#', github: '#' },
  },
  {
    image: 'https://placehold.co/200x200.png',
    hint: 'female designer portrait',
    social: { linkedin: '#', github: '#' },
  },
  {
    image: 'https://placehold.co/200x200.png',
    hint: 'male programmer portrait',
    social: { linkedin: '#', github: '#' },
  },
  {
    image: 'https://placehold.co/200x200.png',
    hint: 'female manager portrait',
    social: { linkedin: '#', github: '#' },
  },
];

export function Team({ dictionary }: { dictionary: Dictionary }) {
  const teamMembers = dictionary.members.map((member, index) => ({
    ...member,
    ...teamMemberData[index],
  }));

  return (
    <section id="team" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mt-2">
            {dictionary.subtitle}
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
