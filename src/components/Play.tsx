import { Quizdata } from "../data/Quizdata"
import PlayInfo from '../components/PlayInfo'
import Question from '../components/Question'
import Options from "./Options"


import { useState, useRef } from "react"


type currentType = {
  question: string;
  id: number;
  options: {
    option: string;
    rank: number;
  }[];
}


export default function Play() {

  const [index, setIndex] = useState(0)
  const correct = useRef(0)
  const current: currentType = Quizdata[index]
  function HandleClick() {
    if(index<Quizdata.length-1) {
      setIndex(prev=>prev+1)
    } 
    correct.current=correct.current+1
  }

  return (
    <div className="w-[800px]">
      <PlayInfo index={index + 1} length={Quizdata.length} score={correct.current * 100} />
      <Question question={current.question} />
      <Options options={current.options} />
      <div className="flex justify-center mt-[50px]">
        <button onClick={HandleClick} className="btn rounded bg-second">Next</button>
      </div>
    </div>

  )
}
