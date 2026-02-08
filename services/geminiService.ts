import { GoogleGenAI } from "@google/genai";
import { ChatMessage, MessageRole } from "../types";

class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async sendMessage(history: ChatMessage[], newMessage: string): Promise<string> {
    try {
      const model = 'gemini-3-flash-preview';
      
      const contents = history.map(msg => ({
        role: msg.role === MessageRole.USER ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      // Add the new message
      contents.push({
        role: 'user',
        parts: [{ text: newMessage }]
      });

      const response = await this.ai.models.generateContent({
        model: model,
        contents: contents,
        config: {
          systemInstruction: `You are "Lift", the intelligent AI consultant for Ascendancy Elevators. 
          Your tone is professional, sophisticated, yet warm and helpful.
          You specialize in:
          1. Luxury residential elevators.
          2. Commercial high-speed lift solutions.
          3. Smart elevator maintenance and safety.
          
          Keep your answers concise (under 3 paragraphs) and formatted nicely. 
          Use elevator metaphors occasionally (e.g., "Let's elevate your experience", "Going up?").
          Do not make up fake pricing, but give ranges if asked (e.g., Residential starts around $20k).`,
        }
      });

      return response.text || "I apologize, but I seem to be stuck between floors. Could you please repeat that?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm currently experiencing a technical malfunction. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();