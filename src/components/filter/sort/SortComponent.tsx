import { FC } from "react";

interface SortProps {
    sortOrder: 'asc' | 'desc' | null;
    onSortOrderChange: (order: 'asc' | 'desc' | null) => void;
}

export const SortComponent: FC<SortProps> = ({ sortOrder, onSortOrderChange }) => (
    <div className="sort_container">
        <label>Пордядок сортировки:</label>
        <select
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
