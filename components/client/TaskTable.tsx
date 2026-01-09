import Link from "next/link";
import ProgressMark from "../history/ProgressMark";
import SuccessMark from "../history/SuccessMark";
import FailMark from "../history/FailMark";
import type Task from "@lib/types/Task";
import PriorityMarker from "../task/PriorityMarker";
import TaskTypeMarker from "../task/TaskTypeMarker";
import { fetchClient } from "@/lib/clients";

export default function TaskTable({ allTasks, isAllShowed }: { allTasks: Task[], isAllShowed: boolean }) {

    const TABLE = {
        base: "min-w-full text-xs border border-gray-300",
        head: "align-middle h-8 text-gray-800 bg-gray-300",
        link: "link-primary",
        row: "even:bg-gray-100",
        sell: "w-fit min-w-6 max-w-25 xl:max-w-37 px-2 py-1.5 text-center oveflow-x-hidden wrap-break-word border border-gray-300",
        icoSize: { w: 25, h: 25 },
        descrColumn: "min-w-35"
    }

    return (
        <table className={TABLE.base}>
            <thead className={TABLE.head}>
                <tr className="align-center">
                    <th className={TABLE.sell}>#</th>
                    <th className={TABLE.sell}>Priority</th>
                    <th className={TABLE.sell}>Title</th>
                    <th className={TABLE.sell}>Type</th>
                    {isAllShowed ? <th className={TABLE.sell}>Client</th> : ""}
                    <th className={TABLE.sell}>Description</th>
                    <th className={TABLE.sell}>Deadline</th>
                    <th className={TABLE.sell}>Deal status</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTasks.map(async (elem: Task, index: number) => (
                        <tr key={elem.id} className={TABLE.row}>
                            <td className={TABLE.sell}>{index + 1}.</td>
                            <td className={TABLE.sell}>
                                <PriorityMarker taskPrio={elem.priority} />
                            </td>
                            <td className={TABLE.sell}>{elem.title}</td>
                            <td className={TABLE.sell}>
                                <TaskTypeMarker taskType={elem.type} />
                            </td>
                            {
                                isAllShowed ?
                                    <td className={TABLE.sell}>{
                                        elem.client
                                        /*(await fetchClient(elem.clientId)).name*/
                                    }
                                    </td>
                                    : ""
                            }
                            <td className={`${TABLE.sell} ${TABLE.descrColumn}`}>{elem.description}</td>
                            <td className={TABLE.sell}>{elem.dueDate}</td>
                            <td className={`${TABLE.sell} pr-0`}>
                                {elem.status === "progress" ? <ProgressMark /> :
                                    elem.status === "success" ? <SuccessMark /> :
                                        elem.status === "failed" ? <FailMark /> : ""}
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )

}