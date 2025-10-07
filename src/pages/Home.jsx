import AffiliateBanner from "../components/AffiliateBanner";
import Table from "../components/Tabel";
import "../css/Home.css"; // valfritt om du vill styla sektionerna
import HeroImage from "../images/Hero-affiliate.png";

function Home() {
  return (
    <div className="home-page">
      <section className="intro">
        <h1>Välkommen till min sida om Value Betting</h1>
        <img src={HeroImage} alt="Value Betting" className="hero-image" />
        
        <p>
          Value betting är en smartare och mer systematisk metod för sportsbetting
          där du utnyttjar felaktiga odds hos spelbolagen. Med hjälp av verktyg som
          <strong> RebelBetting </strong> kan du analysera tusentals matcher varje dag
          och hitta de spel som har positiv förväntad avkastning – precis som en
          professionell investerare gör på börsen.
        </p>
        <AffiliateBanner />
      </section>

      <section className="experience">
        <h2>Min erfarenhet inom value betting</h2>
        <p>
          Jag har använt RebelBetting i över två år och har sett fantastiska resultat.
          Genom att följa strategin konsekvent och hantera bankrullen på rätt sätt
          har jag kunnat skapa en stabil avkastning varje månad – helt utan gissningar
          eller “feeling”. Det handlar om statistik, sannolikhet och disciplin.
        </p>
        <p>
          På den här sidan delar jag med mig av mina erfarenheter, resultat och tips
          för dig som vill börja tjäna pengar på sportsbetting på ett hållbart sätt.
        </p>
      </section>

      <section className="who">
        <h2>Vem kan använda value betting?</h2>
        <p>
          Value betting passar alla som vill ta betting på allvar – oavsett om du är
          nybörjare eller erfaren spelare. Du behöver inte ha avancerad kunskap om sport
          eller statistik, eftersom mjukvaran gör det mesta av jobbet åt dig.
        </p>
        <p>
          Det enda du behöver är lite tid varje dag för att lägga spelen och en vilja att
          följa strategin. RebelBetting sköter analysen – du placerar bara spelen som
          visas i listan.
        </p>
      </section>

      <section className="methods">
        <h2>Olika sätt att tjäna pengar inom betting</h2>
        <p>
          Det finns flera sätt att tjäna pengar på betting, men value betting har visat
          sig vara det mest konsekvent lönsamma över tid. Till skillnad från arbitrage
          eller trading kräver det inte flera konton eller simultana spel. 
        </p>
        <ul>
          <li>
            <strong>Value Betting:</strong> hitta felaktiga odds och spela där oddset är
            högre än den verkliga sannolikheten.
          </li>
          <li>
            <strong>Sure Betting (Arbitrage):</strong> säkra vinster genom att spela på
            alla utfall hos olika bolag.
          </li>
          <li>
            <strong>Matched Betting:</strong> utnyttja bonusar och free bets för garanterad
            vinst.
          </li>
        </ul>
        <p>
          Med <strong>RebelBetting Premium</strong> får du tillgång till alla dessa metoder
          och ett smidigt gränssnitt som gör det enkelt att följa resultat, vinster och ROI.
        </p>
      </section>

      <section className="comparison">
        <h2>Jämförelse mellan versioner</h2>
        <p>
          Här kan du se skillnaden mellan den vanliga versionen, Premium och Surebetting.
          Premium ger dig fler spelmöjligheter, snabbare uppdateringar och tillgång till
          fler marknader.
        </p>
        <Table />
      </section>

      <section className="cta">
        <h2>Börja med value betting idag</h2>
        <p>
          Testa <strong>RebelBetting</strong> gratis och upptäck hur du kan bygga en
          stabil inkomst från betting – utan tur, bara matematik.
        </p>
        <AffiliateBanner />
      </section>
    </div>
  );
}

export default Home;
