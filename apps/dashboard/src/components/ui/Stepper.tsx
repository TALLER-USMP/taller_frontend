type Base = { onStepClick?: (step: number) => void };
type LegacyProps = Base & { step: number; total?: number };
type NewProps = Base & { currentStep: number; totalSteps?: number };
type Props = LegacyProps | NewProps;

function isNewProps(p: Props): p is NewProps {
  return "currentStep" in p || "totalSteps" in p;
}

export default function Stepper(props: Props) {
  const currentStep = isNewProps(props)
    ? props.currentStep
    : (props as LegacyProps).step;

  const total = isNewProps(props)
    ? (props.totalSteps ?? 5)
    : ((props as LegacyProps).total ?? 5);

  const onStepClick = props.onStepClick;

  const items = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="flex items-center gap-6 my-6">
      {items.map((i) => (
        <div key={i} className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => onStepClick?.(i)}
            className={[
              "w-12 h-12 rounded-full flex items-center justify-center border-2 text-lg focus:outline-none",
              i === currentStep
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-black border-gray-300",
            ].join(" ")}
            aria-current={i === currentStep ? "step" : undefined}
            aria-label={`Paso ${i + 1}`}
          >
            {i + 1}
          </button>
          {i < items.length - 1 && <div className="w-12 h-[2px] bg-gray-300" />}
        </div>
      ))}
    </div>
  );
}
