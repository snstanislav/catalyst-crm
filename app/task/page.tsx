import TaskTable from "@/components/client/TaskTable";
import { fetchAllTasks } from "@/lib/tasks";
import type Task from "@lib/types/Task";

export default async function Clients() {

    const allTasks: Task[] = await fetchAllTasks()

    const TASKS = {
        wrapper: "flex flex-col flex-wrap gap-5 p-5 w-full bg-white overflow-x-auto",
        header: "header-primary",
        history: "flex flex-row gap-3 mb-2 font-mono"
    }
    return (
        <div className={TASKS.wrapper}>
            <h1 className={TASKS.header}>Task list</h1>
            
            <TaskTable allTasks={allTasks} isAllShowed={true} />
        </div>
    )
}