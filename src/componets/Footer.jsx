import { useState } from "react";


const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="footer-wrap">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <h2>🍴 Order Now</h2>
          <p>
            Your favourite food, ready in minutes.
            Delivery 24/7 across the city.
          </p>
          <div className="social-row">
            {[
              { icon: "ti-brand-instagram", label: "Instagram" },
              { icon: "ti-brand-facebook", label: "Facebook" },
              { icon: "ti-brand-tiktok", label: "TikTok" },
              { icon: "ti-brand-twitter", label: "Twitter" },
            ].map(({ icon, label }) => (
              <a key={label} href="#" className="social-btn" aria-label={label}>
                <i className={`ti ${icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="app-badges">
            <div className="app-badge">
              <i className="ti ti-brand-apple" aria-hidden="true" /> App Store
            </div>
            <div className="app-badge">
              <i className="ti ti-brand-google-play" aria-hidden="true" /> Google Play
            </div>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {[
              { icon: "ti-flame", label: "Popular" },
              { icon: "ti-map-pin", label: "Near You" },
              { icon: "ti-discount-2", label: "Offers" },
              { icon: "ti-tool-kitchen-2", label: "Cuisines" },
              { icon: "ti-star", label: "Top Rated" },
            ].map(({ icon, label }) => (
              <li key={label}>
                <a href="#">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            {[
              { icon: "ti-help-circle", label: "Help" },
              { icon: "ti-package", label: "Track Order" },
              { icon: "ti-arrows-exchange", label: "Returns" },
              { icon: "ti-message-circle", label: "Live Chat" },
              { icon: "ti-building-store", label: "Restaurants" },
            ].map(({ icon, label }) => (
              <li key={label}>
                <a href="#">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Payments */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <div className="newsletter-box">
            <p>Get exclusive offers and new restaurants straight to your inbox.</p>
            <div className="nl-input-row">
              <input
                type="email"
                placeholder="your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email για newsletter"
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>

          <div className="payments-section">
            <h4>Payments</h4>
            <div className="payment-row">
              {[
                { icon: "ti-credit-card", label: "Visa" },
                { icon: "ti-credit-card", label: "Mastercard" },
                { icon: "ti-cash", label: "Cash" },
                { icon: "ti-brand-paypal", label: "PayPal" },
              ].map(({ icon, label }) => (
                <div key={label} className="pay-tag">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2026 Order Now. All rights reserved.</p>
        <div className="footer-bottom-links">
          {["Terms of Use", "Privacy", "Cookies", "Accessibility"].map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;