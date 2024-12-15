---
title: Terminal Home
---

# Aufgabe: Terminal Home

## Beschreibung

Als IT-Nerds wollen wir unser Terminal nicht nur nutzen um Dateien zu kopieren oder zu verschieben, sondern auch um uns zu unterhalten. Wir wollen ein Terminal Home, das uns beim Arbeiten unterhält.

Wir bauen uns ein Programm welches uns die neusten News anhand von RSS-Feeds anzeigt und unsere Lieblings Radio-Station abspielt.

## Projekt Setup

1. Erstelle ein neues Verzeichnis für das Projekt zB. `terminal-home`
2. Initialisiere ein neues Node.js Projekt mit `npm init -y`
3. Installiere TypeScript mit `npm install typescript --save-dev`
4. Initialisiere TypeScript mit `npx tsc --init` und passe die `tsconfig.json` an (zB. `outDir` auf `./dist` und `rootDir` auf `./src`)
5. Zum abspielen von Musik brauchen wir noch den mplayer, installiere ihn mit `brew install mplayer`

::: info
Mplayer ist ein einfacher Mediaplayer für die Kommandozeile. Er kann Musik von einer URL abspielen. 
Leider ist SSL nicht mitkompiliert, deshalb können wir keine https-Streams abspielen. Manche funktionieren jedoch wenn ihr `http` statt `https` verwendet.
:::

## Packages

Um Rss Feeds zu parsen und Musik abzuspielen benötigen wir zwei Packages:

- [rss-parser - npm](https://www.npmjs.com/package/rss-parser)
- [play-sound - npm](https://www.npmjs.com/package/play-sound)

Um Interaktiviät in der Konsole zu haben, können wir das Package `inquirer` verwenden:

- [SBoudrias/Inquirer.js: A collection of common interactive command line user interfaces.](https://github.com/SBoudrias/Inquirer.js?tab=readme-ov-file)

::: info
Hier kann man gut nach Radio-Urls suchen: [Radio stream URL search engine](https://streamurl.link/)
und: [Radio stream URL search engine](https://www.radio-browser.info/)

## Anforderungen

