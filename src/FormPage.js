import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function FormPage() {
  const { type } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/submit-text', { // Remplacez par l'URL de votre backend
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, content: text }),
    });
    navigate('/results');
  };

  return (
    <div>
      <h1>{`Racontez un souvenir en lien avec ${type}`}</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={(e) => setText(e.target.value)} required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default FormPage;
