const relatedTasks: Task[] = [
    {
        id: "2354",
        title: "Reclamation for AbCS",
        description: "To interrogate about reklamation with Bill",
        type: "meeting",
        client: "AbCS Inc.",
        dueDate: "31-12-2025 23:00",
        priority: "high",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "23555",
        title: "New proposals for AbCS",
        description: "Send important e-mail for the Chef of AbCS",
        type: "email",
        client: "AbCS Inc.",
        dueDate: "31-01-2026 23:00",
        priority: "high",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "57854",
        title: "To send proposals",
        type: "email",
        client: "Ababahalamaha publ.",
        dueDate: "29-12-2025 13:00",
        priority: "high",
        description: "To send emails with proposals",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "9809",
        title: "The call to Andrea (aberero)",
        type: "call",
        client: "aberero GmbH",
        dueDate: "28-12-2025 12:00",
        priority: "high",
        description: "To call Andrea after acceptation",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "9810",
        title: "E-mail for Andrea (aberero)",
        type: "call",
        client: "aberero GmbH",
        dueDate: "28-02-2026 12:00",
        priority: "medium",
        description: "To send some e-mail to Andrea in February",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "659615",
        title: "Making something else",
        type: "todo",
        client: "AbCSDD msdfsdfsdfqwererwer Inc.",
        dueDate: "31-12-2025 23:00",
        priority: "medium",
        description: "Make somethig else for someone",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "659616",
        title: "Making something again",
        type: "todo",
        client: "AbCSDD msdfsdfsdfqwererwer Inc.",
        dueDate: "11-02-2026 23:00",
        priority: "medium",
        description: "Make somethig important for someone one more time",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "03232",
        title: "Something",
        type: "message",
        client: "DDDccc Inc.",
        dueDate: "31-12-2025 23:00",
        priority: "low",
        description: "Make somethig else for someone being somewhere",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "03233",
        title: "Something",
        type: "unknown",
        client: "DDDccc Inc.",
        dueDate: "31-12-2025 23:00",
        priority: "low",
        description: "Make somethig else for someone being somewhere",
        assignedTo: "",
        status: "failed"
    }
]
import type Task from "@lib/types/Task"

export function GET() {
    return Response.json({ 
        success: true, 
        relatedTasks
     })
}