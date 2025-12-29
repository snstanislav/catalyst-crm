import Link from "next/link"

export default function FrequentContactsItem({ contactItem }: { contactItem: any }) {

    const ITEM = {
        wrapper: "flex flex-row gap-4 list-item-wrapper",
        img: { w: 45, h: 45 },
        details: "flex flex-col gap-2",
        name: "link-heading",
        company: "link-primary list-item-details",
        email: "link-menu list-item-details",
        phoneWrapper: "flex flex-col list-item-details",
        phone: "link-menu list-item-details"
    }
    return (
        <div className={ITEM.wrapper}>
            <img src="/person.svg" width={ITEM.img.w} height={ITEM.img.h} title={contactItem.name} alt={contactItem.name} />
            <div className={ITEM.details}>
                <Link href="" className={ITEM.name}>{contactItem.name}</Link>
                <Link href="" className={ITEM.company}>{contactItem.company}</Link>
                <Link href={`mailto:${contactItem.email}`} className={ITEM.email}>{contactItem.email}</Link>
                <div className={ITEM.phoneWrapper}>
                    {contactItem.phone.split(',').map((el: string, idx: number)=>(
                    <Link href={`tel:${el}`} className={ITEM.phone} key={idx}>{el}</Link>
                ))}
                </div>

            </div>
        </div>
    )
}