const relatedContacts = [
    {
        id: "12",
        name: "Chev Chelios",
        company: "AbCS Inc.",
        phone: "+42 9564551",
        email: "chev.c@dom.com",
        clientId: "123"
    },
    {
        id: "23",
        name: "Max Musterman",
        company: "aberero GmbH",
        phone: "+49 0526161, +49 5956131",
        email: "max.mm@site.de",
        clientId: "345"
    },
    {
        id: "45",
        name: "Akiko Wada",
        company: "DDDccc Inc.",
        phone: "+10 51648634",
        email: "akwd@ddd.com",
        clientId: "567"
    },
    {
        id: "33511",
        name: "Meiko Nakahara",
        company: "DDDccc Inc.",
        phone: "+10 231 534",
        email: "mei.nakahara@ddd.com",
        clientId: "567"
    },
    {
        id: "56",
        name: "John Doe",
        company: "DDDccc Inc.",
        phone: "+10 546 434, +10 777 434",
        email: "jdoe@ddd.com",
        clientId: "567"
    },
    {
        id: "789",
        name: "Gryhoriy Kovalenko",
        company: "Ababahalamaha publ.",
        phone: "+38 099-024-53, +38 093-345-46, +38 067-899-45",
        email: "gr.kovalenko@ukr.net",
        clientId: "234"
    },
    {
        id: "99899",
        name: "Maria Sakhno",
        company: "Ababahalamaha publ.",
        phone: "+38 073-444-33, +38 093-369-00",
        email: "m.sakhno@ukr.net",
        clientId: "234"
    }
]

export async function GET(_req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
    const result = relatedContacts.filter((contact: any) => contact.clientId === id);

    return Response.json({
        success: result ? true : false,
        contacts: result
    })
}