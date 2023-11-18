// importing components
import Home from "./components/Home"
import Play from "./components/Play"

// importing Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="play" element = {<Play />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}