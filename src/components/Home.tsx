import {Link} from "react-router-dom"
export default function Home() {
  return (
    <>
        <h1 className="text-white text-[50px] mb-[30px] font-bold">Are you Ready ?</h1>
        <Link to='/play' className="btn bg-main">Play</Link>
        <Link to='/scores' className="btn bg-second">High Scores<i className="fas fa-crown ml-3"></i></Link>
    </>
  )
}
