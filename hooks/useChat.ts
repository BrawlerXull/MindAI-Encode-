import { useState } from 'react';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

const useChat = (initialMessages: Message[] = []) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      // Step 1: Fetch AI response
      const response = await fetch(`/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage: Message = { role: 'bot', content: data.response };
      setMessages(prev => [...prev, botMessage]);

      // Step 2: Fetch TTS audio
      const ttsResponse = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: data.response }),
      });

      if (!ttsResponse.ok) {
        throw new Error(`TTS API error: ${ttsResponse.statusText}`);
      }

      const audioBlob = await ttsResponse.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Play the TTS audio
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error("Error processing request:", error);
      setError("There was an error processing the request.");
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    loading,
    error,
    handleSend,
  };
};

export default useChat;
