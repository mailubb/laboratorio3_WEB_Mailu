import { useState } from 'react';
import './Budget.css';

interface BudgetInputProps {
    onContinue: (budget: number) => void;
}

function BudgetInput({ onContinue }: BudgetInputProps) {
    const [budget, setBudget] = useState<string>(''); // Estado inicial como cadena vacía

    const handleContinue = () => {
        const numericBudget = Number(budget); // Convertir a número solo cuando sea necesario
        if (numericBudget > 0) {
            onContinue(numericBudget); // Pasar el presupuesto a la función de callback
        } else {
            alert('Please enter a valid budget amount.');
        }
    };

    return (
        <div className='budget_container'>
            <h2>Enter Your Budget</h2>
            <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)} // Mantenerlo como cadena
                placeholder="Enter your budget"
            />
            <button onClick={handleContinue}>Define budget</button>
        </div>
    );
}

export default BudgetInput;
