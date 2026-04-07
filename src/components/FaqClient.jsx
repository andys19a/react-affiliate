'use client'

import { useState } from 'react'
import AffiliateButton from '@/components/AffiliateButton'

const faqs = [
  {
    question: 'Vad är value betting?',
    answer:
      'Value betting är en strategi inom sportsbetting där du letar efter spel med positiv förväntad avkastning genom att jämföra dina egna sannolikhetsbedömningar med de odds som erbjuds av spelbolagen.',
  },
  {
    question: 'Hur fungerar RebelBetting?',
    answer:
      'RebelBetting är en mjukvara som automatiskt skannar odds från hundratals spelbolag och identifierar valuebettingmöjligheter åt dig. Den hjälper dig att hitta spel med positiv förväntad avkastning snabbt och effektivt.',
  },
  {
    question: 'Är value betting lagligt?',
    answer:
      'Ja, value betting är helt lagligt. Det innebär att du utnyttjar marknadens ineffektivitet genom att placera spel där oddsen är felaktigt satta av spelbolagen. Det är en vanlig strategi bland professionella spelare.',
  },
  {
    question: 'Hur mycket tid krävs det för att arbeta med value betting?',
    answer:
      'Tiden som krävs varierar beroende på hur många spel du vill placera varje dag. Med hjälp av RebelBetting kan du ofta hitta och placera spel på bara 30 minuter till en timme per dag.',
  },
  {
    question: 'Vilka risker finns det med value betting?',
    answer:
      'Som med all form av betting finns det risker involverade. Det är viktigt att ha en tydlig strategi och att hantera sin bankrulle ansvarsfullt. Kortsiktiga förluster kan inträffa, men med disciplin och långsiktighet kan du skapa stabila resultat över tid.',
  },
]

export default function FaqClient() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="faq-page">
      <h1>Vanliga frågor</h1>
      <p className="intro">
        Här hittar du svar på de vanligaste frågorna om value betting och hur
        jag arbetar med det.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h2>{faq.question}</h2>
              <span className="toggle-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}

        <AffiliateButton />
      </div>
    </div>
  )
}
