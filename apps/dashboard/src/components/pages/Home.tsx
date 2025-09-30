export default function SyllabusEditor() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
        {/* Header with Steps */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Editar Silabo
          </h1>

          {/* Progress Steps */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white font-semibold">
              1
            </div>
            <div className="h-0.5 w-8 bg-gray-300"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold bg-white">
              2
            </div>
            <div className="h-0.5 w-8 bg-gray-300"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold bg-white">
              3
            </div>
            <div className="h-0.5 w-8 bg-gray-300"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold bg-white">
              4
            </div>
            <div className="h-0.5 w-8 bg-gray-300"></div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 font-semibold bg-white">
              5
            </div>
          </div>
        </div>

        {/* Sumilla Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              2. Sumilla
            </h2>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <textarea
            className="w-full h-40 p-3 border border-gray-300 rounded-md text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="Es de carácter aplicativo, permitirá al estudiante desarrollar su capacidad para resolver una situación problemática real a través del desarrollo de un proyecto altamente innovador, aplicar las competencias de iniciativa, investigación, creatividad, para el diseño de la solución; responsabilidad, compromiso y autogestión del equipo para gestionar con éxito el proyecto; autoexigencia para dar respuesta a los parámetros de calidad y mejora de la solución; comunicación y reflexión para difundir los resultados del proyecto. El profesor asume diferentes roles en el desarrollo del curso, sin embargo, mantiene el rol de guía y observador de los estudiantes en la aplicación de conceptos y su involucramiento creativo."
          />
        </div>

        {/* Unidades Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-base font-semibold text-gray-800">
              2. Unidades
            </h2>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Units Grid */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Unidad 1
                </span>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Diseño de actividades interactivas"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Unidad 2
                </span>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Gestión de proyectos y aplicaciones modernas"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Unidad 3
                </span>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Integración y entrega continua"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Unidad 4
                </span>
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Presentación y evaluación de resultados"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
