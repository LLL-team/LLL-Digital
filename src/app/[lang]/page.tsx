import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { Team } from '@/components/sections/team';
import { Testimonials } from '@/components/sections/testimonials';
import { AiRecommender } from '@/components/sections/ai-recommender';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';
import { getDictionary } from '@/lib/get-dictionary';
import type { Locale } from '../../../next.config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dictionary={dictionary.header} />
      <main className="flex-grow">
        <Hero dictionary={dictionary.hero} />
        <Services dictionary={dictionary.services} />
        <Portfolio dictionary={dictionary.portfolio} />
        <AiRecommender dictionary={dictionary.aiRecommender} />
        <Team dictionary={dictionary.team} />
        <Testimonials dictionary={dictionary.testimonials} />
        <Blog dictionary={dictionary.blog} />
        <Contact dictionary={dictionary.contact} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  );
}
