
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
if (!process.env.API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates an image using the Imagen model based on a text prompt.
 * @param prompt The text prompt describing the image to generate.
 * @returns A promise that resolves to a base64 data URL of the generated image.
 */
export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png', // Use PNG for better quality
        aspectRatio: '1:1', // Square aspect ratio is versatile
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      if (base64ImageBytes) {
        return `data:image/png;base64,${base64ImageBytes}`;
      }
    }
    
    throw new Error('No image data received from API.');

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Re-throw the error to be handled by the calling component
    throw new Error('Failed to generate image via Gemini API.');
  }
};
