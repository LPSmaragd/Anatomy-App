# Anatomy-App

Prototype branch: web-mvp-prototype

Dies ist ein leichter Web‑Prototype (Vite + React + react-three-fiber) für eine interaktive Anatomie‑App.

Schnellstart

1. Node.js (>=18) installieren
2. Lokales Repo klonen und Branch web-mvp-prototype auschecken
3. npm install
4. npm run dev
5. Öffne http://localhost:5173

Was enthalten ist

- Ein einfacher 3D‑Viewer (Platzhalter glb wird von Khronos glTF Sample Models geladen)
- Beispiel‑Strukturen (5 Einträge) mit Informationen (DE/LA, Ursprung, Ansatz, Funktion, Innervation)
- Hotspots als klickbare Sphären (Demo)
- Einfacher Quiz‑Mechanismus

Nächste Schritte

- Eigene glTF/glb Anatomie‑Modelle hinzufügen (public/models/*.glb) und URLs in src/Viewer.tsx anpassen
- Hotspot‑Koordinaten an das echte Modell anpassen
- Backend für Inhalte / Nutzer / Progress tracking hinzufügen

