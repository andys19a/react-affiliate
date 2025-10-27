import AffiliateBanner from "../components/AffiliateBanner";
import AffiliateButton from "../components/AffiliateButton";
import Table from "../components/Tabel";
import "../css/Home.css"; 
import HeroImage from "../images/Hero-affiliate.png";

function Home() {
  return (
    <>
      {/* === SEO-meta för startsidan === */}
      <title>ProfitPlay – Tjäna pengar på Value Betting & RebelBetting</title>
      <meta
        name="description"
        content="Lär dig hur du kan tjäna pengar på sportsbetting med value betting. ProfitPlay visar hur RebelBetting fungerar och hur du kan bygga stabil avkastning varje månad."
      />
      <meta
        name="keywords"
        content="value betting, RebelBetting, tjäna pengar på betting, slå spelbolagen, sportsbetting strategi, sure betting, arbitrage betting"
      />

      {/* 🔹 Open Graph (för delning på sociala medier) */}
      <meta property="og:title" content="ProfitPlay – Tjäna pengar på Value Betting" />
      <meta
        property="og:description"
        content="ProfitPlay lär dig hur value betting fungerar och hur du kan slå spelbolagen med matematik. Utforska guider, recensioner och verktyg som RebelBetting."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/images/Hero-affiliate.png" />
      <meta property="og:url" content="https://profitplay.se/" />

      {/* === Innehåll === */}
      <div className="home-page">
        <section className="intro">
          <h1>Bli lönsam inom sportbetting!</h1>
          <img src={HeroImage} alt="Value Betting" className="hero-image" />
          <p>
            Det finns ett par sätt att tjäna pengar på inom sportsbetting, att sitta 5 minuter innan premier league start och lägga att favoriten vinner är inte ett av dem. 
            För att tjäna pengar på sikt måste du kontinuerligt hitta sätt att få ett övertag mot spelbolagen. Det är inget konstigt eller svårt, det gäller att förstå sannolikheten och hur värde påverkar.
            Är du som 99,9% av alla människor och inte kan räkna ut sannolikheten på egen hand och slå spelbolagen själv? Inga problem, det finns verktyg som gör det åt dig. Där har jag använt Rebelbetting som erbjuder både value betting och sure betting.
            Jag har använt value betting framförallt och gjort en stabil avkastning varje månad i över 2 år.
          </p>
          <p>
            Value betting är en smartare och mer systematisk metod för sportsbetting
            där du utnyttjar felaktiga odds hos spelbolagen. Med hjälp av verktyg som
            <strong> RebelBetting </strong> kan du analysera tusentals matcher varje dag
            och hitta de spel som har positiv förväntad avkastning – det enda man behöver göra är att place spelen som visas i listan hos rebelbetting, super enkelt!
          </p>
        </section>

        <section className="experience">
          <h2>Min erfarenhet inom value betting</h2>
          <p>
            Jag har använt RebelBetting i över två år och har sett fantastiska resultat.
            Genom att följa strategin konsekvent och hantera bankrullen på rätt sätt
            har jag kunnat skapa en stabil avkastning varje månad – helt utan gissningar
            eller “feeling”. Det handlar om statistik, sannolikhet och disciplin. Det enda jag gjort är att följa spelen som visas i listan och lägga dem hos spelbolagen. Samt tagit hjälp av kundsupport när det känns tyngre och fått rekomendationer på vad man kan testa.
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
          <h2>Hur man tjänar pengar från betting</h2>
          <p>
            Det finns flera sätt att tjäna pengar på betting, men value betting har visat
            sig vara det mest konsekvent lönsamma över tid. Eftersom vad man gör är att utnyttja när spelbolagen sätter fel odds så det handlar mer om matematik än tur eller att du behöver specilisera dig inom ett lag för att få en edge. Det hade krävts otroligt mycket tid och kapitla för att lyckas med en sån strategi.
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
          </ul>
          <p>
            Med <strong>RebelBetting Premium</strong> får du tillgång till alla dessa metoder
            och ett smidigt gränssnitt som gör det enkelt att följa resultat, vinster och ROI. Samt obegränsat med spel, alla spel som finns tillgängliga kommer visas för dig.
          </p>

          <AffiliateBanner />
        </section>

        <section className="comparison">
          <h2>Jämförelse mellan versioner</h2>
          <p>
            Här kan du se skillnaden mellan den vanliga versionen, Premium och Surebetting.
            Premium ger dig fler spelmöjligheter, snabbare uppdateringar och tillgång till
            fler marknader. personligen tycker jag att premium är det bästa valet för de flesta som är bekant med verktyget och förstått konceptet.
          </p>
          <Table />
        </section>

        <section className="cta">
          <h2>Börja med value betting idag</h2>
          <p>
            Testa <strong>RebelBetting</strong> gratis och upptäck hur du kan bygga en
            stabil inkomst från betting – utan tur, bara matematik.
          </p>
          <AffiliateButton />
        </section>
      </div>
    </>
  );
}

export default Home;
