import type { CSSProperties, MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

function setSpotlight(e: MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function SnakeCard({ children, className = "", style }: Props) {
  return (
    <div
      className={`snake-ring snake-card ${className}`}
      style={style}
      onMouseMove={setSpotlight}
    >
      <div className="card-glow" />
      {children}
    </div>
  );
}
