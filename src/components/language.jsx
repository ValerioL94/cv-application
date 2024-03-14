import { useState } from 'react';
import '/src/styles/language.css';

const defaultList = [
  { id: 'English', language: 'English' },
  { id: 'Spanish', language: 'Spanish' },
  { id: 'French', language: 'French' },
];

export default function Language() {
  const [list, setList] = useState(defaultList);
  const [newLanguage, setNewLanguage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  return (
    <section id="language">
      <div className="title">
        <h2>Language</h2>
      </div>
      <ul className="list">
        {list.map((listEl) => (
          <li key={listEl.id}>
            <h3>{listEl.language}</h3>
            <button
              type="button"
              onClick={() => {
                setList(list.filter((l) => l.id !== listEl.id));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form className="add" onSubmit={(e) => e.preventDefault()}>
        {isEditing ? (
          <>
            <input
              type="text"
              onChange={(e) => {
                setNewLanguage(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={() => {
                setIsEditing(!isEditing);
                newLanguage &&
                  setList([
                    ...list,
                    { id: newLanguage, language: newLanguage },
                  ]);
              }}
            >
              {'Save'}
            </button>
          </>
        ) : (
          <>
            <input type="text" style={{ visibility: 'hidden' }} />
            <button
              type="button"
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              {'Add'}
            </button>
          </>
        )}
      </form>
    </section>
  );
}
