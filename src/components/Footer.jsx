import { INSTAGRAM_URL } from '../config.js';

export default function Footer() {
  return (
    <footer>
      <a className="brand" href="#">lashes<span>by anise</span></a>
      <p>A little magic in every glance.</p>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Instagram</a>
      <span>© 2026 Lashes by Anise</span>
    </footer>
  );
}
