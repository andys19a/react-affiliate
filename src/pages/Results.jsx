import { useEffect, useRef, useState } from "react";
import AffiliateBanner from "../components/AffiliateBanner";
import resultatImg from "../images/resultat.png";
import AffiliateButton from "../components/AffiliateButton.jsx";
import "../css/Results.css";

function Results() {
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);
  const imageRef = useRef(null);

  // === Fade-in när bilden kommer i vy ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  // === Uppräknande siffror ===
  const [roi, setRoi] = useState(0);
  useEffect(() => {
    if (visible && !animated) {
      setAnimated(true);
      let start = 0;
      const target = 190000;
      const duration = 1500;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setRoi(Math.floor(start));
      }, stepTime);
    }
  }, [visible, animated]);

  return (
    <div className="results-page">
      <section className="intro">
        <h1>Mina resultat</h1>
        <p>
          Här kan du se mina faktiska resultat från <strong>value betting</strong> under
          de senaste åren. Jag har använt <strong>RebelBetting</strong> i över två år
          och har konsekvent genererat vinster varje månad tack vare en långsiktig strategi
          och tydlig bankrollhantering.
        </p>
      </section>

      <section
        className={`results-image ${visible ? "visible" : ""}`}
        ref={imageRef}
      >
        <img src={resultatImg} alt="Resultatgraf" />
        <p className="caption">
          Exempel på mina resultat – stabil och ökande avkastning med hjälp av RebelBetting.
        </p>
      </section>

      <section className="summary">
        <h2>Sammanfattning av resultaten</h2>
        <ul>
          <li>
            <strong>+{roi}kr</strong> sedan start
          </li>
          <li><strong>25–35%</strong> genomsnittlig månadsavkastning</li>
          <li><strong>Över 10 000 spel</strong> placerade med hjälp av RebelBetting</li>
          <li><strong>95 %+</strong> av spelen värdepositiva (EV+)</li>
        </ul>
        <p>
          Det viktigaste inom value betting är att vara konsekvent och inte låta kortsiktiga
          resultat påverka strategin. Långsiktigt slår matematik alltid känsla.
        </p>
      </section>

      <section className="cta">
        <h2>Vill du uppnå liknande resultat?</h2>
        <p>
          Prova <strong>RebelBetting</strong> gratis och upptäck hur du också kan bygga
          en stabil inkomst med smart betting – utan tur, bara statistik.
        </p>
        <AffiliateBanner />
      </section>
    </div>
  );
}

export default Results;

