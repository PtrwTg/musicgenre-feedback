import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Music Genre Prediction Feedback</h1>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;