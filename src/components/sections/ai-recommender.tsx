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

const formSchema = z.object({
  clientNeeds: z.string().min(20, {
    message: 'Please describe your needs in at least 20 characters.',
  }),
});

export function AiRecommender() {
  const [recommendation, setRecommendation] = useState<ServiceRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setError(result.error || 'An unknown error occurred.');
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
              AI Service Recommender
            </h2>
            <p className="text-lg text-muted-foreground mt-2">
              Not sure where to start? Describe your project, and our AI will suggest the best services and talking points for our first meeting.
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
                        <FormLabel className="text-lg">Describe your project needs</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., 'I need a fast e-commerce website for my clothing brand with a blog and a modern design...'"
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
                        Analyzing...
                      </>
                    ) : (
                      'Get Recommendations'
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
              <p className="text-muted-foreground">Our AI is thinking...</p>
            </div>
          )}
          {error && <Card className="bg-destructive/10 border-destructive"><CardContent className="p-6"><p className="text-destructive">{error}</p></CardContent></Card>}
          {recommendation && (
            <div className="space-y-6">
              <Card className="shadow-lg animate-in fade-in-50 slide-in-from-bottom-5 duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    Recommended Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-muted-foreground">{recommendation.recommendedServices}</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-accent" />
                    Personalized Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap text-muted-foreground">{recommendation.personalizedIntroduction}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
