import { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [songName, setSongName] = useState('');
  const [prediction, setPrediction] = useState('');
  const [accuracy, setAccuracy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          songName,
          prediction,
          accuracy,
        }),
      });
      if (response.ok) {
        onSubmit();
        setSongName('');
        setPrediction('');
        setAccuracy('');
      } else {
        console.error('Error submitting feedback:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="song-name" className="block text-gray-700 font-bold mb-2">
          Song Name
        </label>
        <input
          id="song-name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="prediction-select" className="block text-gray-700 font-bold mb-2">
          Prediction
        </label>
        <select
          id="prediction-select"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={prediction}
          onChange={(e) => setPrediction(e.target.value)}
          required
        >
          <option value="">Select Prediction</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Country">Country</option>
          <option value="Hip-Hop">Hip-Hop</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="accuracy-select" className="block text-gray-700 font-bold mb-2">
          Accuracy
        </label>
        <select
          id="accuracy-select"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={accuracy}
          onChange={(e) => setAccuracy(e.target.value)}
          required
        >
          <option value="">Select Accuracy</option>
          <option value="Correct">Correct</option>
          <option value="Incorrect">Incorrect</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit Feedback
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;