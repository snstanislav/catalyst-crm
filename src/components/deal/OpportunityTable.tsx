import Link from "next/link";
import type Opportunity from "@lib/types/Opportunity";
import ProgressMark from "../history/ProgressMark";
import SuccessMark from "../history/SuccessMark";
import FailMark from "../history/FailMark";
import { fetchClient } from "@/lib/api/clients";

export default function OpportunityTable({ allOpportunities, isAllShowed }: { allOpportunities: Opportunity[], isAllShowed: boolean }) {

    const TABLE = {
        base: "min-w-full text-xs border border-gray-300",
        head: "align-middle h-8 text-gray-800 bg-gray-300",
        linkHeading: "link-heading font-semibold",
        link: "link-menu",
        row: "even:bg-gray-100",
        sell: "w-fit min-w-6 max-w-25 xl:max-w-37 px-2 py-1.5 text-center oveflow-x-hidden wrap-break-word border border-gray-300",
        icoSize: { w: 25, h: 25 },
        titleColumn: "min-w-30",
        colGroupEdge: "border-r-3"
    }

    return (
        <table className={TABLE.base}>
            <thead className={TABLE.head}>
                <tr className="align-center">
                    <th className={TABLE.sell}>#</th>
                    <th className={`${TABLE.sell} ${TABLE.titleColumn}`}>Title</th>
                    {isAllShowed ? <th className={TABLE.sell}>Client</th> : ""}
                    <th className={TABLE.sell}>Stage</th>
                    <th className={TABLE.sell}></th>
                    <th className={TABLE.sell}>Proba-bility</th>

                    <th className={TABLE.sell}>Order acceptance</th>
                    <th className={TABLE.sell}>Expected completion</th>
                    <th className={TABLE.sell}>Completion</th>
                    <th className={TABLE.sell}>Actual duration</th>

                    <th className={TABLE.sell}>Order total</th>

                    <th className={TABLE.sell}>Prepaid amount</th>
                    <th className={TABLE.sell}>%</th>
                    <th className={TABLE.sell}>Prepaid date</th>

                    <th className={TABLE.sell}>Surcharge amount</th>
                    <th className={TABLE.sell}>%</th>
                    <th className={TABLE.sell}>Surcharge date</th>
                </tr>
            </thead>
            <tbody>
                {
                    allOpportunities.map(async (elem: any, index: number) => (
                        <tr key={elem.id} className={TABLE.row}>
                            <td className={TABLE.sell}>{index + 1}.</td>
                            <td className={`${TABLE.sell} ${TABLE.titleColumn}`}>
                                <Link href={`opportunity/${elem.id}`} className={TABLE.linkHeading}>{elem.title}</Link>
                            </td>
                            {
                                isAllShowed ?
                                    <td className={TABLE.sell}>
                                        <Link href={`opportunity/${elem.id}`} className={TABLE.link}>
                                            {(await fetchClient(elem.clientId)).name}
                                        </Link>
                                    </td>
                                    : ""
                            }
                            <td className={TABLE.sell}>{elem.stage}</td>
                            <td className={`${TABLE.sell} pr-0.5`}>
                                {elem.status === "progress" ? <ProgressMark /> :
                                    elem.status === "success" ? <SuccessMark /> :
                                        elem.status === "failed" ? <FailMark /> : ""}
                            </td>
                            <td className={TABLE.sell}>{elem.probability}</td>

                            <td className={TABLE.sell}>{elem.orderAcceptanceDate}</td>
                            <td className={TABLE.sell}>{elem.expectedCompletionDate}</td>
                            <td className={TABLE.sell}>{elem.completionDate}</td>
                            <td className={`${TABLE.sell} ${TABLE.colGroupEdge}`}>{elem.actualDuration}</td>

                            <td className={`${TABLE.sell} ${TABLE.colGroupEdge}`}>{elem.orderTotalAmount} {elem.orderTotalCurrency}</td>

                            <td className={TABLE.sell}>{elem.prepaymentAmount} {elem.prepaymentCurrency}</td>
                            <td className={TABLE.sell}>{elem.prepaymentProcent}</td>
                            <td className={`${TABLE.sell} ${TABLE.colGroupEdge}`}>{elem.prepaymentDate}</td>

                            <td className={TABLE.sell}>{elem.surchargeAmount} {elem.surchargeCurrency}</td>
                            <td className={TABLE.sell}>{elem.surchargeProcent}</td>
                            <td className={TABLE.sell}>{elem.surchargeDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
