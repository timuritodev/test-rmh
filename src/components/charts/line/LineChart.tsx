import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface LineChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

export const LineChartComponent: React.FC<LineChartProps> = ({ data, width, height }) => (
    <LineChart width={width} height={height} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="value" />
    </LineChart>
);