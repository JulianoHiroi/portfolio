import DateCalender from './DateCalender'
import '../app/globals.css'

type EventWorkProps = {
  title: string
  dateStart: string
  dateEnd: string
  Role: string
  Tecnologias?: string[]
  children: React.ReactNode
}

export default function EventWork({
  title,
  dateStart,
  dateEnd,
  Role,
  children,
  Tecnologias,
}: EventWorkProps) {
  return (
    <div className="flex space-x-5 ">
      <DateCalender start={dateStart} end={dateEnd} />
      <div>
        <h2 className="pb-0 text-2xl">{title}</h2>
        <h3>{Role}</h3>
        {children}
        <li className="flex flex-wrap items-end space-x-1 space-y-1 text-sm">
          {Tecnologias &&
            Tecnologias.map((tecnologia) => {
              return (
                <ul
                  key={tecnologia}
                  className={' rounded-md bg-gray-800 p-1 text-white'}
                >
                  <p>{tecnologia}</p>
                </ul>
              )
            })}
        </li>
      </div>
    </div>
  )
}
