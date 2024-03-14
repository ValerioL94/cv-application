import { useState } from 'react';
import '/src/styles/about.css';
const defaultSummary = {
  name: 'John Smith',
  currentTitle: 'Marvelous developer',
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor nunc in sagittis imperdiet. Quisque non erat ipsum. Sed vehicula justo in ultricies vulputate. Phasellus ut rhoncus lectus. Nam metus ipsum, dignissim in posuere vitae, vestibulum et nisl. Suspendisse felis eros, sodales ut semper eget, convallis et dolor. Pellentesque nec felis sed lectus tempor tincidunt non non eros.',
};
export default function About() {
  const [summary, setSummary] = useState(defaultSummary);
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setSummary({
      ...summary,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <section id="header">
      {isEditing ? (
        <form
          className="intro"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="wrapper">
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                value={summary.name}
                onChange={handleChange}
              />
            </label>
            <button
              className="edit"
              type="submit"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Save
            </button>
          </div>
          <label htmlFor="currentTitle">
            Current Title
            <input
              type="text"
              name="currentTitle"
              id="currentTitle"
              value={summary.currentTitle}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="introduction">
            Introduction
            <textarea
              type="text"
              name="introduction"
              id="introduction"
              value={summary.introduction}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <>
          <div className="wrapper">
            <h1>{summary.name}</h1>
            <button
              className="edit"
              type="submit"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Edit
            </button>
          </div>
          <h2>{summary.currentTitle}</h2>
          <p>{summary.introduction}</p>
        </>
      )}
    </section>
  );
}
