import { useReveal } from "../hooks/useReveal";
import { Check, Shield } from "./Icons";

const PRINCIPLES = [
  { icon: Check, text: "Every line reviewed and understood before it ships" },
  { icon: Shield, text: "Security first: RLS, least privilege, clean secret hygiene" },
  { icon: Check, text: "Zero secrets ever pushed to production. Ever." },
  { icon: Check, text: "Owns the full stack: schema, API, UI, and infrastructure" },
];

export default function About() {
  const textRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">Not a vibe coder</h2>
        </div>
        <div className="about-grid">
          <div ref={textRef} className="about-text reveal">
            <p>
              I use AI to move fast, but I am not along for the ride.{" "}
              <strong>I read the code.</strong> Every schema change, every auth
              path, every deploy script goes through my hands and my review
              before it goes anywhere near production.
            </p>
            <p>
              That is the difference between vibe coding and{" "}
              <strong>directing AI with engineering judgment</strong>: rapid
              deployment without giving up correctness or security. I know what
              the generated code does, why it does it, and where it breaks.
            </p>
            <p>
              The result is production software shipped at startup speed, with
              row-level security in the database, least-privilege access
              everywhere, and a clean record:{" "}
              <strong>I have never pushed a secret to prod.</strong>
            </p>
          </div>
          <div ref={listRef} className="about-list reveal" style={{ ["--reveal-delay" as string]: "150ms" }}>
            {PRINCIPLES.map(({ icon: Icon, text }) => (
              <div key={text} className="about-item">
                <Icon />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
