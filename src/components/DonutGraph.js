
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DonutGrapgh = props => {
  const data = {
    
    datasets: [
      {
        label: "Info",
        data: ["2", "3", "3"],
        backgroundColor: ["cyan", "pink", "blue"],
      },
    ],
    labels: ["Blocks","Clouds","Prisms"]
  };

  const options = {
    maintainAspectRatio: false,
  }

  return (
    <div className="card">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutGrapgh;
