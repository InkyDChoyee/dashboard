import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const Sales = () => {
  const [saleData, setSaleData] = useState(null);

  useEffect(() => {
    fetch("../problem_3_data.json")
      .then((response) => response.json())
      .then((data) => setSaleData(data))
      .catch((error) => console.error("데이터 가져오기 실패: ", error));
  }, []);

  if (!saleData) {
    return <div>Loading...</div>;
  }

  const { labels, datasets } = saleData;

  return (
    <div>
      <h1>월별 제품 판매량</h1>
      <Line data={data}></Line>
    </div>
  );
};
