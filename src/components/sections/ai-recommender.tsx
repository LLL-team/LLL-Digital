'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getServiceRecommendations } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles, Lightbulb, MessageSquare } from 'lucide-react';
import type { ServiceRecommendationOutput } from '@/ai/flows/service-recommendation';

type Dictionary = {
  title: string;
  subtitle: string;
  formLabel: string;
  formPlaceholder: string;
  formButton: string;
  formButtonLoading: string;
  thinking: string;
  error: string;
  recommendedServices: string;
  personalizedIntroduction: string;
  validationError: string;
};

const MarkdownRenderer = ({ text }: { text: string }) => {
  const lines = text.split('\n').map((line, index) => {
    if (line.startsWith('* ') || line.startsWith('- ')) {
      return (
        <li key={index} className="ml-4 list-disc">
          {line.substring(2)}
        </li>
      );
    }
    return <p key={index}>{line}</p>;
  });

  return <div className="space-y-2 text-muted-foreground">{lines}</div>;
};

export function AiRecommender({ dictionary }: { dictionary: Dictionary }) {
  const [recommendation, setRecommendation] = useState<ServiceRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const formSchema = z.object({
    clientNeeds: z.string().min(20, {
      message: dictionary.validationError,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientNeeds: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    const result = await getServiceRecommendations(values);

    if (result.success && result.data) {
      setRecommendation(result.data);
    } else {
      setError(result.error || dictionary.error);
    }
    setIsLoading(false);
  }

  return (
    <section id="ai-recommender" className="py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-accent" />
              {dictionary.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              {dictionary.subtitle}
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="clientNeeds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">{dictionary.formLabel}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={dictionary.formPlaceholder}
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {dictionary.formButtonLoading}
                      </>
                    ) : (
                      dictionary.formButton
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 lg:mt-0">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="h-12 w-12 animate-spin text-accent" />
              <p className="text-muted-foreground">{dictionary.thinking}</p>
            </div>
          )}
          {error && <Card className="bg-destructive/10 border-destructive"><CardContent className="p-6"><p className="text-destructive">{error}</p></CardContent></Card>}
          {recommendation && (
            <div className="space-y-6">
              <Card className="shadow-lg animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    {dictionary.recommendedServices}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <MarkdownRenderer text={recommendation.recommendedServices} />
                </CardContent>
              </Card>
              <Card className="shadow-lg animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-accent" />
                    {dictionary.personalizedIntroduction}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                   <MarkdownRenderer text={recommendation.personalizedIntroduction} />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
