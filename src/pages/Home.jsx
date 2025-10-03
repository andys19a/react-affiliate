import AffiliateBanner from "../images/logo";
import Table from "../components/Tabel";

function Home() {
  return (
    <div>
      <h1>Välkommen till min affiliate-sida</h1>
      <p>Lär dig om valuebetting</p>
      <AffiliateBanner />

      <h2>Min erfarenhet inom valuebetting</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam voluptates, veritatis similique quia nisi reiciendis incidunt distinctio dolor tempora beatae? Expedita tempore veritatis iste at similique cumque animi natus!</p>



      <h2>Olika sätt att tjäna pengar inom betting</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ad exercitationem beatae corporis quas reprehenderit. Voluptate expedita omnis alias fugiat aut sapiente exercitationem voluptatibus accusamus ullam, et eaque ratione iste.</p>
      <Table />
    </div>
  );
}

export default Home;
