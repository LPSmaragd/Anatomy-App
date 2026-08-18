import React, { useState } from 'react'
import Viewer from './Viewer'
import Quiz from './Quiz'
import structures from './data/structures.json'

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = structures.find((s) => s.id === selectedId) || null

  return (
    <div className="app">
      <header className="header">Anatomy App — Prototype</header>
      <div className="container">
        <main className="viewer">
          <Viewer onSelect={(id) => setSelectedId(id)} />
        </main>
        <aside className="sidebar">
          <section>
            <h2>Info</h2>
            {selected ? (
              <div>
                <h3>{selected.name_de} — <em>{selected.name_la}</em></h3>
                <p><strong>Ursprung:</strong> {selected.origin}</p>
                <p><strong>Ansatz:</strong> {selected.insertion}</p>
                <p><strong>Funktion:</strong> {selected.function}</p>
                <p><strong>Innervation:</strong> {selected.innervation}</p>
              </div>
            ) : (
              <p>Wähle eine Struktur im Viewer (oder starte ein Quiz)</p>
            )}
          </section>

          <section style={{ marginTop: 20 }}>
            <h2>Quiz</h2>
            <Quiz />
          </section>
        </aside>
      </div>
    </div>
  )
}
