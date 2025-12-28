

export default function HistoryBar({ success, progress, failed }: { success: number, progress: number, failed: number }) {
    const HISTORY_COLOR: Record<string, string> = {
        success: "bg-green-500",
        progress: "bg-blue-500",
        failed: "bg-red-500",
        default: "bg-gray-400"
    }
    let successColor = HISTORY_COLOR.success ?? HISTORY_COLOR.default;
    let progressColor = HISTORY_COLOR.progress ?? HISTORY_COLOR.default;
    let failedColor = HISTORY_COLOR.failed ?? HISTORY_COLOR.default;

    const HISTORY = {
        wrapper: "flex flex-row justify-center gap-3 w-fit text-xs",
        indicator: "inline-block w-2.5 h-2.5 mr-1 rounded-full",
        inProgress: "font-semibold"
    }

    return (
        <div className={HISTORY.wrapper}>
            <span title="Deals in progress" className={HISTORY.inProgress}>
                <span className={`${HISTORY.indicator} ${progressColor}`}></span>
                <span>{progress}</span>
            </span>
            <span title="Successfully completed deals">
                <span className={`${HISTORY.indicator} ${successColor}`}></span>
                <span>{success}</span>
            </span>
            <span title="Failed or canceled deals">
                <span className={`${HISTORY.indicator} ${failedColor}`}></span>
                <span>{failed}</span>
            </span>
        </div>
    )
}