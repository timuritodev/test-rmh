import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { DataPoint } from '../../../types/data.types';

interface LineChartProps {
  data: DataPoint[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <CartesianGrid stroke="#ccc" />
    <Line type="monotone" dataKey="value" stroke="#8884d8" />
  </LineChart>
);

export default LineChartComponent;
