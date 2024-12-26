import { PieChart, Pie, Tooltip } from 'recharts';
import { DataPoint } from '../../../types/data.types';
import { FC } from 'react';

interface PieChartProps {
    data: DataPoint[];
    width: number;
    height: number;
}

export const PieChartComponent: FC<PieChartProps> = ({ data, width, height }) => {
    return (
        <PieChart width={width} height={height}>
            <Pie data={data} dataKey="value" fill="#8884d8" />
            <Tooltip />
        </PieChart>
    );
};

// добавить сюда диаграмму со складыванием всех категорий 