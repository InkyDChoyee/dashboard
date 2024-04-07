import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import "chartjs-adapter-moment";
import data from "./problem_3_data.json";

const Indicators = () => {
  const [indicatorsData, setIndicatorsData] = useState(null);

  useEffect(() => {
    // 데이터를 조정하여 indicatorsData에 설정
    const productAData = data.indicators
      .filter((item) => item.product === "productA")
      .map((item) => ({
        x: parseInt(item.battery_life), // 문자열을 정수로 변환
        y:
          item.processing_speed === "fast"
            ? 1
            : item.processing_speed === "medium"
            ? 2
            : 3,
        r: 10,
        label: item.product,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      }));

    const productBData = data.indicators
      .filter((item) => item.product === "productB")
      .map((item) => ({
        x: parseInt(item.battery_life), // 문자열을 정수로 변환
        y:
          item.processing_speed === "fast"
            ? 1
            : item.processing_speed === "medium"
            ? 2
            : 3,
        r: 10,
        label: item.product,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      }));

    const productCData = data.indicators
      .filter((item) => item.product === "productC")
      .map((item) => ({
        x: parseInt(item.battery_life), // 문자열을 정수로 변환
        y:
          item.processing_speed === "fast"
            ? 1
            : item.processing_speed === "medium"
            ? 2
            : 3,
        r: 10,
        label: item.product,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      }));

    setIndicatorsData({
      datasets: [
        {
          label: "Product A",
          data: productAData,
          pointRadius: 10, // 데이터셋에 pointRadius 속성 추가
        },
        {
          label: "Product B",
          data: productBData,
          pointRadius: 10, // 데이터셋에 pointRadius 속성 추가
        },
        {
          label: "Product C",
          data: productCData,
          pointRadius: 10, // 데이터셋에 pointRadius 속성 추가
        },
      ],
    });
  }, []);

  if (!indicatorsData) {
    return <div>Loading...</div>;
  }

  const options = {
    maintainAspectRatio: false, // 종횡비를 유지하지 않음
    scales: {
      x: {
        title: {
          display: true,
          text: "Battery Life (hours)",
        },
        type: "linear", // x축의 데이터 타입을 linear로 설정
        position: "bottom", // x축을 아래쪽에 표시
        min: 7,
        max: 13,
      },
      y: {
        title: {
          display: true,
          text: "Processing Speed",
        },
        ticks: {
          callback: function (value, index, values) {
            switch (value) {
              case 1:
                return "Fast";
              case 2:
                return "Medium";
              case 3:
                return "Slow";
              default:
                return "";
            }
          },
        },
        min: 0.5,
        max: 3.5,
      },
    },
  };

  return (
    <div className="indicators">
      <h1>제품별 성능 지표</h1>
      <div className="scatterChartBox">
        <Scatter data={indicatorsData} options={options} />
      </div>
    </div>
  );
};

export default Indicators;
