import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

type Dictionary = {
  title: string;
  subtitle: string;
  items: Testimonial[];
};

const testimonialData = [
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'business woman portrait',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'startup founder portrait',
  },
  {
    image: 'https://placehold.co/100x100.png',
    hint: 'marketing director portrait',
  },
];

export function Testimonials({ dictionary }: { dictionary: Dictionary }) {
  const testimonials = dictionary.items.map((item, index) => ({
    ...item,
    ...testimonialData[index],
  }));

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mt-2">
            {dictionary.subtitle}
          </p>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-4">
                  <Card className="h-full">
                    <CardContent className="p-8 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="h-8 w-8 text-accent mb-4" />
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </div>
                      <div className="flex items-center mt-6">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
