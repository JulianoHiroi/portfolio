type DateCalenderProps = {
    start: string
    end: string
}

export default function DateCalender({ start, end }: DateCalenderProps) {
    return (
        <div className="flex flex-col min-w-32 space-y-5 justify-center items-center opacity-55">
            <p className="pt-2">{end}</p>
            <div className="bg-white w-0.5 h-2/3"></div>
            <p className="pb-2">{start}</p>
        </div>
    )
}