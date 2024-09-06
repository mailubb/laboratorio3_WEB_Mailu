import "./Reset.css";

interface ResetButtonProps {
  onReset: () => void;
}

function ResetButton({ onReset }: ResetButtonProps) {
    return (
    <button onClick={onReset} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Reset
    </button>
    );
    }

export default ResetButton;
