
import TaskTypeMarker from "./TaskTypeMarker"
import PriorityMarker from "./PriorityMarker"
import Link from "next/link"
import type Task from "@lib/types/Task"
import { fetchClient } from "@/lib/api/clients"

export default async function TaskListItem({ taskItem, index }: { taskItem: Task, index: number }) {

    const firmOfTask = (await fetchClient(taskItem.clientId)).name;

    const ITEM = {
        wrapper: "list-item-wrapper flex flex-col gap-1",
        heading: "block",
        title: "link-heading inline",
        details: "list-item-details grid grid-cols-[40%_30%_30%] gap-1 items-center",
        client: "link-primary overflow-clip",
        due: "min-w-20 ml-2 font-normal text-left text-rose-600",
        taskTypeWrapper: "mx-2 text-right"
    }

    return (
        <div className={ITEM.wrapper}>
            <div className={ITEM.heading}>
                <PriorityMarker taskPrio={taskItem.priority} />&nbsp;{index + 1}.&nbsp;
                <Link href={`task/${taskItem.id}`} className={ITEM.title}>
                    {taskItem.title}
                </Link>
            </div>

            <div className={ITEM.details}>
                <Link href={`client/${taskItem.clientId}`} className={ITEM.client}>{firmOfTask}</Link>
                <span className={ITEM.due} title="Deadline">{taskItem.dueDate}</span>
                <span className={ITEM.taskTypeWrapper}><TaskTypeMarker taskType={taskItem.type} /></span>
            </div>
        </div>
    )
}