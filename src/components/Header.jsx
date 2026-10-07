import { INSTAGRAM_URL } from '../config.js';

export default function Header() {
  return (
    <header>
      <a className="brand" href="#">lashes<span>by anise</span></a>
      <nav aria-label="Main navigation">
        <a href="#styles">Styles</a>
        <a href="#studio">Studio</a>
        <a href="#care">Lash care</a>
      </nav>
      <a className="nav-book" href={INSTAGRAM_URL} target="_blank" rel="noopener">Book an appointment</a>
    </header>
  );
}
