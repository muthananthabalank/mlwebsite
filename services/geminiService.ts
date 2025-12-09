import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AIAnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeIndustrialImage = async (
  base64Image: string, 
  mimeType: string
): Promise<AIAnalysisResult> => {
  try {
    // Use gemini-2.5-flash for multimodal/vision tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: `You are an elite Industrial QA Engineer AI. Analyze this image of industrial machinery, a factory floor, or a manufactured component.
            
            Identify:
            1. The type of machinery or component.
            2. Any visible defects, wear and tear, or safety hazards (rust, misalignment, cracks, leaks, obstruction).
            3. An estimated condition score (0-100%).
            4. Recommended maintenance actions.
            
            Format the response as a clear, technical report. If no machinery is detected, state that clearly.`
          },
        ],
      },
    });

    return {
      text: response.text || "Analysis failed to generate text.",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Gemini Vision Error:", error);
    throw new Error("Failed to analyze image. Please try again.");
  }
};

export const consultOperations = async (
  query: string,
  contextData?: string
): Promise<AIAnalysisResult> => {
  try {
    const prompt = `You are an expert Manufacturing Consultant specializing in Industry 4.0, Lean Manufacturing, and Six Sigma.
    
    User Query: "${query}"
    ${contextData ? `Context Data: ${contextData}` : ''}
    
    Provide a strategic, actionable answer focusing on efficiency, cost-reduction, and safety. Use technical terminology appropriate for a factory manager.`;

    // Use gemini-3-pro-preview for complex reasoning tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
    });

    return {
      text: response.text || "Consultation failed to generate text.",
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Gemini Text Error:", error);
    throw new Error("Failed to get consultation. Please try again.");
  }
};