import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: 'The Rise of Serverless: A Developer\'s Guide',
    date: 'July 15, 2024',
    category: 'Trends',
    image: 'https://placehold.co/400x250.png',
    hint: 'cloud servers',
  },
  {
    title: '5 UI/UX Principles for a Better User Experience',
    date: 'July 8, 2024',
    category: 'Design',
    image: 'https://placehold.co/400x250.png',
    hint: 'design wireframe',
  },
  {
    title: 'Optimizing Next.js for Performance',
    date: 'July 1, 2024',
    category: 'Tutorial',
    image: 'https://placehold.co/400x250.png',
    hint: 'code editor',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Insights on web development, design, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.hint}
                  width={400}
                  height={250}
                  className="rounded-t-lg w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <Badge variant="outline" className="mb-2">{post.category}</Badge>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
