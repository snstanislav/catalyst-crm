"use client";


export default function AddButtonSection() {

    const BUTTON_BASE = "flex flex-row items-center text-white hover:text-yellow-300 border gap-2 text-sm w-auto pl-2 pr-3 py-1 rounded-md cursor-pointer";
    const ADD_BUTTON = {
        wrapper: "flex flex-row flex-wrap justify-end gap-2",
        icoSize: { w: 15, h: 15 },
        task: `${BUTTON_BASE} bg-[#a23]`,
        opportunity: `${BUTTON_BASE} bg-[#239]`,
        client: `${BUTTON_BASE} bg-[#293]`
    }

    return (
        <div className={ADD_BUTTON.wrapper}>
            <button className={ADD_BUTTON.opportunity}>
                <img
                    className="dark:invert"
                    src="/add.svg"
                    alt="Profile"
                    width={ADD_BUTTON.icoSize.w}
                    height={ADD_BUTTON.icoSize.h}
                />
                Opportunity
            </button>
            <button className={ADD_BUTTON.client}>
                <img
                    className="dark:invert"
                    src="/add.svg"
                    alt="Profile"
                    width={ADD_BUTTON.icoSize.w}
                    height={ADD_BUTTON.icoSize.h}
                />
                Client
            </button>
            <button className={ADD_BUTTON.task}>
                <img
                    className="dark:invert"
                    src="/add.svg"
                    alt="Profile"
                    width={ADD_BUTTON.icoSize.w}
                    height={ADD_BUTTON.icoSize.h}
                />
                Task
            </button>
        </div>
    )
}