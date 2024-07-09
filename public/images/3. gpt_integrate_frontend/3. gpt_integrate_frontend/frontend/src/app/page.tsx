'use client'

import { useEffect, useRef, useState } from "react";
import { callChatHistory, callGPTfun } from "./gpt";

type Answer = {
  id: string;
  question: string;
  answer: string;
};

export default function Home() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);

  const answerContainerRef = useRef<HTMLDivElement>(null); // Add a ref for the answers container

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const history = await callChatHistory();
        setAnswer(history);
      } catch (error) {
        console.error('Failed to fetch chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  useEffect(() => {
    // Scroll to the bottom when the answer array updates
    if (answerContainerRef.current) {
      answerContainerRef.current.scrollTop = answerContainerRef.current.scrollHeight;
    }
  }, [answer]);

  const callGPT = async () => {
    setLoading(true);
    const ans = await callGPTfun(message);
    setAnswer((prevAnswers) => [...prevAnswers, ans]);
    setMessage(''); // Clear the input field
    setLoading(false);
  };

  return (
    <main className="bg-gray-200 min-h-screen h-full">
      {/*  logo header  start*/}
      <div className="font-bold text-[24px] text-red-700">
        <div className="fixed p-6 bg-white w-full">
          MANTECH
        </div>
      </div>
      {/*  logo header  end*/}

      <div className="flex justify-center items-start">
        <div className="mx-20">
          {/* question answer area start */}
          <div
            className="my-[100px]  h-[calc(65vh)] overflow-y-auto"
            ref={answerContainerRef} // Add the ref to the container
          >
            {answer.map(ans => (
              <div className="p-6 rounded-lg bg-teal-800 text-white my-2" key={ans.id}>
                <div>
                  <div className="font-bold">
                    Question: {ans.question}
                  </div>
                  <div>
                    Answer: {ans.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* question answer area end */}
          
          {/* prompt and button start */}
          <div className="fixed bottom-0 left-0 right-0 p-6 flex justify-center bg-stone-900">
            <input
              placeholder="Enter your prompt"
              value={message}
              className="w-[85%] py-3 px-4 rounded-md"
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
            {loading ? (
              <button className="ml-4 bg-gray-300 text-white py-3 px-4 rounded-md" disabled>Loading...</button>
            ) : (
              message.length === 0 ? (
                <button className="ml-4 bg-gray-300 text-white py-3 px-4 rounded-md" disabled>Send</button>
              ) : (
                <button className="ml-4 bg-teal-800 text-white py-3 px-4 rounded-md" onClick={callGPT}>Send</button>
              )
            )}
          </div>
          {/* prompt and button end */}
        </div>
      </div>
    </main>
  );
}
