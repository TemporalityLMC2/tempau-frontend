// ResultsPage.js
useEffect(() => {
  const fetchResults = async () => {
    try {
      const response = await fetch('https://<https://tempau-backend-yn9m.vercel.app/>/api/results');
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
