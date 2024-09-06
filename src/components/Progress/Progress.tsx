import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import BudgetInput from "../Budget/Budget" 
import './Progress.css';

interface Expense {
    id: string;
    amount: number;
    category: string;
}

interface ProgressProps {
    budget: number | null;
    expenses: Expense[];
    onSetBudget: (budget: number) => void;
    onAddExpense: (expense: Expense) => void;
}

function Progress({ budget, expenses, onSetBudget, onAddExpense }: ProgressProps) {
    // Calcular el porcentaje de presupuesto gastado
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const percentageSpent = budget ? (totalExpenses / budget) * 100 : 0;

    return (
        <div>
            {budget === null ? (
                <BudgetInput onContinue={onSetBudget} />
            ) : (
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="circularWrapper" style={{ width: 250, height: 250, margin: '0 auto' }}>
                        <CircularProgressbar
                            value={percentageSpent}
                            text={`${Math.round(percentageSpent)}%`}
                            styles={buildStyles({
                                textColor: '#4b2ece',
                                pathColor: '#4b2ece',
                                trailColor: '#e0e0e0',
                            })}
                        />
                    </div>
                    <div className="info">
                        <h2>Budget: ${budget}</h2>
                        <h2>Total Expenses: ${totalExpenses}</h2>
                        <h2>Remaining: ${budget - totalExpenses}</h2>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Progress;

