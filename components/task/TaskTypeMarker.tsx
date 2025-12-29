import { TaskType } from "../../lib/types/TaskType";

export default function TaskTypeMarker({ taskType }: { taskType: string }) {
    const TYPE_COLOR: Record<string, string> = {
        [TaskType.ToDo]: "bg-cyan-500",
        [TaskType.Call]: "bg-amber-600",
        [TaskType.Message]: "bg-lime-500",
        [TaskType.Email]: "bg-fuchsia-600",
        [TaskType.Meeting]: "bg-pink-500",
        default: "bg-gray-400"
    }
    let typeColor = TYPE_COLOR[taskType] ?? TYPE_COLOR.default;

    const TYPE = `flex justify-self-end items-center mx-2 px-2 p-1 w-fit h-5 ${typeColor} text-white font-semibold rounded-sm`;
    return (<span className={TYPE}>{taskType}</span>)
}