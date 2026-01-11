import Link from "next/link"
import HistoryBar from "../history/HistoryBar"

export default function ClientListItem({ clientItem }: { clientItem: any }) {

    const ITEM = {
        wrapper: "list-item-wrapper flex flex-row gap-3 xl:mx-2",
        img: { w: 45, h: 45 },
        details: "flex flex-col gap-1.5 mt-1.5 text-xs xl:text-sm",
        name: "link-heading",
        location: " list-item-details",
    }
    return (
        <div className={ITEM.wrapper}>
            <img src="/business.svg" width={ITEM.img.w} height={ITEM.img.h} title={clientItem.name} alt={clientItem.name} />
            <div>
                <Link href={`/client/${clientItem.id}`} className={ITEM.name}>{clientItem.name}</Link>
                <div className={ITEM.details}>
                    <div className={ITEM.location}>{clientItem.city}, {clientItem.country}</div>
                    <HistoryBar success={clientItem.success} progress={clientItem.progress} failed={clientItem.failed} />
                </div>
            </div>
        </div>
    )
}