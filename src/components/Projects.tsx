import type { CSSProperties } from "react";
import { demos, production, type Project } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import { ArrowUpRight } from "./Icons";
import SnakeCard from "./SnakeCard";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const style = {
    "--reveal-delay": `${index * 90}ms`,
    "--snake-delay": `${index * -1.7}s`,
  } as CSSProperties;

  return (
    <div ref={ref} className="reveal" style={style}>
      <SnakeCard>
        <div className="card-top">
          <h3 className="card-title">{project.name}</h3>
          <span className="badge">
            {project.status === "Production" && (
              <span className="badge-dot" aria-hidden="true" />
            )}
            {project.status}
          </span>
        </div>
        <p className="card-desc">{project.description}</p>
        <div className="stack-chips">
          {project.stack.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-links">
          <a
            href={project.url}
            className="card-link"
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${project.name}`}
          >
            Visit site
            <ArrowUpRight />
          </a>
          {project.appUrl && (
            <a
              href={project.appUrl}
              className="card-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the ${project.name} app`}
            >
              Open app
              <ArrowUpRight />
            </a>
          )}
        </div>
      </SnakeCard>
    </div>
  );
}

export default function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const demosRef = useReveal<HTMLDivElement>();

  return (
    <section id="work">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <span className="eyebrow">Work</span>
          <h2 className="section-title">In production</h2>
          <p className="section-sub">
            Real platforms with real users, built end to end and running in
            production today.
          </p>
        </div>
        <div className="grid-production">
          {production.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
        <div ref={demosRef} className="demos-head reveal">
          <h3 className="demos-title">Client demo sites</h3>
          <p className="section-sub">
            A few of the demo sites I have built for clients.
          </p>
        </div>
        <div className="grid-demos">
          {demos.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
