import LineChartComponent from './components/charts/line/LineChart';
import mockData from './constants/mockData.json';

const App: React.FC = () => {

  return (
    <div>
      <LineChartComponent data={mockData} />
    </div>
  );
};

export default App;
