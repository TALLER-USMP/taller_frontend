import { useMemo, useState } from "react";

type Item = { id: string; t: string; h: number }; // h = horas
const HORAS_TOTALES = 120;

export default function StepActividades() {
  const [week, setWeek] = useState("Semana 1");
  const [items, setItems] = useState<Item[]>([
    { id: crypto.randomUUID(), t: "Trabajo grupal en el proyecto", h: 2 },
    { id: crypto.randomUUID(), t: "Expone el proyecto final", h: 2 },
    { id: crypto.randomUUID(), t: "Reunión de coordinación diaria", h: 3 },
    { id: crypto.randomUUID(), t: "Crea informe final de proyecto", h: 3 },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newHours, setNewHours] = useState(1);

  const usadas = useMemo(() => items.reduce((s, i) => s + i.h, 0), [items]);
  const restantes = Math.max(0, HORAS_TOTALES - usadas);

  function addItem() {
    if (!newTitle.trim()) return;
    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), t: newTitle.trim(), h: Math.max(1, newHours) },
    ]);
    setNewTitle("");
    setNewHours(1);
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function setHours(id: string, h: number) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, h: Math.max(1, h) } : i)),
    );
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">4. Actividades de Aprendizaje</h2>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <label className="block text-sm mb-1">Selecciona una semana</label>
          <select
            className="rounded-full px-4 py-2 border"
            value={week}
            onChange={(e) => setWeek(e.target.value)}
          >
            {Array.from({ length: 16 }, (_, i) => `Semana ${i + 1}`).map(
              (w) => (
                <option key={w}>{w}</option>
              ),
            )}
          </select>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black text-white">
          Horas disponibles: {restantes}
        </div>
      </div>

      {/* Lista editable */}
      <div className="rounded-2xl border p-4 space-y-3">
        {items.map((it) => (
          <div
            key={it.id}
            className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2"
          >
            <input
              className="flex-1 bg-transparent outline-none"
              value={it.t}
              onChange={(e) =>
                setItems((prev) =>
                  prev.map((x) =>
                    x.id === it.id ? { ...x, t: e.target.value } : x,
                  ),
                )
              }
            />
            <div className="flex items-center gap-2">
              <button
                className="px-2 rounded-full border"
                onClick={() => setHours(it.id, Math.max(1, it.h - 1))}
                disabled={it.h <= 1}
              >
                −
              </button>
              <span className="px-3 py-1 rounded-full bg-gray-300">
                {it.h} h
              </span>
              <button
                className="px-2 rounded-full border"
                onClick={() => setHours(it.id, it.h + 1)}
                disabled={usadas >= HORAS_TOTALES}
              >
                +
              </button>
            </div>
            <button
              aria-label="remove"
              className="w-8 h-8 rounded-full border flex items-center justify-center"
              onClick={() => removeItem(it.id)}
            >
              ×
            </button>
          </div>
        ))}

        {/* añadir nueva */}
        <div className="flex items-center gap-3 pt-2">
          <input
            className="flex-1 border rounded-md px-3 py-2"
            placeholder="Nueva actividad…"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="number"
            min={1}
            className="w-24 border rounded-md px-3 py-2"
            value={newHours}
            onChange={(e) => setNewHours(Number(e.target.value || 1))}
          />
          <button
            className="px-3 py-2 rounded-md border"
            onClick={addItem}
            disabled={!newTitle.trim()}
          >
            Añadir
          </button>
        </div>
      </div>
    </section>
  );
}
