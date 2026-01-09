import axios from "axios"

export async function fetchDeal(dealId:string) {
    return (await axios(`http://localhost:3000/api/opportunities/${dealId}`)).data.opportunity;
}

export async function fetchAllDeals() {
    return (await axios(`http://localhost:3000/api/opportunities`)).data.allOpportunities;
}

export async function fetchRelatedDeals(clientId: string) {
    return (await axios(`http://localhost:3000/api/clients/${clientId}/opportunities`)).data.opportunity;
}