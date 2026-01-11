"use client";

import React,{ createContext, useContext, useState } from "react"

const UIContext = createContext<{isSidebarOpen: boolean; setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>} | null>(null)

export function UIProvider({children}: {children: React.ReactNode}) {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <UIContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
            {children}
        </UIContext.Provider>
    )
}

export function useUI() {
    return useContext(UIContext)
}