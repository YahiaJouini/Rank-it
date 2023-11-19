import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

type optionType = {
    options: {
        option: string
        rank: number
        id: number
    }[]
    clicked: boolean
    HandleDrag: any
}

export default function Options({ options, clicked, HandleDrag }: optionType) {

    if (clicked) {
        return (
            options.map((option, idx) => {

                const styles = {
                    backgroundColor: idx + 1 === option.rank ? "#06da22" : '#dd1011',
                    cursor: "not-allowed"
                }

                return (

                    <div style={styles} key={idx} className="w-ful flex items-center p-2 pl-10 rounded-l mb-[18px]">
                        <h1 className="text-white no-select text-[18px] lg:text-[30px]">{option.option}</h1>
                    </div>
                )
            })
        )
    }
    return (
        <DragDropContext onDragEnd={HandleDrag}>
            <Droppable droppableId="ROOT" type="group">

                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="lg:h-[380px]">

                        {options.map((option, idx) => (
                            <Draggable draggableId={String(option.id)} key={option.id} index={idx}>
                                {
                                    (provided) => (

                                        <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}
                                            className="bg-main w-ful flex items-center p-2 pl-10 rounded-l mb-[18px]">

                                            <h1 className="text-white no-select text-[18px] lg:text-[30px] ">{option.option}</h1>
                                        </div>
                                    )
                                }
                            </Draggable>
                        )
                        )}

                        {provided.placeholder}

                    </div>
                )}

            </Droppable>

        </DragDropContext>

    )

}
