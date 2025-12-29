"use client";

import { useUI } from "../context/UIContext";
import Image from "next/image"

export default function MenuToggle() {
    const uiContext = useUI()
    if (!uiContext) return null;
    const { setIsSidebarOpen } = uiContext

    const toggleBase = "flex lg:hidden cursor-pointer"

    return (
        <button onClick={() => setIsSidebarOpen(prev => !prev)} className={toggleBase}>
            <Image
                className="dark:invert"
                src="/menu-toggle.svg"
                alt="Profile"
                width={40}
                height={40}
                priority
            />
        </button>
    )
}