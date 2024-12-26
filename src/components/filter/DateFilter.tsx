import './DateFilter.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FC } from 'react';

interface DateFilterProps {
    startDate: Date | null;
    endDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    onEndDateChange: (date: Date | null) => void;
}

export const DateFilter: FC<DateFilterProps> = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
}) => {
    return (
        <div className="filter_container">
            <label>Дата начала:</label>
            <DatePicker
                selected={startDate}
                onChange={onStartDateChange}
                dateFormat="yyyy-MM-dd"
            />
            <label>Дата окончания:</label>
            <DatePicker
                selected={endDate}
                onChange={onEndDateChange}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    );
};
