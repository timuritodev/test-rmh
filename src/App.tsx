import { BarChartComponent } from './components/charts/bar/BarChart';
import { LineChartComponent } from './components/charts/line/LineChart';
import PieChartComponent from './components/charts/pie/PieChart';
import mockData from './constants/mockData.json';

const App: React.FC = () => {

  return (
    <div>
      <LineChartComponent data={mockData} />
      <BarChartComponent data={mockData} />
      <PieChartComponent data={mockData} />
    </div>
  );
};

export default App;
