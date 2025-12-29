import Link from "next/link"
import HistoryBar from "./HistoryBar"

export default function ClientListItem({ clientItem }: { clientItem: any }) {

    const ITEM = {
        wrapper: "flex flex-row gap-3 list-item-wrapper",
        img: { w: 45, h: 45 },
        details: "flex flex-col gap-2",
        name: "link-heading",
        location: " list-item-details",
    }
    return (
        <div className={ITEM.wrapper}>
            <img src="/business.svg" width={ITEM.img.w} height={ITEM.img.h} title={clientItem.name} alt={clientItem.name} />
            <div className={ITEM.details}>
                <Link href="" className={ITEM.name}>{clientItem.name}</Link>
                <div className={ITEM.location}>{clientItem.city}, {clientItem.country}</div>
                <HistoryBar success={clientItem.success} progress={clientItem.progress} failed={clientItem.failed} />
            </div>
        </div>
    )
}