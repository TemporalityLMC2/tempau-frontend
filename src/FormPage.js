// FormPage.js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('https://<https://tempau-backend-yn9m.vercel.app/>/api/submit-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, content: text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    navigate('/results');
  } catch (error) {
    console.error('Error submitting text:', error);
  }
};
