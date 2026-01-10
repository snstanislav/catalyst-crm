import MenuToggle from "./MenuToggle";
import CurrentIssues from "./CurrentIssues";
import AddButtonSection from "./AddButtonSection";

export default function Header() {

    const HEADER = "flex flex-row justify-between items-center gap-2 px-4 py-3 font-mono border-b-1 border-gray-300 w-full h-fit bg-white";

    return (
        <div className={HEADER}>
            <MenuToggle />
            <CurrentIssues />
            <AddButtonSection />
        </div >
    )
}