import { fetchClient } from "@/lib/clients"
import Link from "next/link"

export default async function FrequentContactsItem({ contactItem, showFirm }: { contactItem: any, showFirm: boolean }) {

    const firmOfContact = (await fetchClient(contactItem.clientId)).name;

    const ITEM = {
        wrapper: "list-item-wrapper flex flex-row gap-3 xl:gap-5 w-full md:min-w-65",
        img: { w: 45, h: 45 },
        details: "flex flex-col gap-2",
        company: "link-primary list-item-details",
        phoneEmailWrapper: "list-item-details flex flex-col gap-1",
        phoneEmail: "link-menu list-item-details"
    }
    return (
        <div className={ITEM.wrapper}>
            <img src="/person.svg" width={ITEM.img.w} height={ITEM.img.h} title={contactItem.name} alt={contactItem.name} />

            <div className={ITEM.details}>
                <div>{contactItem.name}</div>

                {showFirm && <Link href={`client/${contactItem.clientId}`} className={ITEM.company}>{firmOfContact}</Link>}

                <div className={ITEM.phoneEmailWrapper}>
                    {contactItem.email.split(',').map((el: string, idx: number) => (
                        <Link href={`mailto:${el}`} className={ITEM.phoneEmail} key={idx}>{el}</Link>
                    ))}
                </div>

                <div className={ITEM.phoneEmailWrapper}>
                    {contactItem.phone.split(',').map((el: string, idx: number) => (
                        <Link href={`tel:${el}`} className={ITEM.phoneEmail} key={idx}>{el}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}