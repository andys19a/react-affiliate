import "../css/Table.css";

const Table = () => {
     const features = [
    {
      name: "Antal spel per dag",
      basic: "Obegränsat",
      premium: "Obegränsat",
      surebetting: "Obegränsat"
    },
    {
      name: "Value per bet",
      basic: "1-4%",
      premium: "obegränsat",
      surebetting: "Obegränsat"
    },
    {
      name: "Pris",
      basic: "999kr/mån",
      premium: "2500kr/mån",
      surebetting: "2500kr/mån"
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