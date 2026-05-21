import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import { FiLayout, FiPenTool, FiSmartphone, FiMonitor, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <HeroBanner title="SERVICE" breadcrumb="Service" />

      {/* 01 MY SERVICE */}
      <section className="section services-section">
        <div className="container">
          <SectionTitle number="01" title="MY SERVICE" centered />
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FiLayout /></div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-text">Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FiPenTool /></div>
              <h3 className="service-title">Product Design</h3>
              <p className="service-text">Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FiSmartphone /></div>
              <h3 className="service-title">Brand Identity</h3>
              <p className="service-text">Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet.</p>
            </div>
            <div className="service-card ">
              <div className="service-icon"><FiMonitor /></div>
              <h3 className="service-title">Website Design</h3>
              <p className="service-text">Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 MY PARTNERS */}
      <section className="section partners-section-alt">
        <div className="container">
          <SectionTitle number="02" title="MY PARTNERS" centered />
          <div className="partners-grid alt-grid">
            <div className="partner-logo">Behance</div>
            <div className="partner-logo">Slack</div>
            <div className="partner-logo">Dribbble</div>
            <div className="partner-logo">Twilio</div>
            <div className="partner-logo">GitHub</div>
            <div className="partner-logo">Creative</div>
            <div className="partner-logo">Udemy</div>
            <div className="partner-logo">Instagram</div>
            <div className="partner-logo">Mapbox</div>
          </div>

          <div className="cta-block dark-cta">
            <h2 className="cta-title">Let's Work Together On Your Next Project</h2>
            <Button>HIRE ME NOW</Button>
            <div className="cta-link">
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* 03 TESTIMONIAL */}
      <section className="section testimonial-section">
        <div className="container">
          <div className="testimonial-grid">
            <div className="test-image-wrapper">
              <img 
                src="/imgs/3ba6dfdacf215595f05a85709c97b4975a5cad08.jpg" 
                alt="Testimonial" 
                className="test-image"
              />
            </div>
            <div className="test-content">
              <SectionTitle number="03" title="TESTIMONIAL" />
              <div className="quote-mark">"</div>
              <p className="test-quote">
                Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean euismod elementum.
              </p>
              <div className="test-author">
                <h4 className="author-name">Esther Howard</h4>
                <p className="author-role">CEO of Studio</p>
              </div>
              <div className="test-nav">
                <button className="test-nav-btn prev">&lt;</button>
                <button className="test-nav-btn next">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 FAQ */}
      <section className="section faq-section">
        <div className="container">
          <SectionTitle number="04" title="HAVE ANY QUESTIONS?" centered />
          <div className="faq-list">
            
            <details className="faq-item" open>
              <summary className="faq-header">
                <h3 className="faq-question">Where Can I Find More Information?</h3>
                <span className="faq-icon"><FiChevronDown /></span>
              </summary>
              <div className="faq-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-header">
                <h3 className="faq-question">What Kinds of Payment Do You Accept?</h3>
                <span className="faq-icon"><FiChevronDown /></span>
              </summary>
              <div className="faq-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-header">
                <h3 className="faq-question">What Are Your Terms And Conditions?</h3>
                <span className="faq-icon"><FiChevronDown /></span>
              </summary>
              <div className="faq-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </details>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
