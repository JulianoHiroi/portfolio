import DateCalender from "./DateCalender"
import "../app/globals.css"

type EventWorkProps = {
    title: string
    dateStart: string
    dateEnd: string
    Role: string
    Tecnologias?: string[]
    children: React.ReactNode
}


export default function EventWork({
    title, dateStart, dateEnd, Role, children, Tecnologias
}: EventWorkProps) {
    return (
        <div className="flex space-x-5">
            <DateCalender start={dateStart} end={dateEnd} />
            <div className="space-y-2">
                <h2 className="text-2xl">{title} - {Role}</h2>
                <p>
                    {children}
                </p>
                <div className="flex space-x-2 text-sm items-center  ">
                    <p>Conhecimentos :</p>
                    {
                        Tecnologias && Tecnologias.map((tecnologia) => {
                            return <div key={tecnologia} className={"p-2 bg-red-500 bg-opacity-20 rounded-3xl border-solid border-red-700  border-width"}  ><p>{tecnologia}</p></div>
                        })
                    }
                    <div>


                    </div>
                </div>
            </div>
        </div>
    )
}