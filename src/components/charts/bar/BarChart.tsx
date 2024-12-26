import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface BarChartProps {
    data: DataPoint[];
}

export const BarChartComponent: React.FC<BarChartProps> = ({ data }) => (
    <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
);
