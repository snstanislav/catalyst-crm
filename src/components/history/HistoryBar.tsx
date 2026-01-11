import SuccessMark from "./SuccessMark";
import ProgressMark from "./ProgressMark";
import FailMark from "./FailMark";

export default function HistoryBar({ success, progress, failed }: { success: number, progress: number, failed: number }) {
    const HISTORY = {
        wrapper: "flex flex-row justify-center gap-3 w-fit",
        inProgress: "font-semibold"
    }

    return (
        <div className={HISTORY.wrapper}>
            <span title="Deals in progress" className={HISTORY.inProgress}>
                <ProgressMark />
                <span>{progress}</span>
            </span>
            <span title="Successfully completed deals">
                <SuccessMark />
                <span>{success}</span>
            </span>
            <span title="Failed or canceled deals">
                <FailMark />
                <span>{failed}</span>
            </span>
        </div>
    )
}