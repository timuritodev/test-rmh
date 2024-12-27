import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip } from 'recharts';
import { DataPoint } from '../../../types/data.types';
import { FC } from 'react';
import { CATEGORY_COLORS } from '../../../constants/colors';

interface BarChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

export const BarChartComponent: FC<BarChartProps> = ({ data, width, height }) => (
    <BarChart width={width} height={height} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Bar dataKey="value">
            {data.map((item, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={CATEGORY_COLORS[item.category] || '#ccc'}
                />
            ))}
        </Bar>
        <Tooltip />
    </BarChart>
);
