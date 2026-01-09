export default interface Task {
    id: string;
    title: string;
    description: string;
    type: string;
    dueDate: string;
    assignedTo: string;
    status: string;
    priority: string;
    client: string;
}