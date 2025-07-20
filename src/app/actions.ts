'use server';

import { recommendServices, ServiceRecommendationInput } from "@/ai/flows/service-recommendation";

export async function getServiceRecommendations(input: ServiceRecommendationInput) {
    try {
        const result = await recommendServices(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("AI service recommendation failed:", error);
        return { success: false, error: "Failed to get recommendations. Please try again." };
    }
}
