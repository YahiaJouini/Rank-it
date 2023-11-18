import { Quizdata } from "../data/Quizdata"
import PlayInfo from '../components/PlayInfo'
import Question from '../components/Question'
import Options from "../components/Options"
import EndPage from "./EndPage"



import { useState, useRef, useEffect } from "react"

export default function Play({ HandleSave }: any) {

  const [index, setIndex] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [data, setData] = useState(Quizdata[index])

  const correct = useRef(0)


  useEffect(() => {
    index < Quizdata.length && setData(Quizdata[index])
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
      setClicked(false)
      setIndex(prev => prev + 1)
    }, 1000);
  }

  function HandlePlay() {
    setIndex(0)
    correct.current = 0
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



  if (index < Quizdata.length) {
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
    <EndPage HandleSave={HandleSave} HandlePlay={HandlePlay} score={correct.current * 10} />
  )

}
