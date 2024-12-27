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
import { SortComponent } from './components/filter/sort/SortComponent';

export const App = () => {
  const chartWidth = useChartWidth();
  const pageWidth = useResize();

  const width = pageWidth < 1022 ? pageWidth * 0.9 : chartWidth;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const categories = Array.from(new Set(mockData.map((item) => item.category)));

  const filteredData = mockData
    .filter(({ date, category }) => {
      const itemDate = new Date(date);
      const dateRange =
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate);
      const categoryMatch = !selectedCategory || category === selectedCategory;
      return dateRange && categoryMatch
    });

  const sortedData =
    sortOrder === 'asc'
      ? [...filteredData].sort((a, b) => a.value - b.value)
      : sortOrder === 'desc'
        ? [...filteredData].sort((a, b) => b.value - a.value)
        : filteredData;

  return (
    <div className="app">
      <div className='filters_container'>
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
        />
        <div>
          <FiltrationComponent
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <SortComponent
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />
        </div>
      </div>
      <div className="charts_container">
        <div className="chart">
          <h3 className="chart_title">Линейный график</h3>
          <LineChartComponent data={sortedData} width={width} height={300} />
        </div>
        <div className="chart">
          <h3 className="chart_title">Столбчатая диаграмма</h3>
          <BarChartComponent data={sortedData} width={width} height={300} />
        </div>
        <div className="chart">
          <h3 className="chart_title">Круговая диаграмма</h3>
          <PieChartComponent data={sortedData} width={width} height={300} />
        </div>
      </div>
    </div>
  );
};
