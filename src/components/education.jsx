import { useState } from 'react';
import '/src/styles/education.css';

const defaultList = [
  { years: '2002-2006', title: 'Cool degree', school: 'Cool College' },
  { years: '2007-2012', title: 'Cooler degree', school: 'Cool University' },
];

export default function Education() {
  const [degreesList, setDegreesList] = useState(defaultList);
  const [newDegree, setNewDegree] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section id="education">
      <div className="title">
        <h2>Education</h2>
      </div>
      <ul className="list" id="degrees">
        {degreesList.map((degree) => (
          <li key={degree.title}>
            <div>
              <p>{degree.years}</p>
              <h3>{degree.title}</h3>
              <p>{degree.school}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setDegreesList(
                  degreesList.filter((d) => d.title !== degree.title)
                );
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form className="sideForm" onSubmit={(e) => e.preventDefault()}>
        {isEditing ? (
          <>
            <div>
              <label htmlFor="degYears">
                <b>Years</b>
              </label>
              <input
                id="degYears"
                name="degreeYears"
                type="text"
                onChange={(e) => {
                  setNewDegree({
                    ...newDegree,
                    years: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="degTitle">
                <b>Title</b>
              </label>
              <input
                id="degTitle"
                name="degreeTitle"
                type="text"
                onChange={(e) => {
                  setNewDegree({
                    ...newDegree,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="degSchool">
                <b>School</b>
              </label>
              <input
                id="degSchool"
                name="DegreeSchool"
                type="text"
                onChange={(e) => {
                  setNewDegree({
                    ...newDegree,
                    school: e.target.value,
                  });
                }}
              />
            </div>
            <button
              type="submit"
              onClick={() => {
                setIsEditing(!isEditing);
                newDegree &&
                  setDegreesList([
                    ...degreesList,
                    {
                      years: newDegree.years,
                      title: newDegree.title,
                      school: newDegree.school,
                    },
                  ]);
                setNewDegree('');
              }}
            >
              {'Save'}
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            {'Add'}
          </button>
        )}
      </form>
    </section>
  );
}
