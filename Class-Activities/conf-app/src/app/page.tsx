"use client"
import { useState } from "react"


export default function Home() {
  const [input, setInput] = useState('')
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Hello World</h1>
            <input
            value={input}
            placeholder="Enter you text here"
            onChange={(e)=>{
              const currentInput = e.target.value;
              setInput(currentInput)
              setInputHistory([...inputHistory, currentInput])
            }}
            />
            <div>New input history</div>
            <button>new input</button>
            <ul>
              {inputHistory.map((item, index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

    </main>
  )
}
