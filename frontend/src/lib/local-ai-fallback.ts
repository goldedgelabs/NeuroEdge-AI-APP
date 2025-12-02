export async function localAIFallback(prompt: string): Promise<string> {
  return "⚠️ Local AI fallback response: " + prompt.slice(0, 50);
}

// Auto-added missing named export
export const localGenerate = (null as any);
