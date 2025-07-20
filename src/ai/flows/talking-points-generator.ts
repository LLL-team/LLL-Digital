'use server';

/**
 * @fileOverview AI tool to generate personalized introduction and talking points based on the client's needs.
 *
 * - generateTalkingPoints - A function that handles the talking points generation process.
 * - TalkingPointsInput - The input type for the generateTalkingPoints function.
 * - TalkingPointsOutput - The return type for the generateTalkingPoints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TalkingPointsInputSchema = z.object({
  clientNeeds: z
    .string()
    .describe('Description of the client needs and project requirements.'),
  companyDescription: z
    .string()
    .describe('A brief description of LLL Digital company and expertise.'),
});
export type TalkingPointsInput = z.infer<typeof TalkingPointsInputSchema>;

const TalkingPointsOutputSchema = z.object({
  introduction: z
    .string()
    .describe('A personalized introduction for the initial client interaction.'),
  talkingPoints: z
    .string()
    .describe('A set of tailored talking points based on the client needs.'),
});
export type TalkingPointsOutput = z.infer<typeof TalkingPointsOutputSchema>;

export async function generateTalkingPoints(
  input: TalkingPointsInput
): Promise<TalkingPointsOutput> {
  return generateTalkingPointsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'talkingPointsPrompt',
  input: {schema: TalkingPointsInputSchema},
  output: {schema: TalkingPointsOutputSchema},
  prompt: `You are an AI assistant for LLL Digital, a web development company.

You will generate a personalized introduction and talking points for initial client interactions based on the client's needs and LLL Digital description.

LLL Digital Description: {{{companyDescription}}}
Client Needs: {{{clientNeeds}}}

Introduction:
Talking Points:`,
});

const generateTalkingPointsFlow = ai.defineFlow(
  {
    name: 'generateTalkingPointsFlow',
    inputSchema: TalkingPointsInputSchema,
    outputSchema: TalkingPointsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
