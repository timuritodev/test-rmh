import { FC } from "react";
import '../styles.css';

interface SortProps {
    sortOrder: 'asc' | 'desc' | null;
    onSortOrderChange: (order: 'asc' | 'desc' | null) => void;
}

export const SortComponent: FC<SortProps> = ({ sortOrder, onSortOrderChange }) => (
    <div>
        <label className="filter_label">Пордядок сортировки:</label>
        <select
            className="container"
            value={sortOrder || ''}
            onChange={(e) =>
                onSortOrderChange(e.target.value ? (e.target.value as 'asc' | 'desc') : null)
            }
        >
            <option value="">По умлочанию</option>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
        </select>
    </div>
);
