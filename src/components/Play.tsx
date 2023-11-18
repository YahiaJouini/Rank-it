import { Quizdata } from "../data/Quizdata"
import PlayInfo from '../components/PlayInfo'
import Question from '../components/Question'
import Options from "./Options"
import EndPage from "../components/EndPage"


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

  //useState hooks
  const [index, setIndex] = useState(0)
  const [clicked,setClicked] = useState(false)
  const [end,setEnd] = useState(false)



  const correct = useRef(0)
  const current: currentType = Quizdata[index]

  function correctOrder(arr : any) {
    for (let i=0 ; i<arr.length ; i++) {
      if(arr[i].rank!==i+1) {
        return false
      }
    }
  return true
}

  function HandleClick() {
    setClicked(true)
    setTimeout(() => {
      if(correctOrder(current.options)) {
        correct.current=correct.current+1
      } 

      if(index<Quizdata.length-1) {
        setClicked(false)
        setIndex(prev=>prev+1)
      }else {setEnd(true)}
      
    }, 1000);
  }

  function HandlePlay() {
    setIndex(0)
    correct.current=0
    setEnd(false)
    setClicked(false)
  }
  if(!end) {
    return (
      <div className="w-[800px]">
        <PlayInfo index={index + 1} length={Quizdata.length} score={correct.current * 100} />
        <Question question={current.question} />
        <Options clicked={clicked} options={current.options} />
        <div className="flex justify-center mt-[50px]">
          <button disabled={clicked } onClick={HandleClick} className="btn rounded bg-second">Next</button>
        </div>
      </div>
    )
  }
  return (
    <EndPage HandlePlay={HandlePlay} score={correct.current*100}/>
  )

}
