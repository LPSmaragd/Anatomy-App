# Anatomy App 🧬

## Beschreibung

Eine interaktive 3D-Anatomie-Lernapp mit Quiz und Lexikon. Perfekt zum Lernen für dein **Staatsexamen**!

### Features

✅ **3D-Modelle** - Interaktive Ansicht von Skelett, Muskeln, Organen, Nervensystem und Lymphsystem
✅ **Quiz-Funktion** - Lerne mit Multiple-Choice-Fragen zu Knochenstrukturen, Muskelstruktur und Nervenversorgung
✅ **Lexikon** - Vollständige Referenz aller anatomischen Strukturen in Deutsch und Latein
✅ **Multilingual** - Deutsch und Lateinische Begriffe
✅ **Learning Videos** - Platz für Educational Content (kommend)

## Tech Stack

- **Frontend**: React 18 + Vite
- **3D Rendering**: Three.js + React Three Fiber
- **Styling**: Tailwind CSS
- **State Management**: Zustand

## Installation & Setup

### Schritt 1: Repository klonen
```bash
git clone https://github.com/LPSmaragd/Anatomy-App.git
cd Anatomy-App
```

### Schritt 2: Auf develop-Branch wechseln
```bash
git checkout develop
```

### Schritt 3: Dependencies installieren
```bash
npm install
```

### Schritt 4: Development Server starten
```bash
npm run dev
```

Die App öffnet sich automatisch auf `http://localhost:3000` 🎉

## Wie du das Projekt nutzt

### 📥 Herunterladen als ZIP

1. Gehe zu: https://github.com/LPSmaragd/Anatomy-App
2. Klick auf den grünen Button **"Code"**
3. Wähle **"Download ZIP"**
4. Entpacke die ZIP-Datei auf deinem Rechner
5. Öffne Terminal/Kommandozeile im Ordner
6. Führe aus:
   ```bash
   npm install
   npm run dev
   ```

### 💻 Mit Git klonen (empfohlen)

```bash
git clone https://github.com/LPSmaragd/Anatomy-App.git
cd Anatomy-App
git checkout develop  # Wichtig: auf develop wechseln!
npm install
npm run dev
```

## Verwendung der App

### 🔍 3D-Ansicht
1. Wähle eine anatomische Struktur aus der Sidebar aus (Skelett, Muskeln, Organe, etc.)
2. **Rotieren**: Klick + Maus ziehen
3. **Zoomen**: Mausrad drehen
4. Die 3D-Modelle drehen sich automatisch

### ❓ Quiz
1. Beantworte Multiple-Choice-Fragen
2. Erhalte sofortiges Feedback (grün = richtig, rot = falsch)
3. Lese detaillierte Erklärungen
4. Verfolge deinen Score
5. Starte neu oder nächste Frage

### 📚 Lexikon
1. **Suche**: Gib einen Begriff ein (Deutsch oder Latein)
2. **Sprachwechsel**: Schalte zwischen Deutsch und Latein um
3. **Details**: Lies Definition, Funktion, Innervation und klinische Relevanz
4. Perfekt für Prüfungsvorbereitung!

## Projektstruktur

```
Anatomy-App/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # App Header mit Logo
│   │   ├── Navigation.jsx          # Tab Navigation (3D, Quiz, Lexikon)
│   │   ├── Viewer3D.jsx            # 3D Canvas und Sidebar
│   │   ├── Quiz.jsx                # Quiz Component mit Scoring
│   │   ├── Lexicon.jsx             # Lexikon mit Suchfunktion
│   │   └── 3D/
│   │       └── AnatomicalModel.jsx # Three.js 3D Modelle
│   ├── data/
│   │   ├── quizData.js             # Quiz Fragen & Antworten
│   │   └── lexiconData.js          # Lexikon Einträge
│   ├── App.jsx                     # Main App Component
│   ├── main.jsx                    # React Entry Point
│   └── index.css                   # Tailwind Styles
├── index.html                      # HTML Template
├── vite.config.js                  # Vite Konfiguration
├── tailwind.config.js              # Tailwind CSS Konfiguration
├── postcss.config.js               # PostCSS Konfiguration
├── package.json                    # Dependencies
└── README.md                       # Diese Datei
```

## Nächste Schritte & Roadmap

- [ ] Erweiterte 3D-Modelle (detailliertere anatomische Strukturen)
- [ ] Video-Integration für Learning Videos
- [ ] Benutzer-Progress Tracking (Speichern von Quiz-Ergebnissen)
- [ ] Offline-Modus für unterwegs lernen
- [ ] Erweiterte Quiz-Kategorien nach Schwierigkeitsgrad
- [ ] Prüfungsmodus mit Zeitlimit
- [ ] Mehr anatomische Strukturen & Organe hinzufügen
- [ ] Interaktive Labels in der 3D-Ansicht
- [ ] Statistiken & Lernfortschritt

## Tipps für dein Lernen 🎓

1. **Regelmäßig nutzen**: 15-20 Minuten täglich ist besser als lange Sessionen
2. **Quiz machen**: Teste dein Wissen regelmäßig
3. **Lexikon lesen**: Lerne die Funktionen und klinischen Aspekte
4. **3D-Modelle untersuchen**: Verstehe die räumlichen Beziehungen
5. **Wiederholen**: Wiederholung ist der Schlüssel zum Erfolg!

## Troubleshooting

### "npm: command not found"
→ Node.js nicht installiert. Download: https://nodejs.org/

### "Port 3000 already in use"
→ Ein anderes Programm nutzt Port 3000. Schließe es oder ändere den Port in `vite.config.js`

### 3D-Modelle werden nicht angezeigt
→ Three.js Abhängigkeiten nicht installiert. Führe `npm install` aus

### Styling ist kaputt
→ Tailwind nicht kompiliert. Starte `npm run dev` neu

## Weitere Ressourcen

- [React Docs](https://react.dev)
- [Three.js Docs](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Tailwind CSS](https://tailwindcss.com)

## Beitragen

Möchtest du die App verbessern? Gerne!

1. Fork das Repository
2. Erstelle einen `feature`-Branch (`git checkout -b feature/amazing-feature`)
3. Commit deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push den Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## Lizenz

MIT License - frei verwendbar für Lernzwecke

## Kontakt & Support

**GitHub**: [@LPSmaragd](https://github.com/LPSmaragd)

Bei Fragen, Bugs oder Vorschlägen, öffne ein **GitHub Issue**! 📧

---

### 🎓 Viel Erfolg bei deinem Staatsexamen! 🎓

**Version**: 1.0.0
**Letzte Aktualisierung**: 2026-08-18
