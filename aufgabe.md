---
title: Terminal Home
---

# Aufgabe: Terminal Home

## Beschreibung

Als IT-Nerds wollen wir unser Terminal nicht nur nutzen um Dateien zu kopieren oder zu verschieben,  
sondern auch um uns zu unterhalten. Wir wollen ein Terminal Home, das uns beim Arbeiten unterhält.

Wir bauen uns ein Programm welches uns die neusten News anhand von RSS-Feeds anzeigt und unsere Lieblings Radio-Station abspielt.

## Projekt Setup

1. Erstelle ein neues Verzeichnis für das Projekt zB. `terminal-home`
2. Initialisiere ein neues Node.js Projekt mit `npm init -y`
3. Installiere TypeScript mit `npm install typescript --save-dev`
4. Initialisiere TypeScript mit `npx tsc --init` und passe die `tsconfig.json` an (zB. `outDir` auf `./dist` und `rootDir` auf `./src`)

::: info
Mplayer ist ein einfacher Mediaplayer für die Kommandozeile. Er kann Musik von einer URL abspielen. 
Leider ist SSL nicht mitkompiliert, deshalb können wir keine https-Streams abspielen.  
Manche funktionieren jedoch wenn ihr `http` statt `https` verwendet.
:::

## Packages

Um Rss Feeds zu parsen und Musik abzuspielen benötigen wir zwei Packages:

- [rss-parser - npm](https://www.npmjs.com/package/rss-parser)
- [play-sound - npm](https://www.npmjs.com/package/play-sound)

Um Interaktiviät in der Konsole zu haben, können wir das Package `inquirer` verwenden:

- [SBoudrias/Inquirer.js: A collection of common interactive command line user interfaces.](https://github.com/SBoudrias/Inquirer.js?tab=readme-ov-file)

::: info
Hier kann man gut nach Radio-Urls suchen: [Radio stream URL search engine](https://streamurl.link/)
und: [Radio stream URL search engine 2](https://www.radio-browser.info/)

## Anforderungen
### Aufgabe 1: Willkommen
1. Das Program kann mit `npm run start` gestartet werden.
2. Das Programm gibt dann eine Willkommennachricht aus. Z.B.:  
  
| Guten Tag Fabian!
|
| Heute ist ein toller Tag um jede Menge Code zu schreiben.
| 
| Hier ist dein Terminal Home
| ---------------

::: info
Unter Mac und Linux ist der Benutzername im System in der Umgebungsvariable $USER abgelegt.  
Mit node können wir diese Variablen auch auslesen:
```javascript
const username = console.log(process.env.USER) || 'Nobody';
console.log(username);
```
:::

### Aufgabe 2: Top News
Im Terminal Home sollen nun News Schlagzeilen angezeigt werden.

Um Rss Feeds zu parsen benötigen wir dieses Package:  
- [rss-parser - npm](https://www.npmjs.com/package/rss-parser)

Ein passenden RSS-Feed findet Ihr hier: [https://www.rss-verzeichnis.de/top.php]
1. Erstelle eine Klasse NewsFeed mit den Methoden **initialize und printTopTitles**
2. Der Constructor soll einen Namen und eine RSS URL als Parameter annehmen. 
3. Die Methode **initialize** soll den RSS Feed parsen und die dten zwischen speichern.
4. Die Methode **printTopTitles** soll eine liste mit den 5 neusten Titeln ausgeben (im Terminal):
5. in der index.ts: benutze die neue Klasse um die Top Schlagzeileb unter der Willkommensnachricht anzuzeigen.
Ausgabe z.B.:
```
# Heise RSS Feed

1. Top 10: Die besten GPS-Tracker für Fahrrad, Auto und Co. – mit & ohne Abo
2. Zuckerbremse gelöst: Süße Tomaten dank Gentechnik ganz groß
3. Skype-Änderung: Telefonanrufe nur noch mit Abo möglich
4. ...
----------
```

### Aufgabe 3: Mehr News
Benutze **inquirer** um den User zu fragen ob er mehr New lesen möchte.  
1. Zeige mit inquirer eine Liste an (`{type: 'list'}`) mit den Werten **News Anzeigen** und **Beenden**
2. *Beenden* soll das Programm einfach beenden ;)
3. *News Anzeigen* soll ein neues Prompt anzeigen mit der Frage "Welche News (1...5)?" und als Wert eine Zahl annehmen.
4. Rufe die Funktion **printNews(n)** vom NewsFeed auf (diese Funktion musst du noch implementieren)
5. Wenn der Benutzer eine ungültige Zahl angibt soll ein Fehler erscheinen, ansonsten Zeige die Komplette News.  
Z.B:
```
----------------
## Skype-Änderung: Telefonanrufe nur noch mit Abo möglich
(Published: Sun, 15 Dec 2024 17:57:00 +0100)

Wer künftig reine Telefongeräte mit Skype anrufen möchte, muss ein Abo abschließen. Ein Guthabenmodell gibt es nicht mehr.

[https://www.heise.de/news/Microsoft-stellt-Skype-Anrufe-bei-Telefonnummern-auf-Abomodell-um-10200197.html?wt_mc=rss.red.ho.ho.rdf.beitrag.beitrag]
-----------------
```
### Aufgabe 4: Musik
Wir können im Terminal Home das Radio starten.

Zum abspielen von Musik brauchen wir noch einen Player.  
Wir benutzen den [MPV Player](https://mpv.io/).  
installiere ihn mit `brew install mpv`


