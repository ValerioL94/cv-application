import { useState } from 'react';
import '/src/styles/experience.css';
const defaultList = [
  {
    years: '2013-2016',
    company: 'Company One | somewhere, Big City',
    position: 'Super employee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed vehicula justo in ultricies vulputate. Phasellus ut rhoncus lectus.Nam metus ipsum, dignissim in posuere vitae, vestibulum et nisl.Suspendisse felis eros, sodales ut semper eget, convallis et dolor. Pellentesque nec felis sed lectus tempor tincidunt non non eros.',
  },
  {
    years: '2016-2019',
    company: 'Company Two | somewhere, Big City',
    position: 'Super manager ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed vehicula justo in ultricies vulputate. Phasellus ut rhoncus lectus.Nam metus ipsum, dignissim in posuere vitae, vestibulum et nisl.Suspendisse felis eros, sodales ut semper eget, convallis et dolor. Pellentesque nec felis sed lectus tempor tincidunt non non eros.',
  },
  {
    years: '2019-2023',
    company: 'Company Three | somewhere, Big City',
    position: 'Super CEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed vehicula justo in ultricies vulputate. Phasellus ut rhoncus lectus.Nam metus ipsum, dignissim in posuere vitae, vestibulum et nisl.Suspendisse felis eros, sodales ut semper eget, convallis et dolor. Pellentesque nec felis sed lectus tempor tincidunt non non eros.',
  },
];
export default function Experience() {
  const [jobsList, setJobsList] = useState(defaultList);
  const [newJob, setNewJob] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section id="experience">
      <div className="expTitle">
        <h2>Experience</h2>
      </div>
      <ul className="list" id="jobs">
        {jobsList.map((job) => (
          <li key={job.years}>
            <div>
              <p>{job.years}</p>
              <p>{job.company}</p>
              <h3>{job.position}</h3>
              <p>{job.description}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setJobsList(jobsList.filter((j) => j.years !== job.years));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form className="expForm" onSubmit={(e) => e.preventDefault()}>
        {isEditing ? (
          <>
            <div>
              <label htmlFor="jobYears">
                <b>Years</b>
              </label>
              <input
                id="jobYears"
                name="jobYears"
                type="text"
                onChange={(e) => {
                  setNewJob({
                    ...newJob,
                    years: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="jobCompany">
                <b>Company</b>
              </label>
              <input
                id="jobCompany"
                name="jobCompany"
                type="text"
                onChange={(e) => {
                  setNewJob({
                    ...newJob,
                    company: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="jobPosition">
                <b>Position</b>
              </label>
              <input
                id="jobPosition"
                name="jobPosition"
                type="text"
                onChange={(e) => {
                  setNewJob({
                    ...newJob,
                    position: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="jobDescription">
                <b>Description</b>
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                type="text"
                onChange={(e) => {
                  setNewJob({
                    ...newJob,
                    description: e.target.value,
                  });
                }}
              />
            </div>

            <button
              className="edit"
              type="submit"
              onClick={() => {
                setIsEditing(!isEditing);
                newJob &&
                  setJobsList([
                    ...jobsList,
                    {
                      years: newJob.years,
                      company: newJob.company,
                      position: newJob.position,
                      description: newJob.description,
                    },
                  ]);
                setNewJob('');
              }}
            >
              {'Save'}
            </button>
          </>
        ) : (
          <button
            className="edit"
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
