import Link from "next/link";
import { fetchClient } from "@lib/clients";
import { fetchRelatedContacts } from "@lib/contacts"
import { fetchRelatedTasks } from "@lib/tasks"
import { fetchRelatedDeals } from "@lib/deals";
import type Opportunity from "@lib/types/Opportunity";
import ContactItem from "@components/ContactItem";
import TaskTable from "@components/client/TaskTable";
import OpportunityTable from "@components/client/OpportunityTable";

export default async function SingleClient({ params }: { params: any }) {
    const { id } = await params;

    const client = await fetchClient(id)
    const relatedContacts = await fetchRelatedContacts(id)
    const relatedTasks = await fetchRelatedTasks(id)
    const relatedDeals: Opportunity[] = await fetchRelatedDeals(id)

    const GENERAL = {
        wrapper: "page-wrapper flex flex-col gap-3 w-full  font-mono ",
        link: "link-menu",
        linkPrimary: "link-primary",
        sectionWrapper: "page-content-card flex flex-wrap flex-row gap-2 items-center h-fit px-5 py-3 overflow-x-auto",
        header: "header-primary"
    }

    const BASIC_INFOS = {
        nameHeader: "header-primary my-2 text-lime-600 text-3xl",
        details: "px-2 w-full",
        contactItem: "flex flex-wrap p-1 max-w-fit"
    }

    return (
        <div className={GENERAL.wrapper}>

            <section className={GENERAL.sectionWrapper}>
                <div className={BASIC_INFOS.details}>
                    <h1 className={BASIC_INFOS.nameHeader}>{client.name}</h1>
                    <p>
                        {client.industry} {client.type} from {client.city}, {client.country}
                        &nbsp;|&nbsp;<Link href={client.web} className={GENERAL.linkPrimary}>{client.web}</Link>
                    </p>
                    <p>
                        <Link href={`mailto:${client.email}`} className={GENERAL.linkPrimary}>{client.email}</Link>&nbsp;|&nbsp;{
                            client.phone.split(',').map((el: string, idx: number, arr: string[]) => (<span key={idx} >
                                <Link href={`tel:${el}`} className={GENERAL.link}>{el}</Link>
                                {arr.length - 1 > idx ? ',' : ''}
                            </span>))
                        }
                    </p>
                </div>

                {relatedContacts.map((elem: any, index: number) => (
                    <div key={index} className={BASIC_INFOS.contactItem}>
                        <ContactItem contactItem={elem} showFirm={false} />
                    </div>
                ))}
            </section>

            <section className={GENERAL.sectionWrapper}>
                <h1 className={GENERAL.header}>Related tasks</h1>
                <TaskTable allTasks={relatedTasks} isAllShowed={false} />
            </section>

            <section className={GENERAL.sectionWrapper}>
                <h1 className={GENERAL.header}>Deals / Opportunities</h1>
                <OpportunityTable allOpportunities={relatedDeals} isAllShowed={false} />
            </section>
        </div>
    )
}