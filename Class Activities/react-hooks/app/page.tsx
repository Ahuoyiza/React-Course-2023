// import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [inputText, setInputText] = useState(" ");

  const [history, setHistory] = useState([])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24;20">
      <h1>HELLO AFRICA</h1>
      <input type="text"
      placeholder='Enter text here'
      onChange={(e) => {
        setInputText(e.target.value)
        setHistory([...history, e.target.value])
      }} 
      />
      <div>{inputText}</div>

      <div>
        <ul>
          {history.map((item)=>{
            return <div>(item)

            </div>
          })}
        </ul>
      </div>

    </main>
  )
}
