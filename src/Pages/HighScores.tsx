import { Link } from "react-router-dom"

type HighScoresType = {
    save: {
        score?: number
        name?: string
    }[]
}

export default function HighScores({ save }: HighScoresType) {
    const results = save?.sort((a: any, b: any) => a.score - b.score).reverse()
    if (results.length > 1) {
        return (
            <>
                <h1 className="text-[55px] mb-[30px] ">LeaderBoard</h1>
                {
                    results.map((result, idx) => {
                        if (result.name) {
                            return (
                                <h1 key={idx} className="txt mb-[20px]">{result.name} - {result.score}</h1>
                            )
                        }
                    })
                }

                <Link to='/' className="btn bg-main mt-[35px]">Go Home <i className="fa-solid fa-house ml-3 text-bgc"></i></Link>
            
            </>
        )
    } return (
        <>
            <h1 className="txt mb-[55px]">There Is Nothing To Show Yet !</h1>
            <Link to='/' className="btn bg-main">Go Home <i className="fa-solid fa-house ml-3"></i></Link>
        </>
    )
}
