"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ErrorPDF = dynamic(() => import("./errorpdf"), { ssr: false });

export default function Home() {
  const [text, setText] = useState("");
  const [textToRender, setTextToRender] = useState("");

  return (
    <main className="h-full flex flex-col items-center">
      <div className="w-[200px]">
        <label>
          Text to render in pdf:
          <input
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <button onClick={() => setTextToRender(text)}>
          click to render pdf
        </button>
      </div>
      <ErrorPDF text={textToRender} />
    </main>
  );
}
