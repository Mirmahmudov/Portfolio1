import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <HeroBanner title="ABOUT" breadcrumb="About" />

      {/* 01 ABOUT ME */}
      <section className="section about-me-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="image-bg-accent"></div>
              <img 
                src="/imgs/9ecd27148883e577d25fa7b57efee200b85e4f5f.png" 
                alt="Portrait" 
                className="about-image"
              />
            </div>
            <div className="about-content">
              <SectionTitle number="01" title="ABOUT ME" />
              <h3 className="about-subtitle">
                I'm Professional Designer And Front-End Web Developer That Solve Your Problems
              </h3>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
                Amet dictum sit amet justo donec enim diam vulputate ut pharetra.
              </p>
              <div className="stats-block">
                <div className="stat-item">
                  <span className="stat-number">8</span>
                  <span className="stat-text">Years of<br/>Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25</span>
                  <span className="stat-text">Satisfied<br/>Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 MY SKILLS */}
      <section className="section skills-section">
        <div className="container">
          <div className="skills-grid">
            <div className="skills-content">
              <SectionTitle number="02" title="MY SKILLS" />
              <p className="skills-text">
                Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam.
              </p>
              <Button className="mt-4">DOWNLOAD CV</Button>
            </div>
            <div className="skills-bars">
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">UI/UX Design</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Front-End Developer</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Graphic Design</span>
                  <span className="skill-percentage">50%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">Product Design</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 MY EXPERIENCES */}
      <section className="section experiences-section">
        <div className="container">
          <SectionTitle number="03" title="MY EXPERIENCES" centered />
          <div className="experiences-grid">
            <div className="exp-card">
              <div className="exp-company">LinkedIn</div>
              <div className="exp-role">
                <span className="exp-number">01</span> Lead Web Developer
              </div>
              <div className="exp-date">2018-2020</div>
              <p className="exp-text">Amet dictum sit amet justo donec enim diam vulputate.</p>
            </div>
            <div className="exp-card">
              <div className="exp-company">Yahoo!</div>
              <div className="exp-role">
                <span className="exp-number">02</span> Lead Pitch Developer
              </div>
              <div className="exp-date">2016-2018</div>
              <p className="exp-text">Amet dictum sit amet justo donec enim diam vulputate.</p>
            </div>
            <div className="exp-card">
              <div className="exp-company">Zendesk</div>
              <div className="exp-role">
                <span className="exp-number">03</span> Lead Pitch Developer
              </div>
              <div className="exp-date">2014-2016</div>
              <p className="exp-text">Amet dictum sit amet justo donec enim diam vulputate.</p>
            </div>
            <div className="exp-card">
              <div className="exp-company">Webflow</div>
              <div className="exp-role">
                <span className="exp-number">04</span> Lead Java Developer
              </div>
              <div className="exp-date">2010-2014</div>
              <p className="exp-text">Amet dictum sit amet justo donec enim diam vulputate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 MY PARTNERS */}
      <section className="section partners-section">
        <div className="container">
          <SectionTitle number="04" title="MY PARTNERS" centered />
          <div className="partners-grid">
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
          
          <div className="cta-block">
            <h2 className="cta-title">Let's Work Together On Your Next Project</h2>
            <Button>HIRE ME NOW</Button>
            <div className="cta-link">
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
