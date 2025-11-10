import { Link } from "react-router-dom";
import AffiliateBanner from "../components/AffiliateBanner";
import AffiliateButton from "../components/AffiliateButton";
import Table from "../components/Tabel";
import "../css/Home.css";
import HeroImage from "../images/Hero-affiliate.png";

function Homes() {
  return (
    <div className="home-page">
      <section className="intro">
        <h1>Value Betting – så blir du lönsam på riktigt</h1>
        <p className="subhead">
          Lär dig en metod som bygger på <strong>matematik, sannolikhet och disciplin</strong> – inte tur.
          Vi visar hur du använder RebelBetting och smart <em>bankroll management</em> för att växa hållbart.
        </p>

        <img
          src={HeroImage}
          alt="Value betting – graf och mynt som symboliserar stabil avkastning"
          className="hero-image"
          loading="eager"
          width="1280"
          height="720"
        />

        {/* Snabba vägar till nyckelsidor */}
        <nav className="quick-links" aria-label="Snabblänkar">
          <Link to="/recension" className="chip">Recension av RebelBetting</Link>
          <Link to="/results" className="chip">Mina resultat</Link>
          <Link to="/start" className="chip">Kom igång</Link>
          <Link to="/blog" className="chip">Guider & artiklar</Link>
        </nav>

        <ul className="usp-list">
          <li>🔍 Hitta <strong>felsatta odds</strong> med verktyg som RebelBetting</li>
          <li>📈 Spela på <strong>positivt värde (EV+)</strong> – vinn på sikt</li>
          <li>🛡️ Skydda kassan med <Link to="/blog/5">bankroll management</Link></li>
          <li>🧠 Undvik misstag – lär dig <Link to="/blog/7">psykologin bakom betting</Link></li>
        </ul>
      </section>

      <section className="experience">
        <h2>Min erfarenhet inom value betting</h2>
        <p>
          Jag har använt <strong>RebelBetting</strong> i över två år med stabil, månatlig avkastning.
          Metoden bygger på att konsekvent spela värde och låta sannolikheten göra jobbet.
          Läs mer i min <Link to="/recension">recension</Link> och se <Link to="/results">resultaten</Link>.
        </p>
      </section>

      <section className="who">
        <h2>Vem passar value betting för?</h2>
        <p>
          För dig som vill ta betting seriöst. Du behöver inte kunna avancerad statistik –
          mjukvaran gör analysen. Du fokuserar på att <em>följa strategin</em> och lägga spelen.
        </p>
        <p>
          Är du ny? Börja här: <Link to="/start">Kom igång med value betting</Link>.
        </p>
      </section>

      <section className="methods">
        <h2>Metoder som fungerar</h2>
        <p>
          Det finns flera sätt att tjäna pengar på betting, men value betting är mest hållbart.
          Du utnyttjar felprissatta odds istället för att gissa resultat. Sure betting (arbitrage)
          kan också fungera som komplement.
        </p>
        <ul>
          <li>
            <strong>Value Betting:</strong> spela när <em>verklig sannolikhet</em> &gt; <em>implicit odds</em>.
          </li>
          <li>
            <strong>Sure Betting (Arbitrage):</strong> säkra små vinster genom att täcka alla utfall.
            Läs jämförelsen: <Link to="/blog/8">Value betting vs Sure betting</Link>.
          </li>
        </ul>
        <p>
          Med <strong>RebelBetting Premium</strong> får du realtidsvärden, insatsrekommendationer och
          smidig statistik. Se vår <Link to="/recension">recension</Link> innan du väljer plan.
        </p>

        <AffiliateBanner />
      </section>

      <section className="comparison">
        <h2>Jämförelse mellan versioner</h2>
        <p>
          Här ser du skillnaden mellan standard, Premium och Surebetting. Premium passar oftast flest:
          fler spel, snabbare uppdateringar och bredare marknader.
        </p>
        <Table />
      </section>

      {/* FAQ – synligt innehåll (JSON-LD lägger vi i index.html om du vill ha rich results) */}
      <section className="faq-home">
        <h2>Vanliga frågor om value betting</h2>
        <details>
          <summary>Är value betting lagligt?</summary>
          <p>Ja, value betting är en laglig metod. Du spelar på vanliga spelbolag men med en
            statistisk strategi. Följ alltid lokala regler och ansvarsfullt spelande.</p>
        </details>
        <details>
          <summary>Hur stor bankrulle behöver jag?</summary>
          <p>Det beror på mål och risknivå. Läs vår guide om <Link to="/blog/5">bankroll management</Link> för att hitta rätt nivå.</p>
        </details>
        <details>
          <summary>Kan jag börja som helt ny?</summary>
          <p>Absolut. Börja med <Link to="/start">kom igång-guiden</Link> och läs vår
            <Link to="/recension"> recension av RebelBetting</Link> för att förstå flödet.</p>
        </details>
      </section>

      <section className="cta">
        <h2>Börja med value betting idag</h2>
        <p>
          Testa <strong>RebelBetting</strong> gratis och upptäck hur du kan bygga en
          stabil avkastning – utan tur, bara sannolikhet.
        </p>
        <AffiliateButton />
      </section>
    </div>
  );
}

export default Homes;
