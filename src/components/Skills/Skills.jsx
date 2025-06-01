import React from 'react';
import './Skills.css';

import commonSkillImage from '../../assets2/avatar/avatar.jpg';

const categorizedSkills = {
  frontend: [
    { name: 'HTML', image: commonSkillImage },
    { name: 'CSS', image: commonSkillImage },
    { name: 'JavaScript', image: commonSkillImage },
    { name: 'React.js', image: commonSkillImage },
  ],
  backend: [
    { name: 'Node.js', image: commonSkillImage },
    { name: 'Firebase', image: commonSkillImage },
    { name: 'MongoDB', image: commonSkillImage },
  ],
  tools: [
    { name: 'Git', image: commonSkillImage },
    { name: 'VS Code', image: commonSkillImage },
  ],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>

      {Object.entries(categorizedSkills).map(([categoryName, skillsArray]) => (
        <div key={categoryName} className="skill-category">
          <h3>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Skills</h3>
          
          <div className="skills-container">
            {skillsArray.map((skill, index) => (
              <div key={skill.name} className="skill-item wave-animation">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;