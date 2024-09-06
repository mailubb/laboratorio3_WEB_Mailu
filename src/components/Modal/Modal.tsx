import { useState } from 'react';
import './Modal.css';

interface ExpenseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (expense: { name: string; amount: number; category: string; date: string }) => void;
    categories: string[]; // Recibimos las categorías como props
}

function ExpenseModal({ isOpen, onClose, onSave, categories }: ExpenseModalProps) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>(categories[0] || '');
    const [date, setDate] = useState<string>('');

    const handleSave = () => {
        if (name && amount > 0 && category && date) {
            onSave({ name, amount, category, date });
            onClose() // Cerrar el modal después de guardar
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>New Expense</h2>
                <label>Expense Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Add expense name"
                />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    placeholder="0"
                />
                <label>Category:</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className='select-2'>
                    <option value="">-- Select --</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <label>Expense Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <div className="modal-actions">
                    <button onClick={handleSave}>Register Expense</button>
                    <button onClick={onClose} style={{ marginLeft: '10px' }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default ExpenseModal;
