import { ResolveComponentResultWithType } from "../../uniform/models";
import './footer.css';

export const FooterComponent = () => (
    <footer className="footer-bg footer-text">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Help Center</a></li>
              <li><a href="#" className="footer-link">Service Status</a></li>
              <li><a href="#" className="footer-link">Tech Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms of Service</a></li>
              <li><a href="#" className="footer-link">Acceptable Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
);

export const footerMapping: ResolveComponentResultWithType = {
  type: "footer",
  component: FooterComponent,
};