type PlayInfoType = {
    index: number
    score: number
    length: number
}

export default function PlayInfo({ index, score, length }: PlayInfoType) {

    const percentage = index * 100 / length;
    const classStyle = percentage < 100 ? "h-full rounded-l-[10px] bg-[#06da22]" : "h-full rounded-[10px] bg-[#06da22]"

    return (

        <div className="flex justify-between items-center mb-4">

            <div className="flex flex-col items-center">
                <h1 className=" text-[18px] mb-3 lg:text-[22px] lg:mb-6">Question {index} out of {length} </h1>
                <div className="w-[160px] h-[22px] lg:w-[200px] lg:h-[34px] border-2 border-[#06da22] rounded-[20px]">
                    <div style={{ width: `${percentage}%`, transition: "all .3s ease" }} className={classStyle} ></div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-[25px] lg:txt">Score</h1>
                <h1 className="text-[35px] lg:text-[50px]">{score}</h1>
            </div>

        </div>
    )
}
