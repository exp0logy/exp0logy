const TECH = [
  "React",
  "TypeScript",
  "Node.js",
  "Postgres",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "Vite",
  "SQL",
  "CI/CD",
];

function Track() {
  return (
    <div className="marquee-item">
      {TECH.map((tech) => (
        <span key={tech} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
          {tech}
          <span className="marquee-dot" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-section" aria-label="Technologies I work with">
      <div className="marquee">
        <div className="marquee-track">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
