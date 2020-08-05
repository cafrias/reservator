import React, { useState } from 'react';

export default function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    console.log({ password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPasswod(e.target.value)}
        ></input>
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
