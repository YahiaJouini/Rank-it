type optionType = {
    options : {
        option: string;
    rank: number;
    }[]
}
export default function Options({options}:optionType) {
  return (
    options.map(option => {
        return (
            <div className="w-full bg-main mb-[18px] flex items-center p-2 pl-10 
            rounded-l hover:scale-[1.02] cursor-pointer transition-all">

                <h1 className="text-white text-[30px]">{option.option}</h1>
                
            </div>
        )
    })
  )
}
