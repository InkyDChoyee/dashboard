import "./App.css";
import Indicators from "./component/Indicators";
import Sales from "./component/Sales";
import Score from "./component/Score";

function App() {
  return (
    <div className="App">
      <div className="titleBox">
        <h2>데이터 시각화 대시보드</h2>
      </div>
      <nav>
        <p>판매량, 사용자 피드백, 성능 지표의 확인이 가능합니다</p>
      </nav>
      <section className="content">
        <Sales />
        <div>
          <Score />
          <Indicators />
        </div>
      </section>
    </div>
  );
}

export default App;
