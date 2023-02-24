
import './App.css';
import Timer from "./Timer";
import AudioSelect from './AudioSelect';

function App() {
  const time = new Date()
  // 10分(600)のタイマーが始まるところからかいし
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="App">
      <header className="App-header">
        <AudioSelect/>
        <Timer expiryTimestamp={time as Date} />
      </header>
    </div>
  );
}

export default App;
