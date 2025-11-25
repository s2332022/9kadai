import { GoogleGenAI, Type, Schema } from "@google/genai";
import { PageContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const schema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "The main title of the webpage" },
    heroImageKeyword: { type: Type.STRING, description: "A single keyword to search for a background image (e.g. 'nature', 'city', 'tech')" },
    introText: { type: Type.STRING, description: "A welcoming introduction paragraph (approx 30 words)" },
    sidebarItems: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of 5 short items for the sidebar navigation or news ticker"
    },
    articles: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING },
          summary: { type: Type.STRING }
        }
      },
      description: "3 content articles for the main grid"
    }
  },
  required: ["title", "heroImageKeyword", "introText", "sidebarItems", "articles"]
};

export const generatePageContent = async (topic: string): Promise<PageContent> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate web page content about: ${topic}. Be creative and professional.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as PageContent;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback content in case of error
    return {
      title: "Responsive Web Design",
      heroImageKeyword: "abstract",
      introText: "Welcome to this responsive layout demonstration. We use modern CSS techniques to adapt to any screen size.",
      sidebarItems: ["Latest Updates", "Popular Posts", "Tech News", "Archives", "Contact Us"],
      articles: [
        { headline: "Flexible Grids", summary: "Using CSS Grid and Flexbox to create fluid layouts." },
        { headline: "Media Queries", summary: "Adapting styles based on viewport dimensions." },
        { headline: "Modern Tooling", summary: "Built with React, TypeScript, and Tailwind CSS." }
      ]
    };
  }
};