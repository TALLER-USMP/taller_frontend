import { useMemo, useState } from "react";

const UNITS = [
  { id: "u1", name: "I. DISEÑO DE SOLUCIONES INNOVADORAS" },
  { id: "u2", name: "II. GESTIÓN DE PROYECTOS" },
  { id: "u3", name: "III. INTEGRACIÓN Y ENTREGAS" },
  { id: "u4", name: "IV. PRESENTACIÓN Y EVALUACIÓN" },
];

const WEEKS = Array.from({ length: 16 }, (_, i) => `Semana ${i + 1}`);
const MAX_CHARS = 400;

export default function StepWeeks() {
  const [unitId, setUnitId] = useState("u1");
  const [week, setWeek] = useState(WEEKS[0]);
  const [conceptual, setConceptual] = useState(
    "El taller y sus objetivos generales. El modelo de trabajo. Planteamiento del problema...",
  );
  const [procedural, setProcedural] = useState(
    "El pensamiento de diseño y sus técnicas. Las necesidades del público objetivo...",
  );

  const unitLabel = useMemo(
    () => UNITS.find((u) => u.id === unitId)?.name ?? "",
    [unitId],
  );

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">4. Unidades</h2>

      {/* Selector de unidad */}
      <div className="w-full">
        <select
          className="w-full border rounded-lg px-4 py-3 text-gray-700"
          value={unitId}
          onChange={(e) => setUnitId(e.target.value)}
        >
          {UNITS.map((u) => (
            <option key={u.id} value={u.id}>
              Unidad: {u.name}
            </option>
          ))}
        </select>
      </div>

      <h3 className="text-xl font-bold">4. Semanas</h3>
      <label className="block text-sm mb-1">Selecciona una semana</label>

      {/* Selector de semana */}
      <select
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 border"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
      >
        {WEEKS.map((w) => (
          <option key={w}>{w}</option>
        ))}
      </select>

      {/* Textareas con contador */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border p-4">
          <h4 className="font-semibold mb-2">Contenidos conceptuales</h4>
          <textarea
            className="w-full min-h-[140px] resize-y border rounded-md px-3 py-2"
            value={conceptual}
            maxLength={MAX_CHARS}
            onChange={(e) => setConceptual(e.target.value)}
          />
          <div className="text-right text-sm text-gray-500">
            {conceptual.length}/{MAX_CHARS}
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <h4 className="font-semibold mb-2">Contenidos procedimentales</h4>
          <textarea
            className="w-full min-h-[140px] resize-y border rounded-md px-3 py-2"
            value={procedural}
            maxLength={MAX_CHARS}
            onChange={(e) => setProcedural(e.target.value)}
          />
          <div className="text-right text-sm text-gray-500">
            {procedural.length}/{MAX_CHARS}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600">
        <b>Unidad:</b> {unitLabel} · <b>{week}</b>
      </p>
    </section>
  );
}
