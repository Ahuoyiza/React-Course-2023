"use client";

import { useState } from "react";
import ImageMouseOver from "./ImageMouseOver";

export default function Home() {
  const [inputValue, setInputValue] = useState(" ");
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1>Hello World!</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => {
          const currentInputValue = e.target.value;
          setInputValue(currentInputValue);
          setInputHistory([...inputHistory, currentInputValue]);
        }}
      />
      <div>
        <div>New Input Value: {inputValue}</div>
        <div>My input History:</div>
        <ul>
          {inputHistory.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <ImageMouseOver priImage={undefined} alt="barbie" secImage={undefined} />
    </main>
  );
}
