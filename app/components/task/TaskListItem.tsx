
import { UrgentTask } from "../../lib/types/UrgentTask"
import TaskTypeMarker from "./TaskTypeMarker"
import PriorityMarker from "./PriorityMarker"
import Link from "next/link"

export default function TaskListItem({ taskItem, index }: { taskItem: UrgentTask, index: number }) {
    const ITEM = {
        wrapper: "flex flex-col gap-1 list-item-wrapper",
        heading: "block",
        title: "inline link-heading",
        details: "grid grid-cols-[40%_30%_30%] gap-1 items-center text-xs ",
        client: "link-primary leading-3 overflow-clip",
        due: "min-w-20 ml-1 font-normal text-left text-rose-600 leading-3"
    }

    return (
        <div className={ITEM.wrapper}>
            <div className={ITEM.heading}>
                <PriorityMarker taskPrio={taskItem.priority} />&nbsp;{index + 1}.&nbsp;
                <Link href="" className={ITEM.title}>
                    {taskItem.title}
                </Link>
            </div>

            <div className={ITEM.details}>
                <Link href="" className={ITEM.client}>{taskItem.client}</Link>
                <span className={ITEM.due} title="Deadline">{taskItem.dueDate}</span>
                <TaskTypeMarker taskType={taskItem.type} />
            </div>
        </div>
    )
}