import { useState } from 'react';
import '/src/styles/contact.css';

export default function Contact() {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState({
    name: 'John Smith',
    phone: '555-555-5555',
    email: 'notarealemail@gmail.com',
    address: '123 notReal St., BigCity',
  });
  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <section id="contact">
      <div className="title">
        <h2>Contact</h2>
        <button
          className="edit"
          type="submit"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <form
        className="sideForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="name">
            <b>Name</b>
          </label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              id="name"
              value={info.name}
              onChange={handleChange}
            />
          ) : (
            <p>{info.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone">
            <b>Phone</b>
          </label>
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              id="phone"
              value={info.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{info.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              id="email"
              value={info.email}
              onChange={handleChange}
            />
          ) : (
            <p>{info.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="address">
            <b>Address</b>
          </label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              id="address"
              value={info.address}
              onChange={handleChange}
            />
          ) : (
            <p>{info.address}</p>
          )}
        </div>
      </form>
    </section>
  );
}
