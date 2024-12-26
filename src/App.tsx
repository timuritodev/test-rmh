import './App.css';
import mockData from './constants/mockData.json';
import { BarChartComponent } from './components/charts/bar/BarChart';
import { LineChartComponent } from './components/charts/line/LineChart';
import PieChartComponent from './components/charts/pie/PieChart';

const App: React.FC = () => {
  return (
    <div className="app_container">
      <div className="chart_container">
        <h3 className="chart_title">Линейный график</h3>
        <LineChartComponent data={mockData} width={300} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Столбчатая диаграмма</h3>
        <BarChartComponent data={mockData} width={300} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Круговая диаграмма</h3>
        <PieChartComponent data={mockData} width={300} height={300} />
      </div>
    </div>
  );
};

export default App;
