import { PieChart, Pie, Tooltip } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface PieChartProps {
    data: DataPoint[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ data }) => {
    return (
        <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" fill="#8884d8" />
            <Tooltip />
        </PieChart>
    );
};

export default PieChartComponent;

// добавить сюда диаграмму со складыванием всех категорий 