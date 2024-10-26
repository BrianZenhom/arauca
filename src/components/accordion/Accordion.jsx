import { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex
    setActiveIndex(nextIndex)
  }
  return (
    <div className="questions">
      <div className="accordiontitle" onClick={toggleSection}>
        <div>
          <h3>{section.question}</h3>
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
  )
}

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null)
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
  )
}

export default Accordion
