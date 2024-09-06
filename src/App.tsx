import './App.css';
import { useState } from 'react';
import Progress from './components/Progress/Progress';
import Filter from "./components/Filters/Filters";
import ResetButton from './components/Reset/Reset';
import FloatingButton from './components/Flotant/Flotant';
import ExpenseModal from './components/Modal/Modal';
import ExpenseList from './components/Expenses/Expenses';

interface Expense {
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
}

function App() {
    const [budget, setBudget] = useState<number | null>(null);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [budgetDefined, setBudgetDefined] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All categories');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleSetBudget = (budget: number) => {
        setBudget(budget);
        setBudgetDefined(true);
    };

    const handleAddExpense = (expense: { name: string; amount: number; category: string; date: string }) => {
        const newExpense: Expense = {
            id: Date.now().toString(),
            ...expense,
        };
        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    };

    const handleReset = () => {
        setBudget(null);
        setExpenses([]);
        setBudgetDefined(false);
        setSelectedCategory('All categories');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const categories = ['All categories', 'Food', 'Transport', 'Utilities', 'Entertainment', 'Healthcare', 'Education', 'Others'];

    return (
        <>
            <div className="alignment-container">
                <h1>Expenses Planner</h1>
                {budgetDefined && (
                    <ResetButton onReset={handleReset} />
                )}
            </div>
            <Progress
                budget={budget}
                expenses={expenses}
                onSetBudget={handleSetBudget}
                onAddExpense={handleAddExpense}
            />
            {budgetDefined && (
                <>
                    <Filter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                    <ExpenseList
                        expenses={expenses}
                        selectedCategory={selectedCategory}
                    />
                    <FloatingButton onClick={openModal} />
                </>
            )}
            <ExpenseModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleAddExpense}
                categories={categories.filter(category => category !== 'All categories')}
            />
        </>
    );
}

export default App;


