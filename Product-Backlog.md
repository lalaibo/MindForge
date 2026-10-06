# Product Backlog: Mind Forge

## Rollen
- **Schüler:** Schüler der HTL Leonding (und anderer Schulen), die mit Karteikarten auf Tests und Prüfungen lernen.
- **Entwicklerteam:** das Projektteam, das die App betreibt und die Kosten der KI-Schnittstelle im Blick behält.

---

## Epic 1: Benutzerkonto
Als Schüler möchte ich ein eigenes Konto haben, damit meine Daten sicher gespeichert sind.

- **US 1.1: Registrierung & Anmeldung**  
  *Als Schüler* möchte ich mich mit E-Mail und Passwort registrieren und anmelden können, *um* meine Stapel und meinen Lernfortschritt auf allen Geräten wiederzufinden.  
  Priorität: High · Aufwand: Medium

## Epic 2: Stapel- und Kartenverwaltung
Als Schüler möchte ich meinen Lernstoff schnell in Stapel und Karten bringen und übersichtlich verwalten.

- **US 2.1: Stapel (Decks) verwalten**  
  *Als Schüler* möchte ich pro Fach einen Stapel anlegen, umbenennen und löschen können, *um* meinen Lernstoff übersichtlich nach Fächern zu ordnen.  
  Priorität: High · Aufwand: Medium

- **US 2.2: Karten manuell erstellen & bearbeiten**  
  *Als Schüler* möchte ich einzelne Karten mit Begriff und Erklärung anlegen, bearbeiten und löschen können, *um* meinen Stapel selbst ergänzen und Fehler korrigieren zu können.  
  Priorität: High · Aufwand: Low

- **US 2.3: Listen-Import (Begriff;Erklärung)**  
  *Als Schüler* möchte ich eine Liste im Format `Begriff;Erklärung` einfügen können, *um* viele Karten auf einmal anzulegen, ohne jede einzeln abzutippen.  
  Priorität: High · Aufwand: Low

- **US 2.4: Bilder & Audio auf Karten**  
  *Als Schüler* möchte ich Bilder und Audiodateien zu einer Karte hinzufügen können, *um* auch Stoff wie Diagramme oder Aussprache lernen zu können.  
  Priorität: Low · Aufwand: Medium

## Epic 3: KI-Import
Als Schüler möchte ich aus meinen vorhandenen Skripten automatisch Karten und Testfragen erzeugen lassen.

- **US 3.1: KI-Import aus PDF, Word & Markdown**  
  *Als Schüler* möchte ich ein PDF-, Word- oder Markdown-Dokument hochladen und daraus automatisch Karten erzeugen lassen, *um* aus meinem Skript in wenigen Minuten einen fertigen Kartensatz zu bekommen.  
  Priorität: High · Aufwand: High

- **US 3.2: KI-Karten vor dem Speichern prüfen**  
  *Als Schüler* möchte ich die von der KI erzeugten Karten vor dem Speichern sehen, bearbeiten und einzeln verwerfen können, *um* keine fehlerhaften Inhalte zu lernen.  
  Priorität: High · Aufwand: Medium

- **US 3.3: KI-Testfragen generieren**  
  *Als Schüler* möchte ich aus einem hochgeladenen Dokument statt Karten auch Testfragen erzeugen lassen, *um* mich gezielt auf einen Test vorzubereiten.  
  Priorität: Medium · Aufwand: Medium

- **US 3.4: KI-Kontingent pro Nutzer**  
  *Als Entwicklerteam* möchte ich die Anzahl der KI-Generierungen pro Nutzer begrenzen, *um* die Kosten und Nutzungslimits der KI-Schnittstelle unter Kontrolle zu halten.  
  Priorität: Medium · Aufwand: Medium

## Epic 4: Lernmodi
Als Schüler möchte ich denselben Stoff in verschiedenen Modi wiederholen, passend zum Fach.

- **US 4.1: Lernmodus Karteikarte**  
  *Als Schüler* möchte ich Karten eines Stapels nacheinander ansehen und umdrehen können, *um* den Stoff klassisch zu wiederholen.  
  Priorität: High · Aufwand: Low

- **US 4.2: Lernmodus Multiple Choice**  
  *Als Schüler* möchte ich zu einem Begriff aus mehreren Antworten die richtige auswählen können, *um* den Stoff abwechslungsreich und schnell abzufragen.  
  Priorität: High · Aufwand: Medium

- **US 4.3: Lernmodus Freitext**  
  *Als Schüler* möchte ich die Antwort zu einer Karte selbst eintippen können, *um* zu überprüfen, ob ich den Stoff wirklich aktiv abrufen kann.  
  Priorität: High · Aufwand: Medium

