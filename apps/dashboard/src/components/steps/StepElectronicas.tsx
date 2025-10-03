import { useState } from "react";

type Item = { id: string; cita: string; url: string };

export default function StepElectronicas() {
  const [items, setItems] = useState<Item[]>([
    {
      id: crypto.randomUUID(),
      cita: "AWS. (2023)…",
      url: "https://aws.amazon.com/es/education/awseducate/",
    },
    {
      id: crypto.randomUUID(),
      cita: "Microsoft. (2023a)…",
      url: "https://azure.microsoft.com/es-es/get-started/azure-portal",
    },
  ]);

  const [nuevo, setNuevo] = useState<Item>({ id: "", cita: "", url: "" });

  function addItem() {
    if (!nuevo.cita.trim() || !nuevo.url.trim()) return;
    setItems((prev) => [...prev, { ...nuevo, id: crypto.randomUUID() }]);
    setNuevo({ id: "", cita: "", url: "" });
  }
  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">8.2. Electrónicas</h2>
      <div className="rounded-2xl border p-4 space-y-3">
        {items.map((it) => (
          <div key={it.id} className="grid md:grid-cols-2 gap-3 items-center">
            <input
              className="bg-gray-100 rounded-full px-4 py-2"
              value={it.cita}
              onChange={(e) =>
                setItems((prev) =>
                  prev.map((x) =>
                    x.id === it.id ? { ...x, cita: e.target.value } : x,
                  ),
                )
              }
            />
            <div className="flex items-center gap-2">
              <input
                className="flex-1 bg-gray-100 rounded-full px-4 py-2"
                value={it.url}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((x) =>
                      x.id === it.id ? { ...x, url: e.target.value } : x,
                    ),
                  )
                }
              />
              <a
                href={it.url}
                target="_blank"
                className="px-3 py-1 rounded-full border"
              >
                Abrir
              </a>
              <button
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                onClick={() => removeItem(it.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}

        {/* nuevo */}
        <div className="grid md:grid-cols-2 gap-3 items-center pt-3">
          <input
            className="bg-white border rounded-full px-4 py-2"
            placeholder="Cita…"
            value={nuevo.cita}
            onChange={(e) => setNuevo((s) => ({ ...s, cita: e.target.value }))}
          />
          <div className="flex items-center gap-2">
            <input
              className="flex-1 bg-white border rounded-full px-4 py-2"
              placeholder="URL…"
              value={nuevo.url}
              onChange={(e) => setNuevo((s) => ({ ...s, url: e.target.value }))}
            />
            <button className="px-3 py-2 rounded-full border" onClick={addItem}>
              ＋
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
