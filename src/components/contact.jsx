import { useState } from 'react';
import '/src/styles/contact.css';

export default function Contact() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Smith');
  const [phone, setPhone] = useState('555-555-5555');
  const [email, setEmail] = useState('notarealemail@gmail.com');
  const [address, setAddress] = useState('123 notReal St., BigCity');

  return (
    <div id="contact">
      <div>
        <h2>Contact</h2>
        <button
          id="edit"
          type="submit"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <form
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
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <p>{name}</p>
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
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          ) : (
            <p>{phone}</p>
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          ) : (
            <p>{email}</p>
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
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          ) : (
            <p>{address}</p>
          )}
        </div>
      </form>
    </div>
  );
}
