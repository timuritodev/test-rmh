import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { DataPoint } from '../../../types/data.types';
import { FC } from 'react';
import { CATEGORY_COLORS } from '../../../constants/colors';

interface PieChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

export const PieChartComponent: FC<PieChartProps> = ({ data, width, height }) => {
    return (
        <PieChart width={width} height={height}>
            <Pie data={data} dataKey="value">
                {data.map((item, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={CATEGORY_COLORS[item.category] || '#ccc'}
                    />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};
