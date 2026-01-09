import axios from "axios";

export async function fetchRelatedContacts(clientId: string) {
    return (await axios(`http://localhost:3000/api/clients/${clientId}/contacts`)).data.contacts;
}