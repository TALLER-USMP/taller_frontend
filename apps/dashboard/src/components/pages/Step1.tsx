import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Plus, MoreHorizontal } from "lucide-react";

// Interface para los datos del Paso 1
export interface Step1Data {
  courseName: string;
  courseCode: string;
  summary: string;
  conceptualContents: string[];
  units: string[];
}

// Interface para errores de validación
interface ValidationErrors {
  courseName?: string;
  courseCode?: string;
  summary?: string;
}

interface Step1Props {
  data: Step1Data;
  onChange: (data: Step1Data) => void;
}

export default function Step1({ data, onChange }: Step1Props) {
  const [summary, setSummary] = useState(data.summary || "");
  const [newUnit, setNewUnit] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Función de validación
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!data.courseName.trim()) {
      newErrors.courseName = "El nombre del curso es requerido";
    } else if (data.courseName.trim().length < 5) {
      newErrors.courseName = "El nombre del curso debe tener al menos 5 caracteres";
    }

    if (!data.courseCode.trim()) {
      newErrors.courseCode = "El código del curso es requerido";
    } else if (!/^[A-Z0-9]+$/.test(data.courseCode.trim())) {
      newErrors.courseCode = "El código debe contener solo letras mayúsculas y números";
    }

    if (!summary.trim()) {
      newErrors.summary = "La sumilla es requerida";
    } else if (summary.trim().length < 50) {
      newErrors.summary = "La sumilla debe tener al menos 50 caracteres";
    } else if (summary.trim().length > 400) {
      newErrors.summary = "La sumilla no puede exceder 400 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSummaryChange = (value: string) => {
    setSummary(value);
    onChange({
      ...data,
      summary: value,
    });
    
    // Limpiar error de sumilla si se corrige
    if (errors.summary && value.trim().length >= 50 && value.trim().length <= 400) {
      setErrors(prev => ({ ...prev, summary: undefined }));
    }
  };

  const handleCourseNameChange = (value: string) => {
    onChange({
      ...data,
      courseName: value,
    });
    
    // Limpiar error si se corrige
    if (errors.courseName && value.trim().length >= 5) {
      setErrors(prev => ({ ...prev, courseName: undefined }));
    }
  };

  const handleCourseCodeChange = (value: string) => {
    onChange({
      ...data,
      courseCode: value,
    });
    
    // Limpiar error si se corrige
    if (errors.courseCode && /^[A-Z0-9]+$/.test(value.trim())) {
      setErrors(prev => ({ ...prev, courseCode: undefined }));
    }
  };

  const addUnit = () => {
    if (newUnit.trim()) {
      onChange({
        ...data,
        units: [...data.units, newUnit.trim()],
      });
      setNewUnit("");
    }
  };

  const removeUnit = (index: number) => {
    onChange({
      ...data,
      units: data.units.filter((_, i) => i !== index),
    });
  };

  const conceptualContents = [
    "Proceso del producto con metodología ágil: fases de inicio, planificación y estimación",
    "Proceso del producto con metodología ágil: fase de desarrollo",
    "Proceso del producto con metodología ágil: fase de revisión y retrospectiva",
    "Proceso del producto con metodología ágil: fase de lanzamiento",
  ];

  return (
    <div className="space-y-8">
      {/* 1. Datos Generales */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">1. Datos Generales</h3>
        <div className="space-y-3">
          <div>
            <Label htmlFor="course-name" className="text-sm font-medium text-gray-700">
              Nombre del Curso
            </Label>
            <Input
              id="course-name"
              value={data.courseName}
              onChange={(e) => handleCourseNameChange(e.target.value)}
              placeholder="INGENIERIA DE SOFTWARE II COD: 09013707052"
              className={`mt-1 ${errors.courseName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            />
            {errors.courseName && (
              <p className="text-red-500 text-xs mt-1">{errors.courseName}</p>
            )}
          </div>
        </div>
      </div>

      {/* 1. Sumilla */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">1. Sumilla</h3>
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Contenido de la Sumilla
          </Label>
          <Textarea
            value={summary}
            onChange={(e) => handleSummaryChange(e.target.value)}
            placeholder="Esta especialización está diseñada para estudiantes que desean profundizar en el desarrollo de software utilizando metodologías ágiles. Los estudiantes aprenderán a trabajar en equipos colaborativos, aplicar principios de desarrollo ágil y crear productos de software de alta calidad. El curso incluye actividades prácticas que simulan entornos de trabajo reales, incluyendo fases de inicio, planificación, implementación, revisión, retrospectiva y lanzamiento. Los estudiantes utilizarán herramientas y metodologías modernas como desarrollo ágil, diseño centrado en el usuario, programación en parejas, pruebas de software automatizadas y gestión de proyectos ágiles."
            className={`min-h-[120px] resize-none ${errors.summary ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
            maxLength={400}
          />
          {errors.summary && (
            <p className="text-red-500 text-xs mt-1">{errors.summary}</p>
          )}
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {summary.length}/400
            </div>
            <Button 
              variant="destructive" 
              size="sm"
              onClick={() => {
                if (validateForm()) {
                  // Aquí se podría implementar la lógica de guardado
                  console.log("Guardando datos del Paso 1...", data);
                  alert("Datos guardados correctamente");
                } else {
                  alert("Por favor corrige los errores antes de guardar");
                }
              }}
            >
              GUARDAR
            </Button>
          </div>
        </div>
      </div>

      {/* Contenidos Conceptuales del Curso */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Contenidos Conceptuales del Curso
        </h3>
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="space-y-3">
            {conceptualContents.map((content, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded border border-gray-200"
              >
                <span className="text-sm text-gray-700">
                  {index + 1}. {content}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unidades */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Unidades</h3>
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              value={newUnit}
              onChange={(e) => setNewUnit(e.target.value)}
              placeholder="Agregar Unidades"
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addUnit}
              className="px-3"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Lista de unidades agregadas */}
          {data.units.length > 0 && (
            <div className="space-y-2">
              {data.units.map((unit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded border"
                >
                  <span className="text-sm text-gray-700">{unit}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeUnit(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
