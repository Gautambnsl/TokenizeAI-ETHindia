import axios from 'axios';
import React, { useState } from 'react';

function MainSection() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: inputValue },
            ],
            model: 'gpt-3.5-turbo',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer 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`,
            },
          }
        );

        const generatedText = response.data.choices[0].message.content;
        setMessages([
          ...messages,
          { id: messages.length + 1, text: inputValue, sender: 'self' },
          { id: messages.length + 2, text: generatedText, sender: 'other' },
        ]);
        setInputValue('');
      } catch (error) {
        console.error('Error fetching response from ChatGPT API:', error);
      }
    }
  };

  return (
    <div className="main-section bg-gray-200 p-4 h-[88.8vh] flex flex-col w-[85%] left-[15%] top-[80px] relative">
      <div className="flex-1 overflow-y-auto flex flex-col-reverse space-y-2 p-2">
        <div className="flex flex-col gap-2">
          {messages.map((message) =>
            message.sender === 'other' ? (
              <div
                key={message.id}
                className="p-2 rounded bg-blue-500 text-white self-end max-w-xs break-words"
              >
                {message.text}
              </div>
            ) : (
              <div
                key={message.id}
                className="p-2 rounded bg-gray-300 text-gray-800 self-start max-w-xs break-words"
              >
                {message.text}
              </div>
            )
          )}
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="flex items-center p-2 border-t border-gray-200"
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default MainSection;
