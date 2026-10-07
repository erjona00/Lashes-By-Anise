import { INSTAGRAM_URL } from '../config.js';

export default function Contact() {
  return (
    <section className="contact">
      <p className="eyebrow">TIME FOR A LITTLE SELF-CARE</p>
      <h2>Your new look<br />starts with a <em>message.</em></h2>
      <a className="button dark" href={INSTAGRAM_URL} target="_blank" rel="noopener">Book an appointment</a>
      <p className="handle">@lashesbyanise</p>
    </section>
  );
}
