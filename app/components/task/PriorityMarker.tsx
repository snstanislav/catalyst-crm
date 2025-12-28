

export default function PriorityMarker({ taskPrio }: { taskPrio: string }) {
    const PRIO_COLOR: Record<string, string> = {
        high: "bg-rose-500",
        medium: "bg-amber-500",
        low: "bg-yellow-300",
        default: "bg-gray-400"
    }
    let prioColor = PRIO_COLOR[taskPrio] ?? PRIO_COLOR.default;
    const PRIO = `inline-block rounded-xs w-2.5 h-2.5 ${prioColor}`;

    return (<span className={PRIO} title={`Priority: ${taskPrio}`}></span>)
}