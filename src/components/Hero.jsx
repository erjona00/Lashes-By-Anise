import { INSTAGRAM_URL } from '../config.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">LASH STUDIO · LASHES BY ANISE</p>
        <h1>Beauty in<br />every <em>glance.</em><span className="headline-spark" aria-hidden="true">✳</span></h1>
        <p className="intro">Lashes that express you. From natural elegance to a look full of character — find the style that makes you feel like yourself.</p>
        <a className="button" href={INSTAGRAM_URL} target="_blank" rel="noopener">Book on Instagram</a>
        <a className="text-link" href="#styles">Discover your style</a>
        <div className="hero-note">
          <span className="small-star">✧</span>
          <p>One little detail.<br />A whole new feeling.</p>
        </div>
      </div>
      <div className="hero-art">
      <div className="hero-visual">
        <img src="/images/lash-editorial.png" alt="Illustrative close-up of long, styled lash extensions" />
        <span className="photo-tag">THE ART OF LASHES</span>
        <div className="photo-caption">
          Made for<br /><em>your eyes.</em>
        </div>
      </div>
      <span className="beauty-sticker">A little lash.<br />A lot of attitude.</span>
      <span className="image-index">THE LASH EDIT</span>
      </div>
      <span className="vertical-label">YOUR EVERYDAY BEAUTY RITUAL</span>
    </section>
  );
}
