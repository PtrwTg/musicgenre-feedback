const FeedbackList = ({ feedbacks }) => {
  const totalPredicted = feedbacks.length;
  const totalCorrect = feedbacks.filter((feedback) => feedback.accuracy === 'Correct').length;
  const totalIncorrect = feedbacks.filter((feedback) => feedback.accuracy === 'Incorrect').length;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Feedback List</h2>
        <div className="text-gray-600">
          <span className="mr-4">
            Predicted: {totalPredicted}
          </span>
          <span className="mr-4">
            Correct: {totalCorrect}
          </span>
          <span>
            Incorrect: {totalIncorrect}
          </span>
        </div>
      </div>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="mb-4">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="text-lg font-bold">{feedback.songName}</h3>
              <audio className="my-2" controls src={URL.createObjectURL(feedback.songFile)} />
              <p className="text-gray-700">
                <span className="font-bold">Prediction:</span> {feedback.prediction}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Accuracy:</span> {feedback.accuracy}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;