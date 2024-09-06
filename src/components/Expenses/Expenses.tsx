import React from 'react';
import './Expenses.css';


interface Expense {
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
}

interface ExpenseListProps {
    expenses: Expense[];
    selectedCategory: string;
    onDeleteExpense: (id: string) => void;
    onEditExpense: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, selectedCategory, onDeleteExpense, onEditExpense }) => {
    const filteredExpenses = selectedCategory === 'All categories'
        ? expenses
        : expenses.filter(expense => expense.category === selectedCategory);

    return (
        <div className="expense-list">
            <h2>Expenses</h2>
            {filteredExpenses.length > 0 ? (
                <ul>
                    {filteredExpenses.map(expense => (
                        <li key={expense.id} className="expense-item">
                            <div className="expense-details">
                                <span className="expense-name">{expense.name}</span>
                                <span className="expense-category">({expense.category})</span>
                            </div>
                            <div className="expense-amount">
                                ${expense.amount.toFixed(2)}
                            </div>
                            <div className="expense-date">
                                {new Date(expense.date).toLocaleDateString()}
                            </div>
                            <div className="expense-actions">
                                <button onClick={() => onEditExpense(expense.id)} className="edit-button">Edit</button>
                                <button onClick={() => onDeleteExpense(expense.id)} className="delete-button">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No expenses recorded for this category.</p>
            )}
        </div>
    );
};

export default ExpenseList;

