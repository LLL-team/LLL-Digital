import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, PenTool, TrendingUp, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: 'Web Development',
    description: 'Building robust and scalable websites from scratch with the latest technologies.',
  },
  {
    icon: <PenTool className="h-8 w-8 text-accent" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide an exceptional user experience.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines to attract more organic traffic.',
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-accent" />,
    title: 'E-commerce Solutions',
    description: 'Developing full-featured online stores to help you sell your products effectively.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          <p className="text-lg text-muted-foreground mt-2">
            We provide a wide range of web development services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                {service.icon}
              </div>
              <CardHeader className="p-0">
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="mt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
