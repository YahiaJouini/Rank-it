import { Link } from "react-router-dom"

export default function Home() {

  return (
    <>
      <h1 className="text-white text-[30px] lg:text-[50px] mb-[30px] font-bold ">Are you Ready ?</h1>
      <Link to='/play' className="w-[180px] h-[45px] text-[20px] btn rounded-sm lg:btn  bg-main">Play <i className="fa-solid fa-gamepad ml-3"></i></Link>
      <Link to='/high-scores' className="w-[180px] h-[45px] text-[20px] btn rounded-sm lg:btn  bg-second">High Scores<i className="fas fa-crown ml-3"></i></Link>
    </>
  )
}
