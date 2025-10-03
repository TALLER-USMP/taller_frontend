export default function StepSumilla() {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">
        2. Sumilla <span title="ayuda">ℹ️</span>
      </h2>
      <div className="rounded-xl border border-gray-300 p-5">
        <p className="leading-7 text-gray-800">
          Es de carácter aplicativo; permitirá al estudiante desarrollar su
          capacidad para resolver una situación problemática real a través del
          desarrollo de un proyecto altamente innovador…
        </p>
      </div>
      <h2 className="text-xl font-bold mt-6">
        2. Unidades <span title="ayuda">ℹ️</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Unidad I: Título",
          "Unidad II: Título",
          "Unidad III: Título",
          "Unidad IV: Título",
        ].map((txt) => (
          <input
            key={txt}
            className="border rounded-md px-3 py-2"
            placeholder={txt}
          />
        ))}
      </div>
    </section>
  );
}
