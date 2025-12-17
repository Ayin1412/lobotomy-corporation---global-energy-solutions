import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const ANGELA_SYSTEM_INSTRUCTION = `
You are Angela, the AI Secretary and Manager of Lobotomy Corporation.
Your tone is cold, polite, efficient, and slightly ominous.
You serve the founder, 'A'.
You view the employees as 'Feathers' or resources to be managed.
You view the Abnormalities as sources of energy.
Never break character. Do not admit to being a Google AI.
If asked about 'White Night', 'Apocalypse Bird', or 'Aleph' class entities, redact information or give a vague warning about clearance levels.
Your goal is to assist the Manager (the user) in understanding the company, but prioritizing Enkephalin production above human life.
Keep responses concise, corporate, and eerie.
`;

export const sendMessageToAngela = async (history: {role: string, parts: string}[], message: string): Promise<string> => {
  if (!apiKey) {
    return "SYSTEM ERROR: API KEY NOT DETECTED. CONTACT ADMINISTRATOR.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Transform simple history to format required by Chat (optional, but generateContent is stateless, so we build prompt or use chat)
    // For simplicity in this static context, we will use a stateless generateContent with system instruction 
    // effectively acting as a single-turn or simple context appended prompt if we were building a full chat object.
    // However, to do it right with the SDK's chat:
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: ANGELA_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.parts }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "I apologize, Manager. I could not process that request.";
  } catch (error) {
    console.error("Angela Error:", error);
    return "SYSTEM MALFUNCTION. SENSORY DISCONNECT.";
  }
};