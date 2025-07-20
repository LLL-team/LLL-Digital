'use server'

/**
 * @fileOverview This file defines the service recommendation flow for LLL Digital.
 *
 * - recommendServices - A function that takes a description of client needs and returns a recommendation of relevant services.
 * - ServiceRecommendationInput - The input type for the recommendServices function.
 * - ServiceRecommendationOutput - The return type for the recommendServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceRecommendationInputSchema = z.object({
  clientNeeds: z
    .string()
    .describe('A detailed description of the client\u0027s web development needs and project requirements.'),
});
export type ServiceRecommendationInput = z.infer<typeof ServiceRecommendationInputSchema>;

const ServiceRecommendationOutputSchema = z.object({
  recommendedServices: z
    .string()
    .describe('A list of recommended web development services that best fit the client\u0027s needs, with customized solutions.'),
  personalizedIntroduction: z
    .string()
    .describe('A personalized introduction and set of talking points for initial client interactions.'),
});
export type ServiceRecommendationOutput = z.infer<typeof ServiceRecommendationOutputSchema>;

export async function recommendServices(input: ServiceRecommendationInput): Promise<ServiceRecommendationOutput> {
  return serviceRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceRecommendationPrompt',
  input: {schema: ServiceRecommendationInputSchema},
  output: {schema: ServiceRecommendationOutputSchema},
  prompt: `You are an AI-powered service recommender for LLL Digital, a web development team.
  Analyze the client's needs and recommend the most relevant web development services with customized solutions.
  Also, provide a personalized introduction and a set of talking points for initial client interactions with the client.

Client Needs: {{{clientNeeds}}}
`,
});

const serviceRecommendationFlow = ai.defineFlow(
  {
    name: 'serviceRecommendationFlow',
    inputSchema: ServiceRecommendationInputSchema,
    outputSchema: ServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
