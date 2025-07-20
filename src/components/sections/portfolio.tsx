import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce site with a custom CMS and payment gateway integration.',
    image: 'https://placehold.co/500x350.png',
    hint: 'e-commerce website',
    tags: ['Next.js', 'Stripe', 'Sanity'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    description: 'A data visualization dashboard for a leading SaaS company in the marketing space.',
    image: 'https://placehold.co/500x350.png',
    hint: 'SaaS dashboard',
    tags: ['React', 'D3.js', 'Firebase'],
    link: '#',
  },
  {
    title: 'Corporate Website',
    description: 'A sleek and professional corporate website for a Fortune 500 company.',
    image: 'https://placehold.co/500x350.png',
    hint: 'corporate website',
    tags: ['Gatsby', 'Contentful', 'GraphQL'],
    link: '#',
  },
  {
    title: 'Booking App',
    description: 'A mobile-first booking application for a chain of boutique hotels.',
    image: 'https://placehold.co/500x350.png',
    hint: 'booking app',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '#',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A glimpse into some of the projects we are proud of.
          </p>
        </div>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          data-ai-hint={project.hint}
                          width={500}
                          height={350}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                         <Link href={project.link} target="_blank" className="absolute top-4 right-4 bg-background/80 p-2 rounded-full hover:bg-background transition-colors">
                           <ArrowUpRight className="h-5 w-5 text-foreground" />
                        </Link>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-muted-foreground mt-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
