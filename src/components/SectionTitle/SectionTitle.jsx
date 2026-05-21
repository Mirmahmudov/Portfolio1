import './SectionTitle.css';

const SectionTitle = ({ number, title, centered = false }) => {
  return (
    <div className={`section-title-wrapper ${centered ? 'centered' : ''}`}>
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
};

export default SectionTitle;
