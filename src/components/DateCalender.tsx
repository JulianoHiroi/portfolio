type DateCalenderProps = {
  start: string
  end: string
}

export default function DateCalender({ start, end }: DateCalenderProps) {
  return (
    <div className="flex min-w-32 flex-col items-center justify-center space-y-5 opacity-55">
      <p className="pt-2">{end}</p>
      <div className="h-2/3 w-0.5 bg-white"></div>
      <p className="pb-2">{start}</p>
    </div>
  )
}
