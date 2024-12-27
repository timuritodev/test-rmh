import '../styles.css';
import { FC } from 'react';

interface FiltrationComponentProps {
    categories: string[];
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

export const FiltrationComponent: FC<FiltrationComponentProps> = ({
    categories,
    selectedCategory,
    onCategoryChange,
}) => (
    <div className="filter_container">
        <label className='filter_label'>По категориям:</label>
        <select
            className='container'
            value={selectedCategory || ''}
            onChange={(e) => onCategoryChange(e.target.value || null)}
        >
            <option value="">Все категории</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </div>
);
