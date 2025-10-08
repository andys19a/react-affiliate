import "../css/Table.css";

const Table = () => {
  const features = [
    {
      name: "Antal spel per dag",
      Trial: "50 om dagen",
      Starter: "Obegränsat",
      Pro: "Obegränsat"
    },
    {
      name: "Value per bet",
      Trial: "1–5%",
      Starter: "1–7%",
      Pro: "Obegränsat"
    },
    {
      name: "Pris (beroende på valuta)",
      Trial: "Gratis",
      Starter: "1300 kr/mån",
      Pro: "2300 kr/mån"
    }
  ];

  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th>Funktioner</th>
          <th>Trial</th>
          <th>Starter</th>
          <th>Pro</th>
        </tr>
      </thead>
      <tbody>
        {features.map((feature, index) => (
          <tr key={index}>
            <td>{feature.name}</td>
            <td>{feature.Trial}</td>
            <td>{feature.Starter}</td>
            <td>{feature.Pro}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
