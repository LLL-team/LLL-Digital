import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Crafting Digital Experiences That Inspire
        </h1>
        <p className="text-lg text-muted-foreground">
          At LLL Digital, we build fast, responsive, and beautiful websites that
          drive results. Let's create something amazing together.
        </p>
        <div className="flex gap-4 mt-4">
          <Button size="lg" asChild>
            <Link href="#portfolio">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#services">Our Services</Link>
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
          className="rounded-lg shadow-2xl"
        />
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}
