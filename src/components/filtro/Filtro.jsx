// src/components/CategoryFilter.js
import React from 'react';

const Filtro = ({ categories, onCategoryChange }) => {
    return (
        <div>
            <label htmlFor="category-select">Filtrar por Categoría: </label>
            <select id="category-select" onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="all">Todas</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default Filtro;
