import Link from "next/link";
import ProgressMark from "../history/ProgressMark";
import SuccessMark from "../history/SuccessMark";
import FailMark from "../history/FailMark";
import type Task from "@lib/types/Task";
import PriorityMarker from "./PriorityMarker";
import TaskTypeMarker from "./TaskTypeMarker";
import { fetchClient } from "@/lib/clients";

export default function TaskTable({ allTasks, isAllShowed }: { allTasks: Task[], isAllShowed: boolean }) {

    const TABLE = {
        base: "min-w-full text-xs border border-gray-300",
        head: "align-middle h-8 text-gray-800 bg-gray-300",
        linkHeading: "link-heading font-semibold",
        link: "link-menu",
        row: "even:bg-gray-100",
        sell: "w-fit min-w-6 p-2 text-center oveflow-x-hidden wrap-break-word border border-gray-300",
        icoSize: { w: 25, h: 25 },

        markColumn: "max-w-15",
        descrColumn: "min-w-35"
    }

    return (
        <table className={TABLE.base}>
            <thead className={TABLE.head}>
                <tr className="align-center">
                    <th className={TABLE.sell}>#</th>
                    <th className={`${TABLE.sell} ${TABLE.markColumn}`}>Priority</th>
                    <th className={TABLE.sell}>Title</th>
                    <th className={TABLE.sell}>Type</th>
                    {isAllShowed ? <th className={TABLE.sell}>Client</th> : ""}
                    <th className={`${TABLE.sell} ${TABLE.descrColumn}`}>Description</th>
                    <th className={TABLE.sell}>Deadline</th>
                    <th className={`${TABLE.sell} ${TABLE.markColumn}`}>Deal status</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTasks.map(async (elem: Task, index: number) => (
                        <tr key={elem.id} className={TABLE.row}>
                            <td className={TABLE.sell}>{index + 1}.</td>
                            <td className={`${TABLE.sell} ${TABLE.markColumn}`}>
                                <PriorityMarker taskPrio={elem.priority} />
                            </td>
                            <td className={TABLE.sell}>
                                <Link className={TABLE.linkHeading} href={`../task/${elem.id}`}>{elem.title}</Link>
                            </td>
                            <td className={TABLE.sell}>
                                <TaskTypeMarker taskType={elem.type} />
                            </td>
                            {
                                isAllShowed ?
                                    <td className={TABLE.sell}>
                                        <Link className={TABLE.link} href={`client/${elem.clientId}`}>{
                                            (await fetchClient(elem.clientId)).name
                                        }</Link>
                                    </td>
                                    : ""
                            }
                            <td className={`${TABLE.sell} ${TABLE.descrColumn}`}>{elem.description}</td>
                            <td className={TABLE.sell}>{elem.dueDate}</td>
                            <td className={`${TABLE.sell} ${TABLE.markColumn} pr-0`}>
                                {elem.status === "progress" ? <ProgressMark /> :
                                    elem.status === "success" ? <SuccessMark /> :
                                        elem.status === "failed" ? <FailMark /> : ""}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}