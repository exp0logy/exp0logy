import { GitHub, Mail } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Josh Wallace. Built with React and handwritten CSS animations.</span>
        <div className="footer-links">
          <a
            href="https://github.com/exp0logy"
            className="footer-link"
            aria-label="GitHub profile"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="mailto:jwallace@greaterwestern.com.au"
            className="footer-link"
            aria-label="Email Josh Wallace"
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
