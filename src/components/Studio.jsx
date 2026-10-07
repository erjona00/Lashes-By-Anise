import { INSTAGRAM_URL } from '../config.js';

export default function Studio() {
  return (
    <section id="studio" className="studio section">
      <div className="studio-mark" aria-hidden="true">
        a
        <span>✧</span>
        <small>THE ANISE TOUCH</small>
      </div>
      <div>
        <p className="eyebrow">LASHES BY ANISE</p>
        <h2>Your beauty,<br />with a <em>personal touch.</em></h2>
        <p>Every pair of eyes has its own character. Your look begins with a conversation: what you love, what you want, and how you want to feel.</p>
        <p>Send us an inspiration photo or explore the studio’s work on Instagram. Together, we’ll find the direction for your look.</p>
        <a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noopener">Meet the studio on Instagram</a>
      </div>
    </section>
  );
}
