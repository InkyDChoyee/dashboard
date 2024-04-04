import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Sales = () => {
  const [saleData, setSaleData] = useState(null);

  useEffect(() => {
    fetch("../problem_3_data.json")
      .then((response) => response.json())
      .then((data) => {
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
      })
      .catch((error) => console.error("데이터 가져오기 실패: ", error));
  }, []);

  if (!saleData) {
    return <div>Loading...</div>;
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>월별 제품 판매량</h1>
      <Line data={saleData} options={options} />
    </div>
  );
};

export default Sales;
