import React, { useState } from 'react'
import structures from './data/structures.json'

export default function Quiz() {
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)

  const items = structures

  const current = items[index]

  if (!current) return <div>Kein Quiz verfügbar</div>

  const options = [
    current.name_de,
    items[(index + 1) % items.length].name_de,
    items[(index + 2) % items.length].name_de,
  ].sort(() => Math.random() - 0.5)

  function submit() {
    if (!selected) return
    if (selected === current.name_de) setScore((s) => s + 1)
    setSelected(null)
    setIndex((i) => (i + 1) % items.length)
  }

  return (
    <div>
      <p><strong>Frage:</strong> Welche Struktur passt zur Beschreibung?</p>
      <p style={{ fontStyle: 'italic' }}>{current.function}</p>
      <div>
        {options.map((o) => (
          <label key={o} style={{ display: 'block', margin: '6px 0' }}>
            <input type="radio" name="opt" checked={selected === o} onChange={() => setSelected(o)} /> {o}
          </label>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={submit}>Weiter</button>
      </div>
      <div style={{ marginTop: 8 }}>
        Punktestand: {score} / {items.length}
      </div>
    </div>
  )
}
