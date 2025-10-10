import "../css/Erfarenhet.css";
import RecensionBild from "../images/Recension-bild.png";
import AffiliateButton from "../components/AffiliateButton";

function Erfarenhet() {
  return (
    <div className="Recension">
      <h1>Recension av Value Betting</h1>
              <img src={RecensionBild} alt="Value Betting" className="hero-image" />

      <p>
        Jag har använt value betting i över två år och har konsekvent genererat
        vinster varje månad tack vare en långsiktig strategi och tydlig
        bankrollhantering. Jag har inte ångrat att jag satt in mig i valuebetting världen en enda gång, det har lett till att jag har kunnat köpa min första lägenhet. Sen är nackdelen att det kostar en del att ha igång verktyget samt att man behöver en kassa för att kunna göra vinst som överträffar prenumations kostnaden.


         Här är en sammanfattning av mina erfarenheter:
      </p>

      <ul>
        <li>
          <strong>💰 Stabil avkastning:</strong> Genom att följa en strikt
          strategi har jag uppnått en genomsnittlig månatlig avkastning på cirka
          30%. Detta har resulterat i en total avkastning på över 180 000 kr under
          de senaste två åren.
        </li>
        <li>
          <strong>🎯 Disciplin och tålamod:</strong> Value betting kräver
          disciplin för att följa strategin och tålamod för att se långsiktiga
          resultat. Jag har lärt mig att inte jaga snabba vinster utan istället
          fokusera på konsekventa resultat över tid. Det kommer att komma även om det inte känns så när det svänger!
        </li>
        <li>
          <strong>📊 Bankrollhantering:</strong> En av de viktigaste aspekterna
          av value betting är att hantera sin bankrulle på ett ansvarsfullt
          sätt. Jag har alltid satt upp tydliga gränser för hur mycket jag är
          villig att riskera och har aldrig satsat mer än jag har råd att
          förlora. Var lite överaskande att jag inte funderade mer på det än jag gjorde, varit enstaka veckor under 2 års tid där jag faktiskt kännt lite stress.
        </li>
        <li>
          <strong>📚 Utbildning och forskning:</strong> För att bli framgångsrik
          inom value betting så läs på kring det mest basic och följ rekommendationer från tex rebelbetting. Du kommer gå plus på det sen kan du optimera när du känner du varm i kläderna.
          Jag började tex filtrera bort vissa marknader eftersom jag inte slog marknaden med den marginalen jag önskade.
        </li>
        <li>
          <strong>🧠 Användning av verktyg:</strong> Jag har använt olika verktyg
          och mjukvaror för att hjälpa mig identifiera värdebettingmöjligheter.
          Dock har det varit rebelbetting jag använt för att göra majoriteten av mina bets. Varit super smidigt att använda, noll bluff och jätte duktig support om det behövs. Använd dels för tekniska frågor men även bara att bolla ideér med.
 
        </li>
      </ul>

      <div className="summary-box">
        <p>
          Sammanfattningsvis har min erfarenhet av value betting varit mycket
          positiv. Genom att följa en strikt strategi, hantera min bankrulle
          ansvarsfullt och kontinuerligt lägga bets har jag kunnat uppnå stabila
          och konsekventa vinster över tid. Det absolut viktigate är att fortsätta placeta bets oavsett hur det går, det är det som kommer ge resultat i längden.
        </p>
        <p className="recommend">
          ⭐ Jag rekommenderar starkt value betting till alla som är intresserade
          av sportsbetting och är villiga att lägga ner tid och ansträngning för
          att bli framgångsrika.
        </p>
        <AffiliateButton />
      </div>
    </div>
  );
}

export default Erfarenhet;