- **US 4.4: Leitner-System (Spaced Repetition)**  
  *Als Schüler* möchte ich mit dem Leitner-System lernen können, *um* dass schwierige Karten öfter und gut gekonnte seltener abgefragt werden.  
  Priorität: Medium · Aufwand: High

- **US 4.5: Lernmodus Lückentext**  
  *Als Schüler* möchte ich Erklärungen mit Lücken ausfüllen können, *um* mir Schlüsselbegriffe im Zusammenhang einzuprägen.  
  Priorität: Medium · Aufwand: Medium

- **US 4.6: Lernmodus Zuordnen**  
  *Als Schüler* möchte ich mehrere Begriffe den passenden Erklärungen zuordnen können, *um* Zusammenhänge zwischen Begriffen spielerisch zu lernen.  
  Priorität: Medium · Aufwand: Medium

- **US 4.7: Lernmodus Richtig/Falsch**  
  *Als Schüler* möchte ich entscheiden können, ob eine angezeigte Erklärung zum Begriff passt, *um* den Stoff schnell zwischendurch zu wiederholen.  
  Priorität: Medium · Aufwand: Low

- **US 4.8: Stoppuhr & Zeitlimit**  
  *Als Schüler* möchte ich eine Lernsession mit Stoppuhr oder mit festem Zeitlimit starten können, *um* meine Lernzeit im Blick zu behalten und unter Zeitdruck zu üben.  
  Priorität: Medium · Aufwand: Low

## Epic 5: Fortschritt und Motivation
Als Schüler möchte ich meinen Lernfortschritt sehen und regelmäßig ans Lernen erinnert werden.

- **US 5.1: Lernfortschritt erfassen**  
  *Als Schüler* möchte ich dass meine Ergebnisse jeder Lernsession gespeichert werden, *um* später sehen zu können, wie gut ich einen Stapel beherrsche.  
  Priorität: High · Aufwand: Medium

- **US 5.2: Fortschritts-Liniendiagramm**  
  *Als Schüler* möchte ich meinen Lernverlauf als Liniendiagramm sehen, *um* zu erkennen, wie sich mein Wissen über die Zeit entwickelt.  
  Priorität: Medium · Aufwand: High

- **US 5.3: Tages-Streak**  
  *Als Schüler* möchte ich sehen, an wie vielen Tagen in Folge ich gelernt habe, *um* motiviert zu bleiben, jeden Tag ein bisschen zu lernen.  
  Priorität: Medium · Aufwand: Low

- **US 5.4: Lernerinnerungen**  
  *Als Schüler* möchte ich zu einer selbst gewählten Uhrzeit ans Lernen erinnert werden, *um* regelmäßig zu wiederholen statt nur am Vorabend der Prüfung.  
  Priorität: Medium · Aufwand: Medium

## Epic 6: Lernspiele
Als Schüler möchte ich beim Wiederholen durch ein Spiel motiviert bleiben.

- **US 6.1: Lernspiel Ritterkampf**  
  *Als Schüler* möchte ich im rundenbasierten Ritterkampf gegen einen Gegner antreten, indem ich Fragen aus meinem Stapel beantworte, *um* beim Wiederholen motiviert zu bleiben.  
  Priorität: Medium · Aufwand: High

- **US 6.2: Ritterkampf-Schwierigkeitsgrade**  
  *Als Schüler* möchte ich beim Ritterkampf einen Schwierigkeitsgrad wählen können, *um* das Spiel an mein Wissen anzupassen.  
  Priorität: Medium · Aufwand: Medium

- **US 6.3: Zweites Lernspiel (Space Invader)**  
  *Als Schüler* möchte ich ein zweites, echtzeitbasiertes Lernspiel spielen können, *um* noch mehr Abwechslung beim Wiederholen zu haben.  
  Priorität: Low · Aufwand: High

## Epic 7: Coins und simulierte Paywall
Als Schüler möchte ich Coins verdienen und gegen Zusatzinhalte eintauschen, ohne dass Wissen käuflich ist.

- **US 7.1: Coins verdienen**  
  *Als Schüler* möchte ich durch Lernen und gewonnene Ritterkämpfe Coins verdienen, *um* für regelmäßiges Lernen belohnt zu werden.  
  Priorität: Low · Aufwand: Medium

- **US 7.2: Shop mit simulierter Paywall**  
  *Als Schüler* möchte ich Coins im Shop gegen zusätzliches KI-Kontingent, weitere Modi und Skins eintauschen können, *um* die App nach meinen Wünschen zu erweitern.  
  Priorität: Low · Aufwand: High

## Epic 8: Teilen

- **US 8.1: Stapel mit dem Jahrgang teilen**  
  *Als Schüler* möchte ich meine fertigen Stapel mit Mitschülern teilen und geteilte Stapel übernehmen können, *um* dass nicht jeder denselben Stoff selbst aufbereiten muss.  
  Priorität: Low · Aufwand: High
