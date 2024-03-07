import React from "react"
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("tan")

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}
      > <div class="flex justify-center items-center h-screen">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Background Color Changer</h1>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "grey" }} onClick={() => setColor("grey")}>grey</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>

            <button className="outline-none px-4 py-1 rounded-full text-white shodow-lg" style={{ backgroundColor: "maroon" }} onClick={() => setColor("maroon")}>Maroon</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
