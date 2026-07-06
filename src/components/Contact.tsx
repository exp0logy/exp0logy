import { useReveal } from "../hooks/useReveal";
import { Mail } from "./Icons";
import SnakeCard from "./SnakeCard";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact">
      <div className="container">
        <div ref={ref} className="reveal">
          <SnakeCard className="contact-card">
            <span className="eyebrow">Contact</span>
            <h2 className="contact-title">Let's build something</h2>
            <p className="contact-sub">
              Need a website, a web app, or a full platform shipped to
              production? Send me an email and I will get back to you.
            </p>
            <a href="mailto:exp0logy@outlook.com" className="btn btn-primary">
              <Mail />
              exp0logy@outlook.com
            </a>
          </SnakeCard>
        </div>
      </div>
    </section>
  );
}
