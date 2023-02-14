import Link from 'next/link';

function ClientsPage() {

    const clients = [
        { id: "madd", name: "Maddy"},
        { id: "keth", name: "kethylene"}
    ];



  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
       {clients.map((client) => (<li key={client.id}>

      <Link href={ // `/clients/${client.id}`  OR
       { 
        pathname: '/clients/[id]',
        query: {id: client.id},
      }}>{client.name}</Link>

       </li>
        ))}
      </ul>
    </div>
  );
}
 
export default ClientsPage;
