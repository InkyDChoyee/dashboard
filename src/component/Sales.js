import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Chart.js의 모든 모듈을 가져옵니다.
import "chartjs-adapter-moment"; // Moment.js와 함께 사용할 수 있도록 adapter를 가져옵니다.
import data from "./problem_3_data.json";

// Chart.js에서 LinearScale을 가져옵니다.
import { LinearScale } from "chart.js";

const Sales = () => {
  const [saleData, setSaleData] = useState(null);

  useEffect(() => {
    // 데이터를 조정하여 saleData에 설정
    const labels = data.sales_rate.map((item) => item.month);
    const productAData = data.sales_rate.map((item) => item.productA);
    const productBData = data.sales_rate.map((item) => item.productB);
    const productCData = data.sales_rate.map((item) => item.productC);

    setSaleData({
      labels: labels,
      datasets: [
        {
          label: "Product A",
          data: productAData,
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
        {
          label: "Product B",
          data: productBData,
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
        {
          label: "Product C",
          data: productCData,
          borderColor: "rgba(75, 192, 192, 1)",
          fill: false,
        },
      ],
    });
  }, []);

  if (!saleData) {
    return <div>Loading...</div>;
  }

  const options = {
    maintainAspectRatio: false, // 종횡비를 유지하지 않음
    scales: {
      y: {
        type: "linear",
      },
    },
  };

  return (
    <div className="sales">
      <h1>월별 제품 판매량</h1>
      <div className="lineChartBox">
        <Line data={saleData} options={options} />
      </div>
    </div>
  );
};

export default Sales;
