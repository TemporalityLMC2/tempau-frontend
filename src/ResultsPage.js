import React, { useState, useEffect } from 'react';

function ResultsPage() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/results');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h1>Résultats</h1>
      {results ? (
        <div>
          <p>Score total strictement épisodique: {results.strictlyEpisodicScore}</p>
          <p>Score de mémoire autobiographique: {results.autobiographicalMemoryScore}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default ResultsPage;
