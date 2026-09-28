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
          <h1>Mind Forge</h1>
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

        {/* Slide 9: Systemarchitektur */}
        <section>
          <h2>Systemarchitektur</h2>
          <svg viewBox="0 0 900 370" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Systemarchitektur Learn Quest">
            <defs>
              <marker id="arrA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#42affa" />
              </marker>
            </defs>
            <rect x="10" y="30" width="230" height="310" rx="12" fill="#1a2440" stroke="#42affa" strokeWidth="2" />
            <text x="125" y="58" textAnchor="middle" fill="#42affa" fontSize="19" fontWeight="700">Flutter-App</text>
            <rect x="25" y="78" width="200" height="50" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="125.0" y="108.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">UI &amp; Lernmodi</text>
            <rect x="25" y="142" width="200" height="50" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="125.0" y="172.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">Ritterkampf</text>
            <rect x="25" y="206" width="200" height="50" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="125.0" y="236.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">Fortschritt &amp; Streaks</text>
            <rect x="25" y="270" width="200" height="50" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="125.0" y="300.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">Lokaler Cache</text>

            <rect x="330" y="30" width="240" height="310" rx="12" fill="#1a2440" stroke="#42affa" strokeWidth="2" />
            <text x="450" y="58" textAnchor="middle" fill="#42affa" fontSize="19" fontWeight="700">Backend (REST-API)</text>
            <rect x="345" y="74" width="210" height="42" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="450.0" y="100.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Auth &amp; Nutzer</text>
            <rect x="345" y="126" width="210" height="42" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="450.0" y="152.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Deck-Verwaltung</text>
            <rect x="345" y="178" width="210" height="42" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="450.0" y="204.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Import-Service</text>
            <rect x="345" y="230" width="210" height="42" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="450.0" y="256.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Tracking &amp; Streaks</text>
            <rect x="345" y="282" width="210" height="42" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="450.0" y="308.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Scheduler</text>

            <rect x="660" y="30" width="230" height="90" rx="8" fill="#2a3b2a" stroke="#6bb36b" strokeWidth="1.5" />
            <text x="775.0" y="80.0" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">PostgreSQL</text>
            <rect x="660" y="145" width="230" height="90" rx="8" fill="#3b2a3b" stroke="#b36bb3" strokeWidth="1.5" />
            <text x="775.0" y="195.0" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">LLM-API (KI)</text>
            <rect x="660" y="260" width="230" height="80" rx="8" fill="#3b3a2a" stroke="#b3ab6b" strokeWidth="1.5" />
            <text x="775.0" y="305.0" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">Push (FCM / APNs)</text>

            <line x1="240" y1="185" x2="330" y2="185" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrA)" markerStart="url(#arrA)" />
            <text x="285" y="172" textAnchor="middle" fill="#9fd3ff" fontSize="13">HTTPS / REST</text>
            <line x1="570" y1="75" x2="660" y2="75" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrA)" markerStart="url(#arrA)" />
            <text x="615" y="65" textAnchor="middle" fill="#9fd3ff" fontSize="13">SQL</text>
            <line x1="570" y1="190" x2="660" y2="190" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrA)" />
            <text x="615" y="180" textAnchor="middle" fill="#9fd3ff" fontSize="13">Prompt / Text</text>
            <line x1="570" y1="300" x2="660" y2="300" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrA)" />
            <text x="615" y="290" textAnchor="middle" fill="#9fd3ff" fontSize="13">Erinnerungen</text>
          </svg>
          <p className="small">Die App spricht nur mit unserem Backend; dieses kümmert sich um Daten, KI und Erinnerungen.</p>
        </section>

        {/* Slide 10: Deployment */}
        <section>
          <h2>Deployment</h2>
          <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deployment-Diagramm Learn Quest">
            <defs>
              <marker id="arrB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#42affa" />
              </marker>
            </defs>
            <rect x="10" y="70" width="200" height="220" rx="10" fill="#1a2440" stroke="#42affa" strokeWidth="2" />
            <text x="110" y="96" textAnchor="middle" fill="#9fd3ff" fontSize="13">&laquo;Endgerät&raquo;</text>
            <text x="110" y="118" textAnchor="middle" fill="#42affa" fontSize="17" fontWeight="700">Windows &middot; Android &middot; iOS</text>
            <rect x="30" y="150" width="160" height="60" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="110.0" y="185.0" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="700">Flutter-App</text>
            <text x="110" y="250" textAnchor="middle" fill="#ccc" fontSize="13">Lokaler Cache</text>

            <rect x="270" y="20" width="390" height="385" rx="10" fill="#151c30" stroke="#42affa" strokeWidth="2" strokeDasharray="6 4" />
            <text x="465" y="44" textAnchor="middle" fill="#9fd3ff" fontSize="13">&laquo;Server&raquo;</text>
            <text x="465" y="64" textAnchor="middle" fill="#42affa" fontSize="17" fontWeight="700">Linux-VPS &middot; Docker Compose</text>
            <rect x="295" y="85" width="340" height="58" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="465.0" y="119.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">Reverse Proxy (TLS)</text>
            <rect x="295" y="163" width="340" height="58" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="465.0" y="197.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">API-Container</text>
            <rect x="295" y="241" width="340" height="58" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="465.0" y="275.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">Scheduler / Worker</text>
            <rect x="295" y="319" width="340" height="58" rx="8" fill="#26324f" stroke="#5a6b96" strokeWidth="1.5" />
            <text x="465.0" y="353.0" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="400">PostgreSQL + Volume</text>

            <rect x="715" y="50" width="175" height="80" rx="8" fill="#3b2a3b" stroke="#b36bb3" strokeWidth="1.5" />
            <text x="802.5" y="95.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">LLM-Anbieter (API)</text>
            <rect x="715" y="170" width="175" height="80" rx="8" fill="#3b3a2a" stroke="#b3ab6b" strokeWidth="1.5" />
            <text x="802.5" y="215.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">Push FCM / APNs</text>
            <rect x="715" y="300" width="175" height="80" rx="8" fill="#2a3b2a" stroke="#6bb36b" strokeWidth="1.5" />
            <text x="802.5" y="345.0" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="400">GitHub Actions</text>

            <line x1="190" y1="180" x2="295" y2="114" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrB)" markerStart="url(#arrB)" />
            <text x="225" y="132" textAnchor="middle" fill="#9fd3ff" fontSize="13">HTTPS :443</text>
            <line x1="635" y1="241" x2="715" y2="100" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrB)" />
            <line x1="635" y1="319" x2="715" y2="210" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrB)" />
            <line x1="715" y1="340" x2="635" y2="346" stroke="#42affa" strokeWidth="2" markerEnd="url(#arrB)" />
            <text x="672" y="325" textAnchor="middle" fill="#9fd3ff" fontSize="13">Docker-Image</text>
          </svg>
          <p className="small">Alles Serverseitige läuft in Docker-Containern auf einem VPS, Updates kommen per CI/CD.</p>
        </section>

        {/* Slide 11 */}
        <section>
          <h2>Qualitätsziele</h2>
          <ul>
            <li>Erste Karte in maximal 3 Klicks</li>
            <li>Deck öffnet in unter 1 s, KI liefert Karten in unter 15 s</li>
            <li>Läuft auf Android 10+, iOS 15+ und Windows 10+</li>
            <li>HTTPS und gehashte Passwörter</li>
            <li>Mindestens 60&nbsp;% Testabdeckung, automatisiert über CI</li>
          </ul>
        </section>

        {/* Slide 12 */}
        <section>
          <h2>Woran wir uns messen</h2>
          <ul>
            <li>Gratis-Basis: mindestens 3 Decks mit je 50 Karten</li>
            <li>30 Karten per KI in unter 2 Minuten statt ca. 20 Minuten Handarbeit</li>
            <li>Zum Projektende: mindestens 5 Lernmodi und ein spielbarer Ritterkampf</li>
          </ul>
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