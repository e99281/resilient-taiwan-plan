import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// NOTE: Process.env.API_KEY is handled by the environment, do not hardcode keys.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

/**
 * Sends a user query to the Gemini model to get assistance regarding disaster prevention.
 * This can be used for a future chatbot feature on the landing page.
 * 
 * @param query User's question about the Resilient Taiwan Plan
 * @returns Text response from the model
 */
export const askAssistant = async (query: string): Promise<string> => {
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Please check your environment configuration.");
    return "系統正如火如荼建置中，請稍後再試。";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const response = await ai.models.generateContent({
      model: model,
      contents: query,
      config: {
        systemInstruction: "You are a helpful assistant for the 'Resilient Taiwan Plan' website. You answer questions about disaster prevention training, government plans, and community resilience in Traditional Chinese (Taiwan).",
      }
    });

    return response.text || "抱歉，我現在無法回答這個問題。";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "發生錯誤，請稍後再試。";
  }
};
