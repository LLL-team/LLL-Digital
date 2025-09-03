'use server';

export async function getServiceRecommendations(input: any) {
    try {
        // const result = await recommendServices(input);
        // return { success: true, data: result };
        return { success: false, error: "This feature is not available." };
    } catch (error) {
        console.error("AI service recommendation failed:", error);
        return { success: false, error: "Failed to get recommendations. Please try again." };
    }
}
