# Project Proposal – Mind Forge

| | |
|---|---|
| **Projekt** | Mind Forge – Karteikarten-Lernapp mit KI-Import und Lernspiel |
| **Gegenstand** | Systemplanung und Projektentwicklung (SYP), 4BHIF, HTL Leonding |
| **Team** | Luka Maric, Ibo Lawand, Edin Kurtic, Samed Elgit |
| **Stand** | 01.10.2026 |

## 1. Ausgangssituation

### Was können wir heute?

Die HTL Leonding hat ca. 1000 Schüler in mehreren Fachabteilungen. Alle müssen laufend viel Lernstoff für Tests und Prüfungen aufbereiten und wiederholen. Karteikarten sind dafür eine bewährte Methode, in der Praxis aber mühsam:

- Karten werden von Hand geschrieben oder einzeln abgetippt. Das kostet Zeit, die dann beim eigentlichen Lernen fehlt.
- Der Stoff liegt meist schon digital vor (PDF-Skripten, Word-Dokumente, Markdown-Mitschriften), daraus entstehen aber nicht automatisch Karten.
- Die verbreiteten Tools decken den Bedarf nur teilweise ab:
  - **Anki**: kostenlos und frei anpassbar, aber mit veralteter, gewöhnungsbedürftiger Oberfläche und ohne Gamification.
  - **Quizlet**: einfach zu bedienen, aber Freemium. Kernfunktionen wie KI-Import und Offline-Modus liegen hinter der Paywall.

### Was wollen wir in Zukunft können?

- Aus einem vorhandenen Skript in wenigen Minuten einen fertigen Kartensatz erzeugen.
- Denselben Stoff in unterschiedlichen Lernmodi wiederholen, passend zum Fach.
- Den eigenen Lernfortschritt sehen und regelmäßig ans Lernen erinnert werden.
- Beim Wiederholen durch ein Spiel motiviert bleiben, nicht nur durch einen Streak-Zähler.

### Wo liegt die Lücke?

Es fehlt ein Werkzeug, das KI-gestützten Import, mehrere Lernmodi und echte Gamification kombiniert und dessen Kernfunktionen kostenlos sind. Bestehende Tools bieten jeweils nur einen Teil davon, oder nur gegen Bezahlung.

## 2. Rahmenbedingungen und Einschränkungen

### Organisatorische Rahmenbedingungen

- **Budget:** Schulprojekt ohne Budget. Es werden nur kostenlose oder für Schüler frei verfügbare Werkzeuge und Dienste eingesetzt.
- **Team:** 4 Teammitglieder mit den Schwerpunkten Frontend, Backend, KI-Import und Tracking/Spiele.
- **Zeitrahmen:** ca. 1,5 Jahre (Oktober 2026 bis Frühjahr 2028), also über die 4. und 5. Klasse. MVP bis Ende des Wintersemesters 2026/27.
- **Vorgaben:** User Stories werden im GitHub Project geführt und priorisiert.
- **Know-how:** Programmiererfahrung aus dem bisherigen Unterricht ist vorhanden. Flutter/Dart, die Anbindung einer KI-Schnittstelle und die Spieleentwicklung müssen teilweise erst erarbeitet werden.

### Technische Rahmenbedingungen

- **Client:** Flutter (Dart) für Desktop und Mobile.
- **Backend:** Node.js/FastAPI mit PostgreSQL.
- **Spiele:** Flame-Engine, falls ein zweites, echtzeitbasiertes Spiel (z. B. Space Invader) umgesetzt wird.
- **Plattformen:** Android 10+, iOS 15+, Windows 10+.
- **Infrastruktur:** GitHub für Quellcode, Projektverwaltung und CI/CD.

### Qualitätsvorgaben

- **Bedienbarkeit:** maximal 3 Klicks bis zur ersten Karte.
- **Performance:** Deck öffnet in unter 1 s, KI-Generierung in unter 15 s.
- **Sicherheit:** Übertragung über HTTPS/TLS, Passwörter werden nur gehasht gespeichert.
- **Wartbarkeit:** mindestens 60 % Testabdeckung, automatisierte Builds über CI/CD.

### Mengengerüst

Ca. 15 Fächer × 30 Karten ergeben rund 450 Karten pro Nutzer und Jahr. Bei 200 Nutzern sind das ca. 90.000 Karten. Gespeichert werden Text, Bilder, Audio und Lernstatistik.

