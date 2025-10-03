import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Subjects from "./components/pages/Subjects";
import CreateCourse from "./components/pages/CreateCourse";

// 🔥 Importamos tu nueva página
import SyllabusPage from "./pages/syllabus/[id]";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Inicio">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/subjects"
          element={
            <Layout title="Asignaturas">
              <Subjects />
            </Layout>
          }
        />
        <Route
          path="/create-course"
          element={
            <Layout title="Crear nuevo curso">
              <CreateCourse />
            </Layout>
          }
        />

        {/* 🚀 Nueva ruta para el editor de sílabos */}
        <Route
          path="/syllabus/:id"
          element={
            <Layout title="Editar sílabo">
              <SyllabusPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
