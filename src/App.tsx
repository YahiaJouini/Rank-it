// importing Pages
import Home from "./Pages/Home"
import Play from "./Pages/Play"
import HighScores from "./Pages/HighScores"


import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  
  const initialData = JSON.parse(localStorage.getItem("load-data") || "")

  const [saved, setSaved] = useState<{ score?: number, name?: string }[]>(initialData || [{}])

  useEffect(() => {
    localStorage.setItem("load-data", JSON.stringify(saved));
  }, [saved]);

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