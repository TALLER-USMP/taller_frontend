import StepSumilla from "./steps/StepSumilla";
import StepWeeks from "./steps/StepWeeks"; // 👈 nuevo paso
import { useState } from "react";

export default function SyllabusWizard({ id }: { id: string }) {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Sumilla", node: <StepSumilla /> },
    { title: "Unidades", node: <StepWeeks /> }, // 👈 agregado
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Editar Sílabos (id: {id})</h1>

      <div className="flex gap-2 mb-6">
        {steps.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setStep(i)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              step === i ? "bg-black text-white" : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="mb-6">{steps[step].node}</div>
    </div>
  );
}
