import './App.css';
import mockData from './constants/mockData.json';
import { BarChartComponent } from './components/charts/bar/BarChart';
import { LineChartComponent } from './components/charts/line/LineChart';
import PieChartComponent from './components/charts/pie/PieChart';
import { useChartWidth } from './hooks/useChartWidth';
import { useResize } from './hooks/useResize';

const App: React.FC = () => {
  const chartWidth = useChartWidth();
  const pageWidth = useResize();

  const width = pageWidth > 1024 ? chartWidth : pageWidth * 0.9;

  return (
    <div className="app_container">
      <div className="chart_container">
        <h3 className="chart_title">Линейный график</h3>
        <LineChartComponent data={mockData} width={width} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Столбчатая диаграмма</h3>
        <BarChartComponent data={mockData} width={width} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Круговая диаграмма</h3>
        <PieChartComponent data={mockData} width={width} height={300} />
      </div>
    </div>
  );
};

export default App;
