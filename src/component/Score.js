import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-moment";
import data from "./problem_3_data.json";

const Score = () => {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    // 데이터를 조정하여 scoreData에 설정
    const labels = data.user_score.map((item) => item.product);
    const productScores = data.user_score.map((item) => item.score);

    setScoreData({
      labels: labels,
      datasets: [
        {
          label: "Scores",
          data: productScores,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)", // Product A의 배경색
            "rgba(54, 162, 235, 0.2)", // Product B의 배경색
            "rgba(75, 192, 192, 0.2)", // Product C의 배경색
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)", // Product A의 테두리 색
            "rgba(54, 162, 235, 1)", // Product B의 테두리 색
            "rgba(75, 192, 192, 1)", // Product C의 테두리 색
          ],
          borderWidth: 1, // 막대의 테두리 두께
        },
      ],
    });
  }, []);

  if (!scoreData) {
    return <div>Loading...</div>;
  }

  const options = {
    maintainAspectRatio: false, // 종횡비를 유지하지 않음
    indexAxis: "y", // y축을 기준으로 막대형 그래프 생성
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="score">
      <h1>제품별 점수</h1>
      <div className="barChartBox">
        <Bar data={scoreData} options={options} />
      </div>
    </div>
  );
};

export default Score;
