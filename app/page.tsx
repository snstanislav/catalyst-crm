import Link from "next/link";
import { UrgentTask } from "./lib/types/UrgentTask";
import TaskListItem from "./components/task/TaskListItem";
import ClientListItem from "./components/task/ClientListItem";
import FrequentContactsItem from "./components/task/FrequentContactsItem";

export default function Home() {

  const urgentTasks: UrgentTask[] = [
    {
      id: "2354",
      title: "To interrogate about reklamation with Bill",
      type: "meeting",
      client: "AbCS Inc.",
      dueDate: "31-12-2025 23:00",
      priority: "high"
    },
    {
      id: "57854",
      title: "To send emails with proposals",
      type: "email",
      client: "Ababahalamaha publ.",
      dueDate: "29-12-2025 13:00",
      priority: "high"
    },
    {
      id: "9809",
      title: "To call Andrea after acceptation",
      type: "call",
      client: "aberero GmbH",
      dueDate: "28-12-2025 12:00",
      priority: "high"
    },
    {
      id: "659615",
      title: "Make somethig else",
      type: "todo",
      client: "AbCSDD msdfsdfsdfqwererwer Inc.",
      dueDate: "31-12-2025 23:00",
      priority: "medium"
    },
    {
      id: "03232",
      title: "Make somethig else for someone being somewhere",
      type: "message",
      client: "DDDccc Inc.",
      dueDate: "31-12-2025 23:00",
      priority: "low"
    }
    ,
    {
      id: "03232",
      title: "Make somethig else for someone being somewhere",
      type: "unknown",
      client: "DDDccc Inc.",
      dueDate: "31-12-2025 23:00",
      priority: "low"
    }
  ]

  const importantClients = [
    {
      id: "123",
      name: "AbCS Inc.",
      country: "Australia",
      city: "Derby",
      success: 123,
      progress: 15,
      failed: 7
    },
    {
      id: "234",
      name: "Ababahalamaha publ.",
      country: "Ukraine",
      city: "Lutsk",
      success: 115,
      progress: 10,
      failed: 1
    },
    {
      id: "345",
      name: "aberero GmbH",
      country: "Germany",
      city: "Verl",
      success: 111,
      progress: 10,
      failed: 0
    },
    {
      id: "456",
      name: "AbCSDD msdfsdfsdfqwererwer Inc.",
      country: "Botswana",
      city: "Mbapwa",
      success: 99,
      progress: 8,
      failed: 5
    },
    {
      id: "567",
      name: "DDDccc Inc.",
      country: "USA",
      city: "Boston",
      success: 86,
      progress: 7,
      failed: 0
    },
    {
      id: "789",
      name: "ABAqwe",
      country: "Luxembourg",
      city: "Luxembourg",
      success: 79,
      progress: 0,
      failed: 1
    },
    {
      id: "8910",
      name: "Asdfg",
      country: "Ukraine",
      city: "Sumy",
      success: 50,
      progress: 7,
      failed: 0
    },
    {
      id: "9911",
      name: "OOUO",
      country: "Austria",
      city: "Salzburg",
      success: 40,
      progress: 3,
      failed: 0
    },
    {
      id: "1256",
      name: "Bases-J",
      country: "France",
      city: "Marsel",
      success: 23,
      progress: 7,
      failed: 1
    },
    {
      id: "2345",
      name: "TTT",
      country: "USA",
      city: "Cincinatty",
      success: 15,
      progress: 5,
      failed: 0
    },

  ]

  const frequentContacts = [
    {
      id: "12",
      name: "Chev Chelios",
      company: "AbCS Inc.",
      phone: "+42 9564551",
      email: "chev.c@dom.com"
    },
    {
      id: "23",
      name: "Max Musterman",
      company: "aberero GmbH",
      phone: "+49 0526161, +49 5956131",
      email: "max.mm@site.de"
    },
    {
      id: "45",
      name: "Akiko Wada",
      company: "DDDccc Inc.",
      phone: "+10 51648634",
      email: "akwd@ddd.com"
    },
    {
      id: "56",
      name: "John Doe",
      company: "DDDccc Inc.",
      phone: "+10 546434",
      email: "jdoe@ddd.com"
    },
    {
      id: "789",
      name: "Gryhoriy Kovalenko",
      company: "Ababahalamaha publ.",
      phone: "+38 099-024-53, +38 093-345-46, +38 067-899-45",
      email: "gr.kovalenko@ukr.net"
    }
  ]


  const WRAPPER = "grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] justify-stretch gap-3 p-3 h-full bg-slate-300";
  const SECTION = {
    base: "flex flex-col p-2 bg-white h-full font-mono rounded-lg shadow-lg/30",
    header: "flex justify-between p-2 pt-1 pb-3 items-start font-semibold",
    seeAll: "link-primary text-xs font-normal",
    list: "flex flex-col flex-wrap gap-3 list-none",
  }

  return (
    <div className={WRAPPER}>
      <section className={SECTION.base}>
        <div className={SECTION.header}>
          <h2>Opened Tasks</h2>
          <Link href="" className={SECTION.seeAll}>See all</Link>
        </div>

        <ol className={SECTION.list}>
          {urgentTasks.map((elem, index) => (
            <li key={index}>
              <TaskListItem taskItem={elem} index={index} />
            </li>
          ))}
        </ol>
      </section>
      <section className={SECTION.base}>
        <div className={SECTION.header}>
          <h2>Important Clients</h2>
          <Link href="" className={SECTION.seeAll}>See all</Link>
        </div>

        <ol className={SECTION.list}>
          {[...importantClients.sort((a, b) => b.progress - a.progress)].map((elem, index) => (
            <li key={index}>
              <ClientListItem clientItem={elem} />
            </li>
          ))}
        </ol>

      </section>
      <section className={SECTION.base}>
        <div className={SECTION.header}>
          <h2>Recent Contacts</h2>
          <Link href="" className={SECTION.seeAll}>See all</Link>
        </div>

        <ol className={SECTION.list}>
          {frequentContacts.map((elem, index) => (
            <li key={index}>
              <FrequentContactsItem contactItem={elem} />
            </li>
          ))}
        </ol>

      </section>
    </div>
  );
}
