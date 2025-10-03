import { useState } from "react";
import Stepper from "./ui/Stepper";
import StepSumilla from "./steps/StepSumilla";
import StepWeeks from "./steps/StepWeeks";
import StepActividades from "./steps/StepActividades";
import StepBibliografia from "./steps/StepBibliografia";
import StepElectronicas from "./steps/StepElectronicas";

export default function SyllabusWizard({ id }: { id: string }) {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Sumilla", node: <StepSumilla /> },
    { title: "Unidades / Semanas", node: <StepWeeks /> },
    { title: "Actividades", node: <StepActividades /> },
    { title: "Bibliográficas", node: <StepBibliografia /> },
    { title: "Electrónicas", node: <StepElectronicas /> },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">Editar Sílabo (id: {id})</h1>
      <Stepper step={step} total={steps.length} />

      <div className="mb-6 border rounded-xl p-4 bg-white">
        {steps[step].node}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setStep((v) => Math.max(0, v - 1))}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
          disabled={step === 0}
        >
          Atrás
        </button>
        <div className="flex gap-2">
          {steps.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setStep(i)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                step === i ? "bg-black text-white" : "bg-white"
              }`}
              title={s.title}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => setStep((v) => Math.min(steps.length - 1, v + 1))}
          className="px-4 py-2 border rounded-lg disabled:opacity-50"
          disabled={step === steps.length - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
