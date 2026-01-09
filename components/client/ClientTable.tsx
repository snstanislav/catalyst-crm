"use client";

import { useEffect, useState } from "react";
import Link from "next/link"
import SuccessMark from "@/components/history/SuccessMark";
import ProgressMark from "@/components/history/ProgressMark";
import FailMark from "@/components/history/FailMark";
import type Client from "@/lib/types/Client";

export default function ClientTable({ allClients }: { allClients: Client[] }) {

    const [titleInput, setTitleInput] = useState<string>("");
    const [cityInput, setCityInput] = useState<string>("");
    const [countryInput, setCountryInput] = useState<string>("");
    const [typeInput, setTypeInput] = useState<string>("");

    const filteredClients: Client[] = allClients.filter(client =>
        client.name.toLowerCase().includes(titleInput.toLowerCase()) &&
        client.city.toLowerCase().includes(cityInput.toLowerCase()) &&
        client.country.toLowerCase().includes(countryInput.toLowerCase()) &&
        client.type.toLowerCase().includes(typeInput.toLowerCase())
    )

    const [sortField, setSortField] = useState<keyof Client>("id");
    const [sortMode, setSortMode] = useState<"none" | "desc" | "asc">("none");

    const sortedClients =
        sortMode === "none"
            ? filteredClients
            : [...filteredClients].sort((a, b) => {
                const aVal = a[sortField];
                const bVal = b[sortField];

                if (typeof aVal === "number" && typeof bVal === "number") {
                    return sortMode === "desc" ? bVal - aVal : aVal - bVal;
                }

                if (
                    typeof aVal === "string" &&
                    typeof bVal === "string" &&
                    isDateString(aVal) &&
                    isDateString(bVal)
                ) {
                    const aDate = parseCustomDate(aVal);
                    const bDate = parseCustomDate(bVal);

                    return sortMode === "desc"
                        ? bDate.getTime() - aDate.getTime()
                        : aDate.getTime() - bDate.getTime();
                }

                return sortMode === "asc"
                    ? String(aVal).localeCompare(String(bVal))
                    : String(bVal).localeCompare(String(aVal));
            });


    function applySorting(field: keyof Client) {
        if (sortField !== field) {
            setSortField(field);
            setSortMode("desc");
        } else {
            setSortMode(prev => (prev === "asc" ? "desc" : "asc"));
        }
    }

    function isDateString(value: string): boolean {
        if (!value.includes(" ")) return false;

        const [datePart, timePart] = value.split(" ");
        if (!datePart || !timePart) return false;

        const datePieces = datePart.split("-");
        const timePieces = timePart.split(":");

        return (
            datePieces.length === 3 &&
            timePieces.length === 2 &&
            datePieces.every(n => !isNaN(Number(n))) &&
            timePieces.every(n => !isNaN(Number(n)))
        );
    }


    function parseCustomDate(dateStr: string): Date {
        const [datePart, timePart] = dateStr.split(" ");
        const [day, month, year] = datePart.split("-").map(Number);
        const [hours, minutes] = timePart.split(":").map(Number);

        return new Date(year, month - 1, day, hours, minutes);
    }

    const TypeImage: { [key: string]: string } = {
        company: "/firma.svg",
        private: "/private.svg"
    }
    const TypeLabel: { [key: string]: string } = {
        company: "Corporate client",
        private: "Private client"
    }

    const SORT_FILTER_BAR = {
        wrapper: "relative",
        input: "w-full inline-block max-w-50 px-2 py-0.5 text-xs xl:text-base font-normal  bg-white rounded-sm",
        filterToggle: "flex justify-self-end xl:justify-self-center list-none cursor-pointer",
        filterPanel: "absolute -bottom-2 left-20 grid grid-cols-[2fr_3fr] w-80 gap-x-4 gap-y-3 px-5 pt-3 pb-5 bg-gray-300 shadow-lg",
        filterPanelHeader: "text-base font-semibold",
        label: "flex flex-row justify-self-end items-center text-sm font-semibold",
        sortWrapper: "flex flex-row m-auto gap-1 cursor-pointer",
        icoSize: { w: 12, h: 12 }
    }

    const TABLE = {
        base: "min-w-full text-xs border border-gray-300",
        head: "align-bottom h-20 text-gray-800 bg-gray-300",
        link: "link-primary",
        row: "even:bg-gray-100",
        sell: "min-w-8 max-w-25 xl:max-w-37 p-1 oveflow-x-hidden wrap-break-word border border-gray-300",
        icoSize: { w: 25, h: 25 },

        icoIdColumns: "p-0 min-w-9 text-center",
        nameColumn: "link-heading font-semibold",
        geoColumn: "min-w-22 xl:min-w-25",
        phoneColumn: "min-w-29",
        phoneItem: " py-1 text-center",
        emailWebColumn: "min-w-25",
        emailItem: "py-1 text-center",
        timeColumns: "min-w-18 xl:min-w-22 text-center",
        historyColumns: "min-w-11 text-center",
        inProgress: "font-semibold",
        sumValue: "min-w-max text-center"
    }

    function clearAll() {
        setCityInput("");
        setCountryInput("");
        setTypeInput("")
    }

    useEffect(() => {
        const filterDialog = document.getElementById("filterDialog");
        function handleClick(e: MouseEvent) {
            if (filterDialog && !filterDialog.contains(e.target as Node)) {
                filterDialog.removeAttribute("open");
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <div>
            <table className={TABLE.base}>
                <thead className={TABLE.head}>
                    <tr className="align-center">
                        <td></td>
                        <td className={TABLE.sell} colSpan={3}>

                            <input type="text" placeholder="Quick search..." className={SORT_FILTER_BAR.input} onChange={e => setTitleInput(e.target.value)} />

                        </td>
                        <td className={TABLE.sell} >
                            <details className={SORT_FILTER_BAR.wrapper} id="filterDialog">
                                <summary className={SORT_FILTER_BAR.filterToggle}>
                                    <img src="/filter.svg" alt="Filter the clients table" width={TABLE.icoSize.w} height={TABLE.icoSize.h} />
                                </summary>
                                <div className={SORT_FILTER_BAR.filterPanel}>
                                    <h2 className={SORT_FILTER_BAR.filterPanelHeader}>Filter options</h2>
                                    <Link href="" className={`${TABLE.link} text-right`} onClick={clearAll}>Clear all</Link>

                                    <label htmlFor="cities" className={SORT_FILTER_BAR.label}>City:</label>

                                    <select name="city" id="cities" className={SORT_FILTER_BAR.input} value={cityInput} onChange={e => setCityInput(e.target.value)}>
                                        <option value=""></option>
                                        {[...new Set(allClients.map(c => c.city))].map((elem, index) =>
                                            (<option value={elem} key={index}>{elem}</option>)
                                        )}
                                    </select>

                                    <label htmlFor="countries" className={SORT_FILTER_BAR.label}>Country:</label>

                                    <select name="country" id="countries" className={SORT_FILTER_BAR.input} value={countryInput} onChange={e => setCountryInput(e.target.value)}>
                                        <option value=""></option>
                                        {[...new Set(allClients.map(c => c.country))].map((elem, index) =>
                                            (<option value={elem} key={index}>{elem}</option>)
                                        )}
                                    </select>

                                    <label htmlFor="types" className={SORT_FILTER_BAR.label}>Type:</label>

                                    <select name="type" id="types" className={SORT_FILTER_BAR.input} value={typeInput} onChange={e => setTypeInput(e.target.value)}>
                                        <option value=""></option>
                                        {[...new Set(allClients.map(c => c.type))].map((elem, index) =>
                                            (<option value={elem} key={index}>{elem}</option>)
                                        )}
                                    </select>
                                </div>
                            </details>

                        </td>
                        <td></td>
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>

                    <tr className="align-middle">
                        <th className={TABLE.sell}></th>
                        <th className={TABLE.sell}>#</th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("name")}>
                                Title
                                <img src={
                                    sortField !== "name"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>Location</th>
                        <th className={TABLE.sell}>Address</th>
                        <th className={TABLE.sell}>Web</th>
                        <th className={TABLE.sell}>Phone</th>
                        <th className={TABLE.sell}>E-mail</th>
                        <th className={TABLE.sell}>Type</th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("modifiedAt")}>
                                Last contact
                                <img src={
                                    sortField !== "modifiedAt"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("createdAt")}>
                                Added
                                <img src={
                                    sortField !== "createdAt"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("progress")}>
                                <ProgressMark />
                                <img src={
                                    sortField !== "progress"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("success")}>
                                <SuccessMark />
                                <img src={
                                    sortField !== "success"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("failed")}>
                                <FailMark />
                                <img src={
                                    sortField !== "failed"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                        <th className={TABLE.sell}>
                            <button className={SORT_FILTER_BAR.sortWrapper}
                                onClick={() => applySorting("sumValue")}>
                                Sum value
                                <img src={
                                    sortField !== "sumValue"
                                        ? "/sort-none.svg"
                                        : sortMode === "desc"
                                            ? "/sort-desc.svg"
                                            : "/sort-asc.svg"
                                }
                                    width={SORT_FILTER_BAR.icoSize.w}
                                    height={SORT_FILTER_BAR.icoSize.h}
                                    alt="" />
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {sortedClients.map((elem, index) => {
                        return (
                            <tr key={elem.id} className={TABLE.row}>
                                <td className={`${TABLE.sell} ${TABLE.icoIdColumns}`}>
                                    <Link href={`task/${elem.id}`} title="Related tasks">
                                        <img
                                            src="/tasks.svg"
                                            alt=""
                                            width={TABLE.icoSize.w}
                                            height={TABLE.icoSize.h}
                                        />
                                    </Link>
                                </td>

                                <td className={`${TABLE.sell} ${TABLE.icoIdColumns}`}>{index + 1}.</td>
                                <td className={TABLE.sell}>
                                    <Link href={`client/${elem.id}`} className={TABLE.nameColumn}>{elem.name}</Link>
                                </td>
                                <td className={`${TABLE.sell} ${TABLE.geoColumn}`}>{`${elem.city}, ${elem.country}`}</td>
                                <td className={`${TABLE.sell} ${TABLE.geoColumn}`}>{elem.address}</td>

                                <td className={`${TABLE.sell} ${TABLE.emailWebColumn}`}>{elem.email.split(',').map((el: string, idx: number) => (
                                    <div key={idx} className={TABLE.emailItem}>
                                        <Link href={`mailto:${el}`} className={TABLE.link}>{el}</Link><br />
                                    </div>
                                ))}</td>

                                <td className={`${TABLE.sell} ${TABLE.phoneColumn}`}>{elem.phone.split(',').map((el: string, idx: number) => (
                                    <div key={idx} className={TABLE.phoneItem}>
                                        <Link href={`tel:${el}`} className={TABLE.link}>{el}</Link><br />
                                    </div>
                                ))}</td>

                                <td className={`${TABLE.sell} ${TABLE.emailWebColumn}`}>
                                    <Link href={elem.web} className={TABLE.link}>{elem.web}</Link>
                                </td>

                                <td className={TABLE.sell} title={TypeLabel[elem.type]}>
                                    <img
                                        src={TypeImage[elem.type]}
                                        alt={TypeLabel[elem.type]}
                                        width={TABLE.icoSize.w}
                                        height={TABLE.icoSize.h}
                                    />
                                </td>

                                <td className={`${TABLE.sell} ${TABLE.timeColumns}`}>{elem.modifiedAt}</td>
                                <td className={`${TABLE.sell} ${TABLE.timeColumns}`}>{elem.createdAt}</td>

                                <td className={`${TABLE.sell} ${TABLE.historyColumns} ${TABLE.inProgress}`}>{elem.progress}</td>
                                <td className={`${TABLE.sell} ${TABLE.historyColumns}`}>{elem.success}</td>
                                <td className={`${TABLE.sell} ${TABLE.historyColumns}`}>{elem.failed}</td>

                                <td className={TABLE.sell}>
                                    <div className={TABLE.sumValue}>
                                        {
                                            new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "USD",
                                                maximumFractionDigits: 0
                                            }).format(elem.sumValue)
                                        }
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}