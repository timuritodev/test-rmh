import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface BarChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

export const BarChartComponent: React.FC<BarChartProps> = ({ data, width, height }) => (
    <BarChart width={width} height={height} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
);
