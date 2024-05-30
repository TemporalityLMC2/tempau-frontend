import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue sur TEMPau</h1>
      <ul>
        <li><Link to="/form/rencontre">Rencontre</Link></li>
        <li><Link to="/form/scolaire-professionnel">Scolaire/Professionnel</Link></li>
        <li><Link to="/form/deplacement-voyage">Déplacement/Voyage</Link></li>
        <li><Link to="/form/famille">Famille</Link></li>
      </ul>
    </div>
  );
}

export default Home;
