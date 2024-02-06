type DateCalenderProps = {
  start: string
  end: string
}

export default function DateCalender({ start, end }: DateCalenderProps) {
  return (
    <div className="flex  min-w-32 flex-row-reverse items-center justify-center opacity-55 sm:flex-col sm:space-y-5">
      <p className="sm:pt-2">{end}</p>
      <div className="ml-2 mr-2 h-0.5 w-4 bg-white sm:flex sm:h-2/3 sm:w-0.5"></div>
      <p className=" sm:pb-2">{start}</p>
    </div>
  )
}
