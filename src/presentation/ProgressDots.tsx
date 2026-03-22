type ProgressDotsProps = {
  total: number;
  active: number;
};

export function ProgressDots({ total, active }: ProgressDotsProps) {
  return (
    <div className="progress-dots" aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`progress-dot ${i === active ? "is-active" : ""}`}
        />
      ))}
    </div>
  );
}