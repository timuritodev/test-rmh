import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface LineChartProps {
    data: DataPoint[];
}

export const LineChartComponent: React.FC<LineChartProps> = ({ data }) => (
    <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" />
    </LineChart>
);