## 3. Projektziele und Systemkonzept

### Idee

Mind Forge nimmt Schülern die Arbeit des Kartenschreibens ab und macht das Wiederholen spielerischer. Ein Schüler lädt sein Skript hoch, bekommt daraus einen Kartensatz und lernt ihn in dem Modus, der gerade zum Stoff passt.

### So arbeitet ein Schüler mit Mind Forge

1. Er legt pro Fach einen Stapel (Deck) an.
2. Er füllt den Stapel, entweder durch Einfügen einer Liste (`Begriff;Erklärung`) oder indem er ein PDF, Word- oder Markdown-Dokument hochlädt. Die KI erzeugt daraus Karten oder Testfragen.
3. Er wählt einen Lernmodus: Karteikarte umdrehen, Multiple Choice, Freitext, Lückentext, Zuordnen, Richtig/Falsch oder das Leitner-System, bei dem schwierige Karten öfter kommen.
4. Er lernt wahlweise mit Stoppuhr oder Zeitlimit pro Session.
5. Er sieht seinen Lernverlauf als Liniendiagramm, hält seinen Tages-Streak und wird ans Lernen erinnert.
6. Zur Abwechslung spielt er den **Ritterkampf**: ein rundenbasiertes Duell, in dem jede richtige Antwort den Gegner verletzt und jede falsche den eigenen Ritter Leben kostet, in mehreren Schwierigkeitsgraden.

### Geschäftsmodell (simuliert)

Die Kernfunktionen bleiben gratis. Coins, erspielt oder gekauft, schalten zusätzliches KI-Kontingent, weitere Modi und kosmetische Inhalte frei. Es gibt bewusst kein Pay-to-Win: Wissen lässt sich nicht kaufen. Die Paywall wird nur simuliert, es fließt kein echtes Geld.

### Messbare Ziele

- Das Basis-Feature-Set ist kostenlos nutzbar (mindestens 3 Decks à 50 Karten).
- Der KI-Import senkt die Erstellzeit für 30 Karten auf unter 2 Minuten.
- Zum Projektende sind mindestens 5 Lernmodi und der Ritterkampf als Prototyp lauffähig.
- Ein zweites Spiel (z. B. Space Invader) ist optional und kein Abnahmekriterium.

## 4. Chancen und Risiken

### Markt und Zielgruppe

- **Primäre Zielgruppe:** die ca. 1000 Schüler der HTL Leonding; als realistische Nutzerbasis werden 200 angenommen.
- **Erweiterte Zielgruppe:** Schüler anderer höherer Schulen und Studierende, die heute Anki oder Quizlet verwenden.
- **Mitbewerber:** Anki (kostenlos, aber unkomfortabel und ohne Gamification) und Quizlet (komfortabel, aber Kernfunktionen kostenpflichtig).

### Chancen

- **Zeitersparnis:** Der KI-Import verkürzt das Erstellen eines Kartensatzes von einer manuellen Tipparbeit auf unter 2 Minuten.
- **Abgrenzung:** Die Kombination aus KI-Import, vielen Lernmodi und einem Lernspiel bei kostenlosem Kern bietet keiner der beiden Marktführer.
- **Motivation:** Das Spiel und die Streaks fördern regelmäßiges Wiederholen statt Lernen am Vorabend.
- **Lerneffekt für das Team:** Erfahrung mit Cross-Platform-Entwicklung, KI-Integration und CI/CD.

### Risiken

| Risiko | Auswirkung | Gegenmaßnahme |
|---|---|---|
| KI erzeugt fehlerhafte oder unbrauchbare Karten | Schüler lernen Falsches, Vertrauen geht verloren | Generierte Karten vor dem Speichern anzeigen und bearbeitbar machen |
| KI-Schnittstelle verursacht Kosten oder hat Nutzungslimits | KI-Import nur eingeschränkt verfügbar | Kontingent pro Nutzer begrenzen, manueller Import bleibt immer möglich |
| Funktionsumfang zu groß für 4 Personen und 1,5 Jahre | Ziele werden nicht erreicht | Klare Priorisierung: MVP zuerst, zweites Spiel ausdrücklich optional |
| Fehlende Erfahrung mit Flutter und Spieleentwicklung | Verzögerungen in der Umsetzung | Einarbeitungsphase einplanen, früh einen technischen Prototyp bauen |
| iOS-Build benötigt Apple-Hardware und Entwicklerkonto | iOS-Version nicht test- oder auslieferbar | Android und Windows priorisieren, iOS nachrangig |
| Schüler bleiben bei Anki/Quizlet | Geringe Nutzung | Früh mit Mitschülern testen und Rückmeldungen einarbeiten |
| Hochgeladene Skripten sind urheberrechtlich geschützt | Rechtliche Probleme beim Teilen | Dokumente nur zur Kartenerzeugung verarbeiten, nicht weitergeben |

