import TaskTable from "@/components/task/TaskTable";
import type Opportunity from "@lib/types/Opportunity";
import type Task from "@lib/types/Task";
import { fetchDeal } from "@lib/deals";
import { fetchRelatedTasks } from "@lib/tasks"
import { fetchClient } from "@lib/clients";

export default async function SingleOpportunity({ params }: { params: any }) {
    const { id } = await params;

    const opportunity: Opportunity = await fetchDeal(id)
    const relatedTasks: Task[] = await fetchRelatedTasks(id)

    const GENERAL = {
        wrapper: "page-wrapper flex flex-col gap-3 w-full  font-mono ",
        link: "link-menu",
        linkPrimary: "link-primary",
        sectionWrapper: "page-content-card flex flex-wrap flex-col gap-2 h-fit p-5 overflow-x-auto",
        header: "header-primary",
        nameHeader: "header-primary mb-2 text-lime-600 text-2xl",
        details: "flex flex-col gap-1 px-7 py-2 w-full",

        detailsTable: " w-fit ml-3 text-sm",
        sellHeading: "px-2 py-1 text-right",
        sellContent: "px-2 py-1 text-link",
    }

    return (
        <div className={GENERAL.wrapper}>

            <section className={GENERAL.sectionWrapper}>
                <h1 className={GENERAL.nameHeader}>{opportunity.title}</h1>
                <h2 className={GENERAL.header}>General data</h2>
                <table className={GENERAL.detailsTable}>
                    <tbody>
                        <tr>
                            <th className={GENERAL.sellHeading}>Client:</th>
                            <td className={GENERAL.sellContent}>{(await fetchClient(opportunity.clientId)).name}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Stage:</th>
                            <td className={GENERAL.sellContent}>{opportunity.stage}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Order status:</th>
                            <td className={GENERAL.sellContent}>{opportunity.status}</td>
                        </tr>
                        
                        <tr>
                            <th className={GENERAL.sellHeading}>Success probability:</th>
                            <td className={GENERAL.sellContent}>{opportunity.probability}%</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={GENERAL.sectionWrapper}>
                <h2 className={GENERAL.header}>Timing</h2>

                <table className={GENERAL.detailsTable}>
                    <tbody>
                        <tr>
                            <th className={GENERAL.sellHeading}>Order accepted:</th>
                            <td className={GENERAL.sellContent}></td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Expected completion:</th>
                            <td className={GENERAL.sellContent}>{opportunity.expectedCompletionDate}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Actual completed:</th>
                            <td className={GENERAL.sellContent}>{opportunity.completionDate}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Duration:</th>
                            <td className={GENERAL.sellContent}>{opportunity.actualDuration}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={GENERAL.sectionWrapper}>
                <h2 className={GENERAL.header}>Payments</h2>
                <table className={GENERAL.detailsTable}>
                    <tbody>
                        <tr>
                            <th className={GENERAL.sellHeading}>Order total amount:</th>
                            <td className={GENERAL.sellContent}>{opportunity.orderTotalAmount} {opportunity.orderTotalCurrency}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Prepaid:</th>
                            <td className={GENERAL.sellContent}>{opportunity.prepaymentAmount} {opportunity.prepaymentCurrency} ({opportunity.prepaymentProcent}% from total)</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Prepaid at:</th>
                            <td className={GENERAL.sellContent}>{opportunity.prepaymentDate}</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Surcharged:</th>
                            <td className={GENERAL.sellContent}>{opportunity.surchargeAmount} {opportunity.surchargeCurrency} ({opportunity.surchargeProcent}%)</td>
                        </tr>
                        <tr>
                            <th className={GENERAL.sellHeading}>Surcharged at:</th>
                            <td className={GENERAL.sellContent}>{opportunity.surchargeDate}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={GENERAL.sectionWrapper}>
                <h2 className={GENERAL.header}>Related tasks</h2>
                <TaskTable allTasks={relatedTasks} isAllShowed={false} />
            </section>

        </div>
    )
}