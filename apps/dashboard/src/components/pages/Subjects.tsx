import { useState } from "react";
import { Eye, X, Pencil, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Status = "green" | "red" | "yellow";

interface Subject {
  id: number;
  name: string;
  status: Status;
  thumbnail: string;
  note: string;
}

const subjectsData: Subject[] = [
  {
    id: 1,
    name: "Investigación de Sistemas de Información",
    status: "green",
    thumbnail: "/sylabus1.png",
    note: "",
  },
  {
    id: 2,
    name: "Taller de Proyectos",
    status: "red",
    thumbnail: "/sylabus2.png",
    note: "Debe corregir la bibliografía y los resultados de aprendizaje.",
  },
  {
    id: 3,
    name: "Algoritmos 2",
    status: "yellow",
    thumbnail: "/sylabus3.png",
    note: "",
  },
];

const statusMap: Record<Status, { color: string; label: string }> = {
  green: {
    color: "bg-green-500",
    label: "Aprobado",
  },
  red: {
    color: "bg-red-500",
    label: "Modificaciones pendientes",
  },
  yellow: {
    color: "bg-yellow-400",
    label: "Pendiente de aprobación",
  },
};

export default function Subjects() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; subject?: Subject }>({
    open: false,
  });
  const navigate = useNavigate(); // Agrega esto

  const filtered = subjectsData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mis Asignaciones</h1>

      {/* Buscador con ícono */}
      <div className="mb-8 flex items-center gap-2">
        <div className="relative w-80">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-9 py-2 w-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-5">
        {filtered.map((subject) => (
          <div
            key={subject.id}
            className="flex items-center justify-between px-7 py-5 bg-white border border-gray-300 rounded-2xl transition"
          >
            <span className="text-base font-semibold text-gray-800">
              {subject.name}
            </span>
            <div className="flex items-center gap-4">
              {/* Íconos de estado y acciones */}
              {subject.status === "red" && (
                <button
                  onClick={() =>
                    navigate(
                      `/create-course?subject=${encodeURIComponent(subject.name)}`,
                    )
                  }
                  aria-label="Editar sílabo"
                >
                  <Pencil className="w-6 h-6 text-blue-500" />
                </button>
              )}
              <span
                className={`w-5 h-5 rounded-full border border-gray-300 ${statusMap[subject.status].color}`}
                title={statusMap[subject.status].label}
              ></span>
              {(subject.status === "green" || subject.status === "red") && (
                <button
                  className="flex items-center"
                  onClick={() => setModal({ open: true, subject })}
                  aria-label="Ver sílabo"
                >
                  <Eye className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal.open && modal.subject && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 relative w-full max-w-md text-center">
            <button
              className="absolute top-4 right-4"
              onClick={() => setModal({ open: false })}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold mb-4">{modal.subject.name}</h2>
            <img
              src={modal.subject.thumbnail}
              alt="Miniatura del sílabo"
              className="mx-auto mb-4 border shadow max-h-64"
            />
            {modal.subject.status === "green" && (
              <a
                href={modal.subject.thumbnail}
                download
                className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
              >
                Descargar
              </a>
            )}
            {modal.subject.status === "red" && (
              <>
                <div className="text-red-600 font-medium mb-2">
                  {modal.subject.note}
                </div>
                <a
                  href={modal.subject.thumbnail}
                  download
                  className="inline-block bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition"
                >
                  Descargar
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
