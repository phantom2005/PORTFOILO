import React from 'react';
import './Skills.css';

import a from '../../assets2/skilllogo/c++.jpg';
import b from '../../assets2/skilllogo/css.jpg';
import c from '../../assets2/skilllogo/express.jpg';
import d from '../../assets2/skilllogo/firebase.jpg';
import e from '../../assets2/skilllogo/git.jpg';
import f from '../../assets2/skilllogo/html.jpg';
import g from '../../assets2/skilllogo/java.jpg';
import h from '../../assets2/skilllogo/js.jpg';
import i from '../../assets2/skilllogo/mongodb.jpg';
import j from '../../assets2/skilllogo/mysql.jpg';
import k from '../../assets2/skilllogo/nodejs.jpg';
import l from '../../assets2/skilllogo/pandas.jpg';
import m from '../../assets2/skilllogo/postgres.jpg';
import n from '../../assets2/skilllogo/reactlogo.jpg';
import o from '../../assets2/skilllogo/vercel.jpg';
import p from '../../assets2/skilllogo/vscode.jpg';
import q from '../../assets2/skilllogo/sql.jpg';
import r from '../../assets2/skilllogo/python.jpg';
import s from '../../assets2/skilllogo/anaconda.jpg';

const allSkills = [
  { name: 'C++', image: a },
  { name: 'CSS', image: b },
  { name: 'Express.js', image: c },
  { name: 'Firebase', image: d },
  { name: 'Git', image: e },
  { name: 'HTML', image: f },
  { name: 'Java', image: g },
  { name: 'JavaScript', image: h },
  { name: 'MongoDB', image: i },
  { name: 'MySQL', image: j },
  { name: 'Node.js', image: k },
  { name: 'Pandas', image: l },
  { name: 'PostgreSQL', image: m },
  { name: 'React.js', image: n },
  { name: 'Vercel', image: o },
  { name: 'VS Code', image: p },
  { name: 'SQL', image: q },
  { name: 'Python', image: r },
  { name: 'Anaconda', image: s },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
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