import { fetchAllDeals } from "@/lib/api/deals";
import type Opportunity from "@lib/types/Opportunity";
import OpportunityTable from "@/components/deal/OpportunityTable";

export default async function Opportunities() {

    const allOpportunities: Opportunity[] = await fetchAllDeals()

    const OPPORTUNITIES = {
        wrapper: "flex flex-col flex-wrap gap-5 p-5 w-full bg-white overflow-x-auto",
        header: "header-primary",
        history: "flex flex-row gap-3 mb-2 font-mono"
    }
    return (
        <div className={OPPORTUNITIES.wrapper}>
            <h1 className={OPPORTUNITIES.header}>Opportunity list</h1>
            
            <OpportunityTable allOpportunities={allOpportunities} isAllShowed={true} />
        </div>
    )
}