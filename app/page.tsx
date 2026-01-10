
import Link from "next/link";
import TaskListItem from "@components/task/TaskListItem";
import ClientListItem from "@components/client/ClientListItem";
import ContactItem from "@components/ContactItem";
import type Task from "@lib/types/Task";
import type Client from "@lib/types/Client";
import { fetchAllTasks } from "@lib/tasks";
import { fetchAllClients } from "@lib/clients";

export default async function Home() {

  const urgentTasks: Task[] = await fetchAllTasks() /// REPLACE THE FILLER LATER
  const importantClients: Client[] = await fetchAllClients() /// REPLACE THE FILLER LATER
  const frequentContacts = [
    {
      id: "12",
      name: "Chev Chelios",
      clientId: "123", // AbCS Inc.
      phone: "+42 9564551",
      email: "chev.c@dom.com, chev.c2@outlook.com"
    },
    {
      id: "23",
      name: "Max Musterman",
      clientId: "345", // aberero GmbH
      phone: "+49 0526161, +49 5956131",
      email: "max.mm@site.de"
    },
    {
      id: "45",
      name: "Akiko Wada",
      clientId: "567", // DDDccc Inc.
      phone: "+10 51648634",
      email: "akwd@ddd.com"
    },
    {
      id: "56",
      name: "John Doe",
      clientId: "567", // DDDccc Inc.
      phone: "+10 546434",
      email: "jdoe@ddd.com"
    },
    {
      id: "789",
      name: "Gryhoriy Kovalenko",
      clientId: "234", // Ababahalamaha publ.
      phone: "+38 099-024-53, +38 093-345-46, +38 067-899-45",
      email: "gr.kovalenko@ukr.net"
    }
  ]; /// REPLACE THE FILLER LATER

  const WRAPPER = "grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1fr_0.9fr_0.8fr] justify-stretch gap-3 p-3 h-full bg-slate-300";
  const SECTION = {
    base: "flex flex-col page-content-card p-2",
    header: "flex justify-between px-2 pt-1 pb-3 items-start font-semibold",
    seeAll: "link-primary min-w-12 text-right text-xs font-normal",
    list: "flex flex-col flex-wrap gap-3 xl:mx-2 list-none",
  }

  return (
    <div className={WRAPPER}>
      <section className={SECTION.base}>
        <div className={SECTION.header}>
          <h2>Opened Tasks</h2>
          <Link href="/task" className={SECTION.seeAll}>See all</Link>
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
          <Link href="/client" className={SECTION.seeAll}>See all</Link>
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
        </div>

        <ol className={SECTION.list}>
          {frequentContacts.map((elem, index) => (
            <li key={index}>
              <ContactItem contactItem={elem} showFirm={true} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
