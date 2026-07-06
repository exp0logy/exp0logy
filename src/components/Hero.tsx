import { ArrowUpRight } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="hero-content">
        <span className="hero-badge snake-ring">
          <span className="badge-dot" aria-hidden="true" />
          Available for client work
        </span>
        <h1 className="hero-name">Josh Wallace</h1>
        <div className="roles" role="text" aria-label="Full-stack developer">
          <ul className="roles-list" aria-hidden="true">
            <li>
              Full-Stack <span className="accent-word">Developer</span>
            </li>
            <li>
              SaaS <span className="accent-word">Builder</span>
            </li>
            <li>
              Ships to <span className="accent-word">Production</span>
            </li>
            <li>
              Full-Stack <span className="accent-word">Developer</span>
            </li>
          </ul>
        </div>
        <p className="hero-sub">
          I design, build, and ship software end to end. React on the front,
          Node and Postgres behind it, CI/CD all the way to production.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary">
            View my work
            <ArrowUpRight />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
