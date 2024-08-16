const navItems = ["About", "Services", "Works", "Reviews", "Contact"];

export default function Nav() {
  return (
    <nav className="navigation">
      <div className="logo-block">
        <a href="/" className="logo-block-a" aria-label="Back to Home">
          <img src="images/logo.png" alt="Sumin" />
        </a>
      </div>
      <div className="nav-link-block">
        {navItems.map((item, index) => (
          <a href={`/#${item.toLowerCase()}`} className="nav-link" key={index}>
            <span className="link1">{item}</span>
            <span className="link2">{item}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
