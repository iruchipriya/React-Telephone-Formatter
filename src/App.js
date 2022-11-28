import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [formatTel, setFormatTel] = useState('');

  const formatString = (event) => {
    const input = event.target.value;
    const output =
      input.length === 3 && input.includes('+') === false
        ? '+(' + input.substring(0, 3) + ')-' + input.substring(3)
        : input;
    setFormatTel(output);
  };

  return (
    <div className="container">
      <h1>Telephone formatter</h1>
      <input
        type="tel"
        id="phone"
        maxLength="16"
        placeholder="mobile number"
        autocomplete="off"
        onChange={formatString}
        value={formatTel}
      />
      <div>
        <br />
        <label for="phone">+(123) - 4567890</label>
      </div>
    </div>
  );
}
