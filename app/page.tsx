'use client';

import React, { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setResult(data.summary);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">AI 요약기</h1>
      <textarea
        className="w-full border p-2"
        rows={6}
        placeholder="여기에 썰을 붙여넣으세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-black text-white">
        요약하기
      </button>
      {result && (
        <div className="mt-6 p-4 border bg-gray-100">
          <h2 className="font-bold mb-2">요약 결과</h2>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}