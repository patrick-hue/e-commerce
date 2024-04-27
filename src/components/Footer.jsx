import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
            <div className="social-link">
            <h1><span>K</span>M <span>T Sh</span>O<span>P</span></h1>
          <p>Follow us everywhere</p>
              <i><img src="/public/images/whatsapp_512px.png" alt="" width="30px" /></i>
              <i><img src="/public/images/TwitterX_96px.png" alt="" width="30px" /></i>
              <i><img src="/public/images/instagram_96px.png" alt="" width="30px" /></i>
              <i><img src="/public/images/facebook_circled_96px.png" alt="" width="30px" /></i>
            </div>
            <div className="footer-links">
            <h1>Site Links</h1>
                <Link  to="/">Home</Link>
                <Link  to="/about">About</Link>
                <Link  to="#contact">Contact</Link>
                <Link  to="#product">Products</Link> {/* New link for Policy */}
            </div>  
      </div>
      
      <div className="footer-middle">
          <div className="subscribe">
            <h2>Stay In The Loop</h2>
            <form>
              <input type="email" placeholder="Enter Your Email Address" />
              <button type="submit">SUBMIT</button>
            </form>
            <p><input type='checkbox' required></input> I agree to subscribe to updates from <Link to="/privacy-policy">Privacy Policy</Link></p>
             <br />
            <p>Got a Question? Call Us: 1234-4567-4321</p>
            <p>Mon-Sat 9am-6pm Eastern</p>
          </div>
          <div className="insider">
            <h2>Become an Insider</h2>
            <p>Get 10% off your order today. Plus we'll keep you up-to-date with the latest news.</p>
            <h2>Useful Links</h2>
            <br/>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="refund">Refund Policy</Link>
            <Link to="/terms">Terms and service policy</Link>
          </div>
          </div>
      
      <div className="footer-bottom">
        <h2>Secure Checkout</h2>
          <p>We use encrypted SSL security to ensure that your credit card information is 100% protected.</p>
          <img src="/public/images/ff-checkout-visa.png" alt="Visa" />
          <img src="/public/images/ff-checkout-mastercard.png" alt="Master Card" />
          <img src="/public/images/ff-checkout-americanexp.png" alt="American Express" />
          <img src="/public/images/ff-checkout-paypal.png" alt="Paypal" />
          <img src="/public/images/ff-checkout-discover.png" alt="Discover" />
          <img src="/public/images/ff-checkout-shopify.png" alt="Shopify" />
          <img src="/public/images/ff-checkout-7.png" alt="Icon 7" />
          <p className="text-center">&copy; {new Date().getFullYear()} KMT Store. All rights reserved.</p>
        </div>
    </footer>
  );
}
