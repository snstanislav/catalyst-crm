import axios from "axios";

export async function fetchAllClients() {
    return (await axios("http://localhost:3000/api/clients")).data.allClients;
}

export async function fetchClient(id: string) {
    return (await axios(`http://localhost:3000/api/clients/${id}`)).data.client;
}