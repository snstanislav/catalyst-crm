import axios from "axios";

export async function fetchAllTasks() {
    return (await axios(`http://localhost:3000/api/tasks`)).data.allTasks;
}

export async function fetchRelatedTasks(clientId: string) {
    return (await axios(`http://localhost:3000/api/clients/${clientId}/tasks`)).data.relatedTasks;
}