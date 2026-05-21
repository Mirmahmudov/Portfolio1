import './HeroBanner.css';

const HeroBanner = ({ title, breadcrumb }) => {
  return (
    <section className="hero-banner">
      <div className="hero-overlay"></div>
      <div className="hero-bg-text" aria-hidden="true">
        {title}
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">{title}</h1>
        <div className="breadcrumbs">
          Home / <span className="current-page">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
