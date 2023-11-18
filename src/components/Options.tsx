type optionType = {
    options : {
        option: string;
    rank: number;
    }[]
    clicked:boolean
}
export default function Options({options,clicked}:optionType) {
    if(clicked) {
        return (
            options.map((option,idx) => {
                const styles= {
                    backgroundColor : idx+1===option.rank ? "#06da22" : '#dd1011'
                }
                return (
                    <div style={styles} key={idx}  className="w-ful mb-[18px] flex items-center p-2 pl-10 
                    rounded-l hover:scale-[1.02] cursor-pointer transition-all">
    
                        <h1 className="text-white text-[30px]">{option.option}</h1>
                        
                    </div>
                )
            })
        )
    }
    return (
        options.map((option,idx) => {
            return (
                <div key={idx}  className="w-ful mb-[18px] bg-main flex items-center p-2 pl-10 
                rounded-l hover:scale-[1.02] cursor-pointer transition-all">
                    <h1 className="text-white text-[30px]">{option.option}</h1>
                </div>
            )
        })
    )
    
}
