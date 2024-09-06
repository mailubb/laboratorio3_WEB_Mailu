import React from 'react';
import './Filter.css';
interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="filter-container" style={{ marginTop: '20px', textAlign: 'center' }}>
            <label htmlFor="category">Filter by category:</label>
            <select
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
                className="filter-dropdown"
            >
                {categories.map(category => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;

