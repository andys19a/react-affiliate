import "../css/Table.css";

const Table = () => {
     const features = [
    {
      name: "Antal spel per dag",
      Trial: "50 om dagem",
      Starter: "Obegränsat",
      Pro: "Obegränsat"
    },
    {
      name: "Value per bet",
      Trial: "1-5%",
      Starter: "1-7%",
      Pro: "Obegränsat"
    },
    {
      name: "Pris (beroende på valuta)",
      Trial: "Gratis",
      Starter: "1300kr/mån",
      Pro: "2300kr/mån"
    }
  ];



return (
  <table className="pricing-table">
    <thead>
      <tr>
        <th>Funktioner</th>
        <th>Vanlig version</th>
        <th>Premium</th>
        <th>Surebetting</th>
      </tr>
    </thead>
    <tbody>
      {features.map((feature, index) => (
        <tr key={index}>
          <td>{feature.name}</td>
          <td>{feature.basic}</td>
          <td>{feature.premium}</td>
          <td>{feature.surebetting}</td>
        </tr>
      ))}
    </tbody>
  </table>
);


};

export default Table;