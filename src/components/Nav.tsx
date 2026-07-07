export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Josh Wallace, back to top">
          <span className="logo-mark" aria-hidden="true">
            JW
          </span>
          Josh Wallace
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
