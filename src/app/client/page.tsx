import ClientTable from "@components/client/ClientTable";
import HistoryBar from "@components/history/HistoryBar";
import type Client from "@lib/types/Client";
import { fetchAllClients } from "@/lib/api/clients";

export default async function Clients() {

    const allClients: Client[] = await fetchAllClients()

    let success = allClients.reduce((total, currVal) => total += currVal.success, 0)
    let progress = allClients.reduce((total, currVal) => total += currVal.progress, 0)
    let failed = allClients.reduce((total, currVal) => total += currVal.failed, 0)

    const CLIENTS = {
        wrapper: "flex flex-col flex-wrap gap-5 p-5 w-full bg-white overflow-x-auto",
        header: "header-primary",
        history: "flex flex-row gap-3 mb-2 font-mono"
    }
    return (
        <div className={CLIENTS.wrapper}>
            <h1 className={CLIENTS.header}>Clients</h1>
            <div className={CLIENTS.history}>
                Total history:
                <HistoryBar success={success} progress={progress} failed={failed} />
            </div>
            <ClientTable allClients={allClients} />
        </div>
    )
}