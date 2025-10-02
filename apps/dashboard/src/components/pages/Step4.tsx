import { useState } from "react";
import { MoreVertical } from "lucide-react";

interface MethodologicalStrategy {
  strategy: string;
  week: string;
  method: string;
}

interface Step4Props {
  data: MethodologicalStrategy;
  onChange: (data: MethodologicalStrategy) => void;
}

export default function Step4({ data, onChange }: Step4Props) {
  const [formData, setFormData] = useState<MethodologicalStrategy>(data);

  const updateFormData = (newData: Partial<MethodologicalStrategy>) => {
    const updated = { ...formData, ...newData };
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="text-lg font-semibold">4. Estrategias metodológicas</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-4">
        {/* Columna izquierda */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Qué estrategia metodológica
          </label>
          <select
            value={formData.week}
            onChange={(e) => updateFormData({ week: e.target.value })}
            className="w-full borderrounded-lg bg-black text-white rounded-lg p-2 mb-4"
          >
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
            <option value="Semana 3">Semana 3</option>
            <option value="Semana 4">Semana 4</option>
          </select>

          {/* Textarea descripción */}
          <label className="block text-sm font-medium mb-2">
            Consiste en...
          </label>
          <div className="relative">
            <textarea
              value={formData.strategy}
              onChange={(e) => updateFormData({ strategy: e.target.value })}
              rows={5}
              maxLength={400}
              className="w-full border rounded-lg p-3 min-h-[150px] resize-none text-sm"
            />
            <button
              type="button"
              onClick={() => console.log("Agregar nuevo elemento")}
              className="absolute bottom-3 right-2 w-6 h-6 flex items-center justify-center 
               rounded-full bg-blue-500 text-white text-lg shadow hover:bg-blue-600"
            >
              +
            </button>
          </div>
          <div className="text-right text-sm text-gray-400 mt-1">
            {formData.strategy.length}/400
          </div>
        </div>

        {/* Columna derecha: Lista de contenidos */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium">
              1. Lista de contenidos conceptuales
            </h3>
            <span className="text-sm text-gray-500">{formData.week}</span>
          </div>

          <div className="space-y-3">
            {[
              "Introducción a la asignatura",
              "Repaso de metodologías",
              "Formación de equipos en proyectos",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center bg-gray-200 rounded-lg px-4 py-2"
              >
                <span>{item}</span>
                <MoreVertical className="text-gray-500 w-5 h-5 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
