import { useState } from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PropTypes from 'prop-types';

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };
  console.log(isActiveSection);
  return (
    <div className="questions">
      <div className="accordiontitle" onClick={toggleSection}>
        <div>
          <h2>{section.question}</h2>
        </div>
        <div
          style={
            isActiveSection
              ? { rotate: '45deg', transition: '.2s ease' }
              : { rotate: '0deg', transition: '.2s ease' }
          }
        >
          <AddOutlinedIcon />
        </div>
      </div>
      {
        <span
          className={
            isActiveSection ? 'accordioncontent show' : 'accordioncontent'
          }
        >
          {section.answer}
        </span>
      }
    </div>
  );
};

AccordionSection.propTypes = {
  section: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isActiveSection: PropTypes.bool.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  sectionIndex: PropTypes.number.isRequired,
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="accordion">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

Accordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
