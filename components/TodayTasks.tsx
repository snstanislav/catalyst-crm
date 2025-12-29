import DateTimeClock from "./DateTimeClock";

export default function TodayTasks() {

    const TODAY_TASKS = {
        base: "relative flex flex-col items-center text-md font-mono h-fit",
        summaryBar: "flex flex-row items-center gap-2 px-2 py-1 hover:bg-yellow-200  rounded-md list-none cursor-pointer",
        summaryText: "font-semibold text-red-500",
        content: "absolute top-9 left-0 flex flex-col gap-1 px-5 py-4 font-normal border border-gray-200 rounded-xs bg-white shadow-xl/20",
        icoSize: { w: 27, h: 13 }
    }

    return (
        <details className={TODAY_TASKS.base}>
            <summary className={TODAY_TASKS.summaryBar}>
                <img
                    className="dark:invert h-auto"
                    src="/calendar.svg"
                    alt="Profile"
                    width={TODAY_TASKS.icoSize.w}
                    height={TODAY_TASKS.icoSize.h}
                />
                <span className={TODAY_TASKS.summaryText}>Today</span>
                <DateTimeClock />
            </summary>
            <div className={TODAY_TASKS.content}>
                <h3>Actual tasks:</h3>
                wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
                <br />wrqrwerwerwqrew
            </div>
        </details>
    )
}