
import { GoogleGenAI, Type } from "@google/genai";
import { MOCK_APPS } from "../constants";
import { RecommendationResponse } from "../types";

export const getAppRecommendations = async (userQuery: string): Promise<RecommendationResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const appListString = MOCK_APPS.map(app => 
    `ID: ${app.id}, Name: ${app.name}, Category: ${app.category}, Description: ${app.description}`
  ).join('\n');

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are an expert iOS App Store assistant. 
    A user is looking for an app: "${userQuery}"
    
    Here is our catalog of apps:
    ${appListString}
    
    Recommend the most relevant apps from the list above. Provide a helpful reason for your choice.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reasoning: {
            type: Type.STRING,
            description: "A friendly message explaining why these apps were chosen."
          },
          suggestedAppIds: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "An array of IDs of the suggested apps."
          }
        },
        required: ["reasoning", "suggestedAppIds"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim()) as RecommendationResponse;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    return {
      reasoning: "I found some great options for you!",
      suggestedAppIds: [MOCK_APPS[0].id]
    };
  }
};
