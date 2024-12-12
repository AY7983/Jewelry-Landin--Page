import "./Service.css";
export const ServicesPage = () => {
  return (
    <div className="services-page">
      <section id="service">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Background Removal</h3>
            <p>Eliminate distractions with clean, professional backgrounds.</p>
          </div>
          <div className="service-item">
            <h3>Polish and Shine</h3>
            <p>Remove scratches and tarnishes to highlight the brilliance of your jewelry.</p>
          </div>
          <div className="service-item">
            <h3>Color Correction</h3>
            <p>Ensure accurate and vibrant colors for gemstones and metals.</p>
          </div>
          <div className="service-item">
            <h3>Gemstone Enhancement</h3>
            <p>Make diamonds and gemstones sparkle like never before.</p>
          </div>
          <div className="service-item">
            <h3>Custom Edits</h3>
            <p>Tailored retouching services to meet your unique requirements.</p>
          </div>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Make Your Jewelry Shine?</h2>
        <p>Contact us today for high-quality jewelry retouching services.</p>
        <button onClick={() => window.location.href = "/contact"}>Get in Touch</button>
      </section>
    </div>
  );
};

export default ServicesPage;
