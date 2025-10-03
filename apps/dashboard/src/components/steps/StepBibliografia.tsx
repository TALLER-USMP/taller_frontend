import { useState } from "react";

type Ref = { id: string; autor: string; anio: string; titulo: string };

export default function StepBibliografia() {
  const [refs, setRefs] = useState<Ref[]>([
    {
      id: crypto.randomUUID(),
      autor: "Chandrasekara, C., & Herath, P.",
      anio: "(2021).",
      titulo: "Hands-on GitHub Actions…",
    },
    {
      id: crypto.randomUUID(),
      autor: "Guijarro Olivares, J.…",
      anio: "(2019).",
      titulo: "DevOps y seguridad cloud…",
    },
  ]);
  const [nuevo, setNuevo] = useState<Ref>({
    id: "",
    autor: "",
    anio: "",
    titulo: "",
  });

  function addRef() {
    if (!nuevo.autor.trim() || !nuevo.titulo.trim()) return;
    setRefs((prev) => [...prev, { ...nuevo, id: crypto.randomUUID() }]);
    setNuevo({ id: "", autor: "", anio: "", titulo: "" });
  }

  function removeRef(id: string) {
    setRefs((prev) => prev.filter((r) => r.id !== id));
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">8.1. Bibliográficas</h2>
      <div className="rounded-2xl border p-4 space-y-3">
        {refs.map((r) => (
          <div key={r.id} className="grid md:grid-cols-3 gap-3 items-center">
            <input
              className="bg-gray-100 rounded-full px-4 py-2"
              value={r.autor}
              onChange={(e) =>
                setRefs((prev) =>
                  prev.map((x) =>
                    x.id === r.id ? { ...x, autor: e.target.value } : x,
                  ),
                )
              }
            />
            <input
              className="bg-gray-100 rounded-full px-4 py-2 text-center"
              value={r.anio}
              onChange={(e) =>
                setRefs((prev) =>
                  prev.map((x) =>
                    x.id === r.id ? { ...x, anio: e.target.value } : x,
                  ),
                )
              }
            />
            <div className="flex items-center gap-2">
              <input
                className="flex-1 bg-gray-100 rounded-full px-4 py-2"
                value={r.titulo}
                onChange={(e) =>
                  setRefs((prev) =>
                    prev.map((x) =>
                      x.id === r.id ? { ...x, titulo: e.target.value } : x,
                    ),
                  )
                }
              />
              <button
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                onClick={() => removeRef(r.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}

        {/* nueva referencia */}
        <div className="grid md:grid-cols-3 gap-3 items-center pt-3">
          <input
            className="bg-white border rounded-full px-4 py-2"
            placeholder="Autor(es)…"
            value={nuevo.autor}
            onChange={(e) => setNuevo((s) => ({ ...s, autor: e.target.value }))}
          />
          <input
            className="bg-white border rounded-full px-4 py-2 text-center"
            placeholder="(Año)"
            value={nuevo.anio}
            onChange={(e) => setNuevo((s) => ({ ...s, anio: e.target.value }))}
          />
          <div className="flex items-center gap-2">
            <input
              className="flex-1 bg-white border rounded-full px-4 py-2"
              placeholder="Título…"
              value={nuevo.titulo}
              onChange={(e) =>
                setNuevo((s) => ({ ...s, titulo: e.target.value }))
              }
            />
            <button className="px-3 py-2 rounded-full border" onClick={addRef}>
              ＋
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
