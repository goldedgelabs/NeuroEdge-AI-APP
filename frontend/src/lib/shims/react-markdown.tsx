
import React from 'react';
export default function ReactMarkdown({ children }: { children?: string }) {
  // Very small markdown fallback: render plain text with line breaks
  const text = (children || '') as string;
  return <div style={{ whiteSpace: 'pre-wrap' }}>{text}</div>;
}
