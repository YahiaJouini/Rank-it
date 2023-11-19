import { Link } from "react-router-dom";
import { useState } from "react";

type EndPageType = {
  score: number
  HandlePlay: any
  HandleSave: any
}

export default function EndPage({ score, HandlePlay, HandleSave }: EndPageType) {

  const [name, setName] = useState("")

  return (
    <div className="w-[500px] flex flex-col items-center">

      <h1 className="text-[60px] ">{score}</h1>
      <h1 className="txt text-center mb-6">Enter Your name below to save Your Score!</h1>
      <input type="text"
        className="w-[80%] h-[45px] rounded-[4px] outline-none pl-4 mb-10 text-bgc font-bold text-[20px]"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <Link to={'/'}
        className="btn bg-main"
        onClick={() => { HandleSave(name, score) }}
        style={{ pointerEvents: name === "" ? "none" : "auto" }}
      >
        Save <i className="fa-solid fa-bookmark ml-3"></i>

      </Link>

      <button onClick={HandlePlay} className="btn bg-main">Play Again <i className="fa-solid fa-gamepad ml-3"></i></button>

      <Link to='/' className="btn bg-main">Go Home <i className="fa-solid fa-house ml-3 text-bgc"></i></Link>

    </div>
  )
}