## 5. Planung

### Rollen

| Rolle | Person |
|---|---|
| Projektleitung | _offen_ |
| Frontend (Flutter) | _offen_ |
| Backend und Datenbank | _offen_ |
| KI-Import | _offen_ |
| Tracking und Spiele | _offen_ |

### Meilensteine (Grobplanung)

| Zeitpunkt | Meilenstein |
|---|---|
| September/Oktober 2026 | Projektstart, Pflichtenheft und Project Proposal |
| Oktober 2026 | User Stories priorisiert, Architektur und Technologien festgelegt, Beginn der Implementierung |
| Dezember 2026 | Erster Prototyp: Stapelverwaltung, manueller Import, Lernmodus Karteikarte |
| Februar 2027 (Semesterende) | **MVP:** Anmeldung, KI-Import, mindestens 3 Lernmodi, Fortschrittsanzeige |
| Juni 2027 (Ende 4. Klasse) | Mindestens 5 Lernmodi inkl. Leitner-System, Streaks und Erinnerungen, erste spielbare Version des Ritterkampfs |
| Dezember 2027 | Ritterkampf mit mehreren Schwierigkeitsgraden, simulierte Paywall mit Coins, ggf. zweites Spiel |
| Frühjahr 2028 (5. Klasse) | Tests und Fehlerbehebung, Abschlusspräsentation und Projektende |

### Arbeitspakete

1. Grundgerüst: Projektaufbau, CI/CD, Datenbankmodell, Anmeldung
2. Stapel- und Kartenverwaltung mit manuellem Import
3. KI-Import aus PDF, Word und Markdown
4. Lernmodi einschließlich Leitner-System und Zeitfunktion
5. Fortschritts-Tracking, Streaks und Erinnerungen
6. Lernspiel Ritterkampf
7. Simulierte Paywall mit Coins
8. Tests, Dokumentation und Präsentation

### Ressourcen

- **Personal:** 4 Teammitglieder über ca. 1,5 Jahre.
- **Lizenzen:** keine kostenpflichtigen; Flutter, PostgreSQL und Flame sind Open Source.
- **Infrastruktur:** GitHub (Repository, Project, Actions), ein Server für Backend und Datenbank sowie ein Zugang zu einer KI-Schnittstelle.
- **Hardware:** eigene Laptops und Smartphones zum Testen; für iOS zusätzlich ein Mac.

Der Umfang ist im gegebenen Zeitraum machbar, wenn der MVP Vorrang hat und das zweite Spiel optional bleibt.

## 6. Wirtschaftlichkeit

### Kosten

Mind Forge ist ein Schulprojekt, es entstehen keine Personalkosten. Laufende Kosten können nur an zwei Stellen anfallen:

- **KI-Schnittstelle:** nutzungsabhängig. Wird über ein Kontingent pro Nutzer begrenzt.
- **Hosting:** Server für Backend und Datenbank, soweit nicht von der Schule bereitgestellt.

### Nutzen

- Der Nutzen liegt vor allem in gesparter Zeit: Ein Kartensatz mit 30 Karten entsteht in unter 2 Minuten statt durch manuelles Abtippen. Bei 15 Fächern pro Jahr summiert sich das für jeden Nutzer.
- Schüler erhalten Funktionen kostenlos, die bei Quizlet hinter der Paywall liegen.

### Erlösmodell

Das Coin-Modell zeigt, wie sich die App bei einem echten Betrieb tragen könnte: Die nutzungsabhängigen KI-Kosten würden durch gekaufte Coins für zusätzliches KI-Kontingent gedeckt, während der Kern kostenlos bleibt. Im Rahmen des Projekts wird dieses Modell nur simuliert; ein Gewinn ist nicht Ziel des Projekts.
