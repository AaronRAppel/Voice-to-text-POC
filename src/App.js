import './App.css';
import { VoiceToText } from './VoiceToText'
import {VoiceToTextList} from "./VoiceToTextList";
import {useState} from "react";

function App() {
  const [isSimple, setIsSimple] = useState(true)

  return (
    <div className="App" style={{ padding: '30px' }}>
      <button onClick={() => setIsSimple(c => !c)}>{isSimple ? 'Show List' : 'Show Default'}</button>
      {isSimple ? <VoiceToText /> : <VoiceToTextList />}
    </div>
  );
}

export default App;
