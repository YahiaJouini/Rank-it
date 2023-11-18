import { Link } from "react-router-dom";

export default function EndPage({score,HandlePlay}:{score:number,HandlePlay:any}) {
  return (
    <div className="w-[500px] flex flex-col items-center">
        <h1 className="text-[60px] ">{score}</h1>
        <h1 className="txt text-center mb-6">Enter Your name below to save Your Score!</h1>
        <input  type="text"  
                className="w-[80%] h-[40px] outline-none pl-4 mb-10 text-bgc font-bold text-[20px]" 
                placeholder="Enter Your Name"/>
        <button className="btn bg-main">Save</button>
        <button onClick={HandlePlay} className="btn bg-main">Play Again</button>
        <Link to='/'  className="btn bg-main">Go Home</Link>
    </div>
  )
}
