"use client";

import { useUI } from "../context/UIContext";
import Link from "next/link"

export default function Sidebar() {

    const uiContext = useUI();
    if (!uiContext) return null;
    const { isSidebarOpen, setIsSidebarOpen } = uiContext

    const SIDEBAR = {
        regular: "fixed z-20 lg:static flex-col items-left bg-white w-full md:w-60 lg:w-80 h-dvh py-1 font-medium font-mono md:border-r-1 md:border-gray-300 transition-transform",
        opened: "translate-x-0",
        closed: "-translate-x-full lg:translate-x-0"
    }

    const PROFILE = {
        section: "flex flex-row justify-between items-center pl-4 py-3 mx-3 border-b-1 border-gray-300",
        icoSize: { w: 27, h: 13 },
        item: `flex flex-row gap-3 link-menu`,
        collapseButton: "flex lg:hidden cursor-pointer transition-transform hover:rotate-180"
    }

    const NAVIGATION = {
        section: "flex flex-col gap-5 p-7",
        item: `flex flex-row gap-4 link-menu`,
        icoSize: { w: 25, h: 13 }
    }

    return (
        <aside className={`${SIDEBAR.regular} ${isSidebarOpen ? SIDEBAR.opened : SIDEBAR.closed}`} >
            <div className={PROFILE.section}>
                <Link href="" className={PROFILE.item}>
                    <img
                        className="dark:invert"
                        src="/profile.svg"
                        alt="Profile"
                        width={PROFILE.icoSize.w}
                        height={PROFILE.icoSize.h}
                        style={{ height: "auto" }}
                    />
                    Profile</Link>
                <button onClick={() => setIsSidebarOpen(prev => !prev)} className={PROFILE.collapseButton}>
                    <img
                        className="dark:invert"
                        src="/collapse.svg"
                        alt="Collapse menu"
                        width={PROFILE.icoSize.w}
                        height={PROFILE.icoSize.h}
                        style={{ height: "auto" }}
                    />
                </button>
            </div>
            <nav className={NAVIGATION.section}>
                <Link href="" className={NAVIGATION.item}>
                    <img
                        className="dark:invert"
                        src="/home.svg"
                        alt=""
                        width={NAVIGATION.icoSize.w}
                        height={NAVIGATION.icoSize.h}
                        style={{ height: "auto" }}
                    />
                    Home</Link>
                <Link href="" className={NAVIGATION.item}>
                    <img
                        className="dark:invert"
                        src="/clients.svg"
                        alt=""
                        width={NAVIGATION.icoSize.w}
                        height={NAVIGATION.icoSize.h}
                        style={{ height: "auto" }}
                    />
                    Clients</Link>
                <Link href="" className={NAVIGATION.item}>
                    <img
                        className="dark:invert"
                        src="/tasks.svg"
                        alt=""
                        width={NAVIGATION.icoSize.w}
                        height={NAVIGATION.icoSize.h}
                        style={{ height: "auto" }}
                    />
                    Tasks</Link>
                <Link href="" className={NAVIGATION.item}>
                    <img
                        className="dark:invert"
                        src="/deals.svg"
                        alt=""
                        width={NAVIGATION.icoSize.w}
                        height={NAVIGATION.icoSize.h}
                        style={{ height: "auto" }}
                    />
                    Opportunities</Link>
                <Link href="about" className={NAVIGATION.item}>
                    <img
                        className="dark:invert"
                        src="/about.svg"
                        alt=""
                        width={NAVIGATION.icoSize.w}
                        height={NAVIGATION.icoSize.h}
                    />
                    About</Link>
            </nav>
        </aside >
    )
}