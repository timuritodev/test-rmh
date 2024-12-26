import './App.css';
import mockData from './constants/mockData.json';
import { useState } from 'react';
import { useChartWidth } from './hooks/useChartWidth';
import { useResize } from './hooks/useResize';
import { BarChartComponent } from './components/charts/bar/BarChart';
import { LineChartComponent } from './components/charts/line/LineChart';
import { PieChartComponent } from './components/charts/pie/PieChart';
import { DateFilter } from './components/filter/DateFilter';

const App = () => {
  const chartWidth = useChartWidth();
  const pageWidth = useResize();

  const width = pageWidth > 1024 ? chartWidth : pageWidth * 0.9;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const filteredData = mockData.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      (!startDate || itemDate >= startDate) &&
      (!endDate || itemDate <= endDate)
    );
  });

  return (
    <div className="app_container">
      <DateFilter
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <div className="chart_container">
        <h3 className="chart_title">Линейный график</h3>
        <LineChartComponent data={filteredData} width={width} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Столбчатая диаграмма</h3>
        <BarChartComponent data={filteredData} width={width} height={300} />
      </div>
      <div className="chart_container">
        <h3 className="chart_title">Круговая диаграмма</h3>
        <PieChartComponent data={filteredData} width={width} height={300} />
      </div>
    </div>
  );
};

export default App;
