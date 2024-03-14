import { useState } from 'react';
import '/src/styles/education.css';

export default function Education() {
  const [degrees, setDegrees] = useState(degreesList);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section id="education">
      <div className="title">
        <h2>Education</h2>
        <button
          onClick={() => {
            setIsEditing(!isEditing);
          }}
          className="edit"
        >
          Edit
        </button>
      </div>
      {/* ADD FORM HERE */}
      {degrees.map((degree) => {
        return (
          <div className="degree" key={degree.title}>
            <p>{degree.years}</p>
            <h3>{degree.title}</h3>
            <p>{degree.school}</p>
          </div>
        );
      })}
    </section>
  );
}

const degreesList = [
  { years: '2002-2006', title: 'Some degree', school: 'Some College' },
  { years: '2007-2012', title: 'Another degree', school: 'Some University' },
];
