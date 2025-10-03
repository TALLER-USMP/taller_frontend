export default function StepSumilla() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">2. Sumilla</h2>
      <textarea
        className="w-full border rounded p-3"
        rows={6}
        placeholder="Es de carácter aplicativo..."
      />
      <h3 className="text-lg font-semibold">2. Unidades</h3>
      <div className="grid grid-cols-2 gap-4">
        <input className="border rounded p-2" placeholder="Unidad I: Título" />
        <input className="border rounded p-2" placeholder="Unidad II: Título" />
        <input
          className="border rounded p-2"
          placeholder="Unidad III: Título"
        />
        <input className="border rounded p-2" placeholder="Unidad IV: Título" />
      </div>
    </div>
  );
}
