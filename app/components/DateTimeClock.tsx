"use client";

import { useState, useEffect } from "react"
import { formatDateTime } from "../lib/utils/date-time-format"

export default function DateTimeClock() {

    const [currDateTime, setCurrDateTime] = useState("");

    useEffect(() => {
        const update = () => setCurrDateTime(formatDateTime(new Date()));
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, [])

    if(!currDateTime) return null;

    const CLOCK = "px-2 py-1 text-yellow-200 text-xs rounded-sm bg-gray-800"
    return (
        <span className={CLOCK}>
            {currDateTime}
        </span>
    )
}

