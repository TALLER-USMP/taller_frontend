import { useState } from "react";
import { MoreVertical } from "lucide-react";

interface DidacticResources {
  resources: string;
  resourceType: string;
}

interface Step5Props {
  data: DidacticResources;
  onChange: (data: DidacticResources) => void;
}

export default function Step5({ data, onChange }: Step5Props) {
  const [formData, setFormData] = useState<DidacticResources>(data);

  const updateFormData = (newData: Partial<DidacticResources>) => {
    const updated = { ...formData, ...newData };
    setFormData(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="text-lg font-semibold">5. Recursos didácticos</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-4">
        {/* Columna izquierda */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Qué tipo de recursos deseas seleccionar
          </label>
          <select
            value={formData.resourceType}
            onChange={(e) => updateFormData({ resourceType: e.target.value })}
            className="w-full border rounded-lg bg-black text-white p-2 mb-4"
          >
            <option value="Libro">Libro</option>
            <option value="Artículo">Artículo</option>
            <option value="Video">Video</option>
            <option value="Presentación">Presentación</option>
            <option value="Otro">Otro</option>
          </select>

          {/* Textarea descripción */}
          <label className="block text-sm font-medium mb-2">
            Recursos didácticos
          </label>
          <div className="relative">
            <textarea
              value={formData.resources}
              onChange={(e) => updateFormData({ resources: e.target.value })}
              rows={5}
              maxLength={400}
              className="w-full border rounded-lg p-3 min-h-[150px] resize-none text-sm"
            />
            <button
              type="button"
              onClick={() => console.log("Agregar nuevo recurso")}
              className="absolute bottom-3 right-2 w-6 h-6 flex items-center justify-center 
               rounded-full bg-blue-500 text-white text-lg shadow hover:bg-blue-600"
            >
              +
            </button>
          </div>
          <div className="text-right text-sm text-gray-400 mt-1">
            {formData.resources.length}/400
          </div>
        </div>

        {/* Columna derecha: Lista de recursos */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium">
              1. Lista de recursos didácticos
            </h3>
          </div>

          <div className="space-y-3">
            {[
              "Libro de fundamentos de software",
              "Artículo sobre metodologías ágiles",
              "Video introductorio de Scrum",
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
