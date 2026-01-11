import FailMark from "@components/history/FailMark";
import ProgressMark from "@components/history/ProgressMark";
import SuccessMark from "@components/history/SuccessMark";
import PriorityMarker from "@components/task/PriorityMarker";
import TaskTypeMarker from "@components/task/TaskTypeMarker";
import type Client from "@lib/types/Client";
import type Task from "@lib/types/Task";
import { fetchClient } from "@/lib/api/clients";
import { fetchTask } from "@/lib/api/tasks";

export default async function SingleTask({ params }: { params: any }) {
    const { id } = await params;

    const currentTask: Task = await fetchTask(id)
    const currentClient: Client = await fetchClient(currentTask.clientId)

    const TASK = {
        wrapper: "page-wrapper flex flex-col gap-3 w-full  font-mono ",
        link: "link-menu",
        linkPrimary: "link-primary",
        sectionWrapper: "page-content-card flex flex-wrap flex-col gap-3 h-fit p-5 overflow-x-auto",
        header: "header-primary",
        nameHeader: "header-primary mb-2 text-yellow-600 text-2xl",
        deadline: "text-rose-700 font-semibold",

        controlWrapper: "flex flex-row justify-end gap-4",
        button: "px-3 py-0.5 w-fit h-fit font-semibold text-sm rounded-md cursor-pointer",
        editBtn: "text-white hover:text-blue-500 bg-blue-500 hover:bg-white border-2 border-blue-500",
        doneBtn: " text-white hover:text-emerald-500 bg-emerald-500 hover:bg-white border-2 border-emerald-500"
    }

    return (
        <div className={TASK.wrapper}>

            <section className={TASK.sectionWrapper}>
                <h1 className={TASK.nameHeader}>
                    TO DO: {currentTask.title}&nbsp;
                    <PriorityMarker taskPrio={currentTask.priority} />
                </h1>
                <TaskTypeMarker taskType={currentTask.type} />
                <div>
                    <h2 className={TASK.header}>{currentClient.name}                    </h2>
                </div>
                <time dateTime={currentTask.dueDate} className={TASK.deadline}>Deadline: {currentTask.dueDate}&nbsp;
                    {currentTask.status === "progress" ? <ProgressMark /> :
                        currentTask.status === "success" ? <SuccessMark /> :
                            currentTask.status === "failed" ? <FailMark /> : ""}</time>
                <div>
                    {currentTask.description}
                </div>

                <div className={TASK.controlWrapper}>
                    <button className={`${TASK.button} ${TASK.editBtn}`}>Edit</button>
                    <button className={`${TASK.button} ${TASK.doneBtn}`}>Mark as done</button>
                </div>
            </section>
        </div>
    )
}