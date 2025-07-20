import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, PenTool, TrendingUp, ShoppingCart } from 'lucide-react';

type Service = {
  title: string;
  description: string;
};

type Dictionary = {
  title: string;
  subtitle: string;
  items: Service[];
};

const icons = [
  <Code key="code" className="h-8 w-8 text-accent" />,
  <PenTool key="pen" className="h-8 w-8 text-accent" />,
  <TrendingUp key="trending" className="h-8 w-8 text-accent" />,
  <ShoppingCart key="cart" className="h-8 w-8 text-accent" />,
];

export function Services({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mt-2">
            {dictionary.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dictionary.items.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="p-4 bg-accent/10 rounded-full mb-4">
                {icons[index]}
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
