import { Quizdata } from "../data/Quizdata"
import PlayInfo from '../components/PlayInfo'
import Question from '../components/Question'
import Options from "./Options"
import EndPage from "../components/EndPage"



import { useState, useRef, useEffect } from "react"



export default function Play() {

  //useState hooks
  const [index, setIndex] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [end, setEnd] = useState(false)

  const correct = useRef(0)
  const [data, setData] = useState(Quizdata[index])

  useEffect(() => {
    setData(Quizdata[index])
  }, [index])

  function correctOrder(arr: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].rank === i + 1) {
        correct.current++
      }
    }
 
  }

  function HandleClick() {
    setClicked(true)

    setTimeout(() => {

      correctOrder(data.options)

      if (index < Quizdata.length - 1) {
        setClicked(false)
        setIndex(prev => prev + 1)
      } else { setEnd(true) }

    }, 1000);
  }

  function HandlePlay() {
    setIndex(0)
    correct.current = 0
    setEnd(false)
    setClicked(false)
  }

  function HandleDrag(results: any) {
    const { source, destination } = results
    const sourceIndex = source.index
    const destinationIndex = destination.index
    if (source.index === destination.index) { return; }
    const reOrder = [...data.options];
    const [removed] = reOrder.splice(sourceIndex, 1)
    reOrder.splice(destinationIndex, 0, removed)
    return setData(prev => ({

      ...prev, options: reOrder

    }))

  }

  if (!end) {
    return (

      <div className="w-[800px] h-[800px]">
        <PlayInfo index={index + 1} length={Quizdata.length} score={correct.current * 10} />
        <Question question={data.question} />
        <Options HandleDrag={HandleDrag} clicked={clicked} options={data.options} />
        <div className="flex justify-center mt-[50px]">
          <button disabled={clicked} onClick={HandleClick} className="btn rounded bg-second">Next</button>
        </div>
      </div>
    )
  }
  return (
    <EndPage HandlePlay={HandlePlay} score={correct.current * 10} />
  )

}
