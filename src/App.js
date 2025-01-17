import './App.css';
import Question from './components/Question';
import Info from './components/Info';

function App({ questions, currentQuestion, statuses, handleQuestionSelect }) {
  return (
    <div className="App">
      <div className="heading"><Info></Info></div>
      <Question></Question>
    </div>
  );
}

export default App;