export default function FailMark() {
    const INDICATOR = "inline-block w-2.5 h-2.5 mr-1 rounded-full bg-red-500"
    return (<span className={INDICATOR} title="Failed or canceled"></span>)
}