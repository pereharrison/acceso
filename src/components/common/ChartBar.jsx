import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartBar = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May' , 'June', 'July', 'August', 'September', 'October', 'December'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [1200, 1900, 3000, 500, 2400, 1000, 3400, 900, 5990, 4748, 9038, 4479],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        // text: 'Store Performance 2026',
      },
    },
  };

  return (
    <div style={{ width: '600px', margin: '0 auto',  }}>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default ChartBar;