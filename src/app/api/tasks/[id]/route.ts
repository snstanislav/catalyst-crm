const allTasks: Task[] = [
    {
        id: "2354",
        title: "Reclamation for AbCS",
        description: "To interrogate about reklamation with Bill",
        type: "meeting",
        clientId: "123", // AbCS Inc.
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
        clientId: "123", // AbCS Inc.
        dueDate: "31-01-2026 23:00",
        priority: "high",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "57854",
        title: "To send proposals",
        type: "email",
        clientId: "234", // Ababahalamaha publ.
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
        clientId: "345", // aberero GmbH
        dueDate: "28-12-2025 12:00",
        priority: "high",
        description: "To call Andrea after acceptation",
        assignedTo: "",
        status: "progress"
    },
    {
        id: "9810",
        title: "E-mail for Andrea (aberero)",
        type: "call", // Note: title says e-mail but type is call
        clientId: "345", // aberero GmbH
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
        clientId: "456", // AbCSDD msdfsdfsdfqwererwer Inc.
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
        clientId: "456", // AbCSDD msdfsdfsdfqwererwer Inc.
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
        clientId: "567", // DDDccc Inc.
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
        clientId: "567", // DDDccc Inc.
        dueDate: "31-12-2025 23:00",
        priority: "low",
        description: "Make somethig else for someone being somewhere",
        assignedTo: "",
        status: "failed"
    }
];

import type Task from "@lib/types/Task"

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const result = allTasks.find((task: Task) => task.id === id);

    return Response.json({
        success: result ? true : false,
        task: result
    })
}