# Pflichtenheft - Mind Forge

## 1. Ausgangssituation

Die HTL Leonding hat ca. 1000 Schüler in mehreren Fachabteilungen. Schüler müssen laufend viel Lernstoff für Prüfungen aufbereiten und wiederholen – Karteikarten sind dafür eine bewährte, aber oft mühsame Methode.

## 2. Istzustand

Marktführer sind Anki (kostenlos, aber veraltete UI, keine Gamification) und Quizlet (Freemium, Kernfeatures wie KI-Import und Offline-Modus hinter Paywall).

## 3. Problemstellung

Analoge Karten kosten viel Zeit; bestehende digitale Tools bieten keinen KI-Import, kein Teilen fertiger Kartensätze und kaum Gamification – Kernfunktionen sind meist kostenpflichtig.

## 4. Aufgabenstellung

### 4.1. Funktionale Anforderungen

- Stapelverwaltung (Decks pro Fach), Karten mit Begriff/Erklärung
- Import: manuell (`Begriff;Erklärung`) oder per KI aus PDF/Word/Markdown (Karten oder Testfragen)
- Lernmodi: Karteikarte, Multiple Choice, Freitext, Lückentext, Zuordnen, Richtig/Falsch, Leitner-Spaced-Repetition
- Fortschritts-Tracking mit Liniendiagramm, Tages-Streak, Erinnerungen
- Zeitfunktion: Stoppuhr oder Zeitlimit pro Session
- Lernspiel: Ritterkampf (rundenbasiert, Schaden bei richtiger/falscher Antwort, mehrere Schwierigkeitsgrade) fest geplant; ein zweites Spiel (z. B. Space Invader) ist noch offen
- Simulierte Paywall: Basis kostenlos, Coins schalten KI-Kontingent, Modi und Kosmetik frei (kein Pay-to-Win)

### 4.2. Nichtfunktionale Anforderungen (NFA)

- Bedienbarkeit: max. 3 Klicks bis zur ersten Karte
- Performance: Deck-Öffnung < 1s, KI-Generierung < 15s
- Plattformen: Android 10+, iOS 15+, Windows 10+
- Sicherheit: HTTPS/TLS, gehashte Passwörter
- Wartbarkeit: mind. 60 % Testabdeckung, CI/CD

## 5. Ziele

- Basis-Feature-Set kostenlos (mind. 3 Decks à 50 Karten)
- KI-Import senkt Erstellzeit von 30 Karten auf unter 2 Minuten
- Mind. 5 Lernmodi und der Ritterkampf als Prototyp zum Projektende (zweites Spiel optional)

## 6. Mengengerüst

Ca. 15 Fächer × 30 Karten = 450 Karten/Jahr pro Nutzer; bei 200 Nutzern ca. 90.000 Karten. Datenbestände: Text, Bilder, Audio, Statistik.

## 7. Rahmenbedingungen

- Technisch: Flutter (Dart) für Desktop/Mobile, Backend Node.js/FastAPI + PostgreSQL, Flame-Engine falls zweites Spiel (z. B. Space Invader) umgesetzt wird
- Zeitlich: 1 Schuljahr, MVP bis Semesterende
- Personell: 4 Teammitglieder (Frontend, Backend, KI-Import, Tracking/Spiele)
- Vorgaben: User Stories im GitHub Project, priorisiert
