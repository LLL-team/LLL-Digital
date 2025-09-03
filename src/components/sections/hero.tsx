import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type Dictionary = {
  title: string;
  subtitle: string;
  viewWork: string;
  ourServices: string;
};

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          {dictionary.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          {dictionary.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <Button size="lg" asChild>
            <Link href="#portfolio">
              {dictionary.viewWork}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">{dictionary.ourServices}</Link>
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://placehold.co/600x400.png"
          alt="Digital agency workspace"
          data-ai-hint="digital agency"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl w-full h-auto"
        />
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
