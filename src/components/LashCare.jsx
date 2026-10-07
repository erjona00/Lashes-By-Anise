export default function LashCare() {
  return (
    <section id="care" className="care section">
      <div>
        <p className="eyebrow">BEFORE YOUR APPOINTMENT</p>
        <h2>The details that<br />make a <em>difference.</em></h2>
        <p>It all starts with a simple message.</p>
      </div>
      <div className="faqs">
        <details open={true}>
          <summary>How do I book an appointment?</summary>
          <p>Message @lashesbyanise on Instagram with the style you love and your preferred day. Your appointment is confirmed once the studio replies.</p>
        </details>
        <details>
          <summary>Which style is right for me?</summary>
          <p>Send a photo of a look you love and let us know whether you prefer a natural or more defined effect. The studio will help you choose.</p>
        </details>
        <details>
          <summary>Where can I find prices and availability?</summary>
          <p>For current prices, available services, the studio address, and opening hours, contact the studio directly on Instagram.</p>
        </details>
        <details>
          <summary>How do I care for my lashes afterwards?</summary>
          <p>Ask for aftercare instructions at your appointment. Follow the studio’s guidance for your lash application and the products used.</p>
        </details>
      </div>
    </section>
  );
}
