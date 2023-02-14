import { useRouter } from "next/router";

function ClienstProjectPage() {

   const router= useRouter();

   console.log(router.query); 

   function loadProjectHandler()
   {
    //load data....
    router.push('/clients/madd/projecta');

   }


  return (
    <div>
    <h1>The Projects of a Given Client</h1>
    <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClienstProjectPage;