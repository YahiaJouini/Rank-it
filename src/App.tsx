// importing Pages
import Home from "./Pages/Home"
import Play from "./Pages/Play"
import HighScores from "./Pages/HighScores"


import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {

  const [saved, setSaved] = useState<{ score?: number, name?: string }[]>([{}])

  function HandleSave(name: string, score: number) {

    const temp = {
      name: name,
      score: score
    }

    setSaved(prev => [...prev, temp])

  }
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center" >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<Play HandleSave={HandleSave} />} />
          <Route path="high-scores" element={<HighScores save={saved} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}