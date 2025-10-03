import "../css/Table.css";

const Table = () => {
     const features = [
    {
      name: "Antal spel per dag",
      basic: "10–20",
      premium: "50+",
      surebetting: "100+"
    },
    {
      name: "Support",
      basic: "Endast mail",
      premium: "Mail + chatt",
      surebetting: "Prioriterad support"
    },
    {
      name: "Pris",
      basic: "Gratis",
      premium: "$49/mån",
      surebetting: "$129/mån"
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