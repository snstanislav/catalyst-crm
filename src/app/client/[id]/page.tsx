import Link from "next/link";
import { fetchClient } from "@/lib/api/clients";
import { fetchRelatedContacts } from "@/lib/api/contacts"
import { fetchRelatedTasks } from "@/lib/api/tasks"
import { fetchRelatedDeals } from "@/lib/api/deals";
import type Opportunity from "@lib/types/Opportunity";
import ContactItem from "@/components/client/ContactItem";
import TaskTable from "@/components/task/TaskTable";
import OpportunityTable from "@/components/deal/OpportunityTable";

export default async function SingleClient({ params }: { params: any }) {
    const { id } = await params;

    const client = await fetchClient(id)
    const relatedContacts = await fetchRelatedContacts(id)
    const relatedTasks = await fetchRelatedTasks(id)
    const relatedDeals: Opportunity[] = await fetchRelatedDeals(id)

    const CLIENT = {
        wrapper: "page-wrapper flex flex-col gap-3 w-full  font-mono ",
        link: "link-menu",
        linkPrimary: "link-primary",
        sectionWrapper: "page-content-card flex flex-wrap flex-row gap-2 items-center h-fit px-5 py-3 overflow-x-auto",
        header: "header-primary",
        nameHeader: "header-primary my-2 text-cyan-600 text-3xl",
        details: "px-2 w-full",
        contactItem: "flex flex-wrap p-1 max-w-fit"
    }

    return (
        <div className={CLIENT.wrapper}>

            <section className={CLIENT.sectionWrapper}>
                <div className={CLIENT.details}>
                    <h1 className={CLIENT.nameHeader}>{client.name}</h1>
                    <p>
                        {client.industry} {client.type} from {client.city}, {client.country}
                        &nbsp;|&nbsp;<Link href={client.web} className={CLIENT.linkPrimary}>{client.web}</Link>
                    </p>
                    <p>
                        {
                            client.email.split(',').map((el: string, idx: number, arr: string[]) => (<span key={idx} >
                                <Link href={`mailto:${el}`} className={CLIENT.linkPrimary}>{el}</Link>
                                {arr.length - 1 > idx ? ', ' : ''}
                            </span>))
                        }
                        &nbsp;|&nbsp;
                        {
                            client.phone.split(',').map((el: string, idx: number, arr: string[]) => (<span key={idx} >
                                <Link href={`tel:${el}`} className={CLIENT.link}>{el}</Link>
                                {arr.length - 1 > idx ? ', ' : ''}
                            </span>))
                        }
                    </p>
                </div>

                {relatedContacts.map((elem: any, index: number) => (
                    <div key={index} className={CLIENT.contactItem}>
                        <ContactItem contactItem={elem} showFirm={false} />
                    </div>
                ))}
            </section>

            <section className={CLIENT.sectionWrapper}>
                <h1 className={CLIENT.header}>Related tasks</h1>
                <TaskTable allTasks={relatedTasks} isAllShowed={false} />
            </section>

            <section className={CLIENT.sectionWrapper}>
                <h1 className={CLIENT.header}>Deals / Opportunities</h1>
                <OpportunityTable allOpportunities={relatedDeals} isAllShowed={false} />
            </section>
        </div>
    )
}