import { PieChart, Pie, Tooltip } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface PieChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

const PieChartComponent: React.FC<PieChartProps> = ({ data, width, height }) => {
    return (
        <PieChart width={width} height={height}>
            <Pie data={data} dataKey="value" fill="#8884d8" />
            <Tooltip />
        </PieChart>
    );
};

export default PieChartComponent;

// добавить сюда диаграмму со складыванием всех категорий 