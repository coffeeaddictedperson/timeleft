
import moment from 'moment';
import './App.css';

function App() {
    const then = moment("10/02/2023 03:00", "DD/MM/YYYY HH:mm").utc();
    const date = moment().utc().to(then);

  return (
    <div className="App">
      <header className="App-header">
        I will come <br /> {date}
      </header>
    </div>
  );
}

export default App;
