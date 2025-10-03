import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

const UNIDADES = [
  "I. DISEÑO DE SOLUCIONES INNOVADORAS",
  "II. GESTIÓN DE PROYECTOS Y APLICACIONES MODERNAS",
  "III. INTEGRACIÓN Y ENTREGA CONTINUA",
  "IV. PRESENTACIÓN Y EVALUACIÓN DE RESULTADOS",
];

const SEMANAS = Array.from({ length: 16 }, (_, i) => `Semana ${i + 1}`);

function Counter({ value, max = 400 }: { value: string; max?: number }) {
  const count = useMemo(() => value.length, [value]);
  return (
    <span className="absolute right-3 bottom-2 text-gray-500 text-sm">
      {count}/{max}
    </span>
  );
}

export default function StepWeeks() {
  const [unidad, setUnidad] = useState(UNIDADES[0]);
  const [semana, setSemana] = useState(SEMANAS[0]);
  const [conceptual, setConceptual] = useState(
    "El taller y sus objetivos generales. El modelo de trabajo. Planteamiento del problema. El pensamiento de diseño y sus técnicas. Las necesidades del público objetivo y del entorno para entender a los usuarios.",
  );
  const [procedimental, setProcedimental] = useState(
    "El taller y sus objetivos generales. El modelo de trabajo. Planteamiento del problema. El pensamiento de diseño y sus técnicas. Las necesidades del público objetivo y del entorno para entender a los usuarios.",
  );

  return (
    <div className="space-y-8">
      {/* 4. Unidades */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight">4. Unidades</h3>

        <div className="relative">
          <select
            value={unidad}
            onChange={(e) => setUnidad(e.target.value)}
            className="
              w-full appearance-none border rounded-xl px-4 py-4 pr-12
              text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300
            "
          >
            {UNIDADES.map((u) => (
              <option key={u} value={u}>{`Unidad: ${u}`}</option>
            ))}
          </select>

          <ChevronDown
            size={20}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          />
        </div>
      </div>

      {/* 4. Semanas */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight">4. Semanas</h3>
        <p className="text-sm text-gray-600">Selecciona una semana</p>

        <div className="relative inline-block">
          <select
            value={semana}
            onChange={(e) => setSemana(e.target.value)}
            className="
              appearance-none rounded-full px-5 py-2.5 pr-12
              bg-black text-white font-semibold
              focus:outline-none
            "
          >
            {SEMANAS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>
      </div>

      {/* Textareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Contenidos conceptuales</h4>
          <div className="relative">
            <textarea
              rows={9}
              maxLength={400}
              value={conceptual}
              onChange={(e) => setConceptual(e.target.value)}
              className="w-full border rounded-xl p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="El taller y sus objetivos generales..."
            />
            <Counter value={conceptual} />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-lg">Contenidos Procedimentales</h4>
          <div className="relative">
            <textarea
              rows={9}
              maxLength={400}
              value={procedimental}
              onChange={(e) => setProcedimental(e.target.value)}
              className="w-full border rounded-xl p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="El taller y sus objetivos generales..."
            />
            <Counter value={procedimental} />
          </div>
        </div>
      </div>
    </div>
  );
}
