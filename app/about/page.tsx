
import Link from "next/link";

export default function About() {

    const ABOUT = {
        wrapper: "flex flex-col page-wrapper",
        base: "flex flex-col gap-6 px-10 py-7 page-content-card",
        header: "header-primary",
        paragraph: "mb-4",
        address: "block text-sm"
    }

    return (
        <article className={ABOUT.wrapper}>
            <div className={ABOUT.base}>
                <h1 className={ABOUT.header}>About uns</h1>
                <div>
                    <p className={ABOUT.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima in hic at fuga facere architecto rem dicta error itaque repellat ratione, fugiat ipsam voluptatibus totam sequi! Quam, voluptatum! Et, aperiam.</p>
                    <p className={ABOUT.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus necessitatibus quisquam laboriosam magnam facere dolores reiciendis voluptates doloremque, culpa cum consequuntur ex id repellat adipisci nulla, in eos pariatur obcaecati.</p>
                    <p className={ABOUT.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur pariatur delectus alias nemo iure laboriosam repellat commodi nostrum sed cumque magni consequatur quasi sequi omnis, tempore similique obcaecati deleniti vero?</p>

                </div>
                <address className={ABOUT.address}>
                    Written by Jon Doe <br />
                    Visit us at: <Link href="example.com" className="link-primary">example.com</Link>
                    <br />
                    Box 564, Miami<br />
                    USA
                </address>
            </div>
        </article>
    )
}