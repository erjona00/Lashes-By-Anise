import { INSTAGRAM_URL } from '../config.js';

export default function LashStyles() {
  return (
    <section id="styles" className="styles section">
      <div className="section-head">
        <div>
          <p className="eyebrow">FIND YOUR LOOK</p>
          <h2>You choose the feel.<br />We perfect the <em>details.</em></h2>
        </div>
        <p>Soft, bold, or a little of both? Explore the looks and message us to find the right lash application for you.</p>
      </div>
      <div className="style-grid">
        <article>
          <span className="number">01</span>
          <div className="style-title">
            <h3>Natural</h3>
            <span>THE EVERYDAY LOOK</span>
          </div>
          <p>A subtle touch to enhance your eyes. For those who love effortless elegance and a clean, natural look.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Ask about this style</a>
        </article>
        <article>
          <span className="number">02</span>
          <div className="style-title">
            <h3>Wispy</h3>
            <span>SOFT & EXPRESSIVE</span>
          </div>
          <p>Airy texture and beautifully blended lengths. A delicate look with a little extra character.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Ask about this style</a>
        </article>
        <article>
          <span className="number">03</span>
          <div className="style-title">
            <h3>Volume</h3>
            <span>A LITTLE MORE DRAMA</span>
          </div>
          <p>A fuller, more defined look. For the days when you want your eyes to take centre stage.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">Ask about this style</a>
        </article>
      </div>
    </section>
  );
}
