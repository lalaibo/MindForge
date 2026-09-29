import React, { useEffect } from 'react';
import Reveal from 'reveal.js';

import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export default function Presentation() {
  useEffect(() => {
    const deck = new Reveal({
      hash: true,
      controls: true,
      progress: true,
      center: true,
      transition: 'slide'
    });

    deck.initialize();

    return () => {
      try {
        deck.destroy();
      } catch (e) {
        // Ignorieren falls bereits abgebaut
      }
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {/* Slide 1 */}
        <section>
          <h1>Mindforge</h1>
          <p className="subtitle">Lernen mit Karteikarten &ndash; schneller erstellt, motivierender gelernt</p>
        </section>

        {/* Slide 2 */}
        <section>
          <h2>Worum geht&rsquo;s?</h2>
          <p>Schüler lernen ständig auf Prüfungen &ndash; und bauen sich dafür immer wieder Zusammenfassungen und Karteikarten.</p>
          <p>Learn Quest nimmt ihnen diese Arbeit ab und macht das Wiederholen spielerischer.</p>
        </section>

        {/* Slide 3 */}
        <section>
          <h2>Was gibt es heute?</h2>
          <ul>
            <li><strong>Anki</strong>: kostenlos und frei anpassbar, aber die Bedienung ist gewöhnungsbedürftig und Spielelemente fehlen</li>
            <li><strong>Quizlet</strong>: einfach zu bedienen, aber KI-Import und Offline-Nutzung kosten extra</li>
          </ul>
        </section>

        {/* Slide 4 */}
        <section>
          <h2>Die Lücke</h2>
          <ul>
            <li>Karten von Hand tippen frisst Zeit</li>
            <li>Aus einem PDF oder Skript entstehen nicht automatisch Karten</li>
            <li>Fertige Sets lassen sich nicht einfach mit dem Jahrgang teilen</li>
            <li>Motivation bleibt bei Streak-Zählern stehen</li>
          </ul>
        </section>

        {/* Slide 5 */}
        <section>
          <h2>Unsere Idee</h2>
          <ul>
            <li>Decks pro Fach anlegen und Karten mit Begriff &amp; Erklärung füllen</li>
            <li>Import per Text (<code>Begriff;Erklärung</code>) oder KI aus PDF, Word und Markdown</li>
            <li>Lernverlauf als Kurve, tägliche Streaks und Erinnerungen</li>
            <li>Lernen mit Stoppuhr oder Zeitlimit</li>
          </ul>
        </section>

        {/* Slide 6 */}
        <section>
          <h2>So wird gelernt</h2>
          <p className="small">Sieben Modi, die sich je nach Stoff abwechseln lassen:</p>
          <ul>
            <li>Klassisch umdrehen &amp; Multiple Choice</li>
            <li>Freitext &amp; Lückentext</li>
            <li>Zuordnen &amp; Richtig/Falsch</li>
            <li>Leitner-System: schwierige Karten kommen öfter</li>
          </ul>
        </section>

        {/* Slide 7 */}
        <section>
          <h2>Der Ritterkampf</h2>
          <p>Jede richtige Antwort verletzt den Gegner, jede falsche kostet den eigenen Ritter Leben.</p>
          <p className="small">Mehrere Schwierigkeitsgrade &middot; Game Over bei 0 Leben<br />Ob es zusätzlich ein zweites Spiel gibt (z.&nbsp;B. Space Invader), entscheiden wir später.</p>
        </section>

        {/* Slide 8 */}
        <section>
          <h2>Geschäftsmodell (simuliert)</h2>
          <ul>
            <li>Kernfunktionen bleiben gratis</li>
            <li>Coins &ndash; ohne echtes Geld &ndash; schalten mehr KI-Nutzung, Zusatzmodi und Skins frei</li>
            <li>Bewusst kein Pay-to-Win: Wissen lässt sich nicht kaufen</li>
          </ul>
        </section>
        <section>
          <h2>Technologien</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px 20px',
            alignItems: 'center',
            justifyItems: 'center',
            marginTop: '40px',
            fontSize: '0.65em'
          }}>
            {/* Frontend Mobile / Desktop */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-flutter-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>Flutter</p>
            </div>


            {/* Backend REST API */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-nodejs-plain-wordmark colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>Node.js / Quarkus</p>
            </div>

            {/* Datenbank */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-postgresql-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>PostgreSQL</p>
            </div>

            {/* KI / LLM */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-python-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>LLM / KI-API</p>
            </div>

            {/* Containerization */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-docker-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>Docker</p>
            </div>

            {/* OS / Host */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-linux-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>Linux VPS</p>
            </div>

            {/* CI/CD */}
            <div style={{ textAlign: 'center' }}>
              <i className="devicon-githubactions-plain colored" style={{ fontSize: '3em' }}></i>
              <p style={{ marginTop: '10px' }}>GitHub Actions</p>
            </div>
          </div>
        </section>




        {/* Slide 15 */}
        <section>
          <h1>Danke!</h1>
          <p className="subtitle">Fragen?</p>
        </section>
      </div>
    </div>
  );
}