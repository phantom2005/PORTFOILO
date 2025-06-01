import React from 'react';
import './Skills.css';

import commonSkillImage from '../../assets2/avatar/avatar.jpg';

const allSkills = [
  { name: 'HTML', image: commonSkillImage },
  { name: 'CSS', image: commonSkillImage },
  { name: 'JavaScript', image: commonSkillImage },
  { name: 'React.js', image: commonSkillImage },
  { name: 'Node.js', image: commonSkillImage },
  { name: 'Firebase', image: commonSkillImage },
  { name: 'MongoDB', image: commonSkillImage },
  { name: 'Git', image: commonSkillImage },
  { name: 'VS Code', image: commonSkillImage },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {allSkills.map((skill, index) => (
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
    </section>
  );
};

export default Skills;