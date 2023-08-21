"use client";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>React Hooks!</h1>
      <input
        type="text"
        placeholder="enter text here"
        onChange={(e) => {
          setInputText(e.target.value);
          setHistory([...history, e.target.value]);
        }}
      />
      <div>{inputText}</div>

      <ul>
        {history.map((item, index) => {
          return <div>{item}</div>;
        })}
      </ul>
    </main>
  );
}
