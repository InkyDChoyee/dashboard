import "./App.css";
import Indicators from "./component/Indicators";
import Sales from "./component/Sales";
import Score from "./component/Score";

function App() {
  return (
    <div className="App">
      <Sales />
      <Score />
      <Indicators />
    </div>
  );
}

export default App;
