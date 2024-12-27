import './App.css';
import mockData from './constants/mockData.json';
import { useState } from 'react';
import { useChartWidth } from './hooks/useChartWidth';
import { useResize } from './hooks/useResize';
import { BarChartComponent } from './components/charts/bar/BarChart';
import { LineChartComponent } from './components/charts/line/LineChart';
import { PieChartComponent } from './components/charts/pie/PieChart';
import { DateFilter } from './components/filter/date/DateFilter';
import { FiltrationComponent } from './components/filter/filtration/FiltrationComponent';

export const App = () => {
  const chartWidth = useChartWidth();
  const pageWidth = useResize();

  const width = pageWidth > 1024 ? chartWidth : pageWidth * 0.9;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(mockData.map((item) => item.category)));

  const filteredData = mockData
    .filter(({ date, category }) => {
      const itemDate = new Date(date);
      const dateRange =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);
      const categoryMatch = !selectedCategory || category === selectedCategory;
      return dateRange && categoryMatch;
    });

  return (
    <div className="app">
      <div>
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
        <FiltrationComponent
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div className="charts_container">
        <div className="chart">
          <h3 className="chart_title">Линейный график</h3>
          <LineChartComponent data={filteredData} width={width} height={300} />
        </div>
        <div className="chart">
          <h3 className="chart_title">Столбчатая диаграмма</h3>
          <BarChartComponent data={filteredData} width={width} height={300} />
        </div>
        <div className="chart">
          <h3 className="chart_title">Круговая диаграмма</h3>
          <PieChartComponent data={filteredData} width={width} height={300} />
        </div>
      </div>
    </div>
  );
};
