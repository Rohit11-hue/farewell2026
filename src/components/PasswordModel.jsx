import { useState } from "react";


function PasswordModal({ friend, onClose, onSuccess }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (input === friend.password) {
      onSuccess(friend);
    } else {
      setError("Wrong password ❌");
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <h2>Enter Password 🔒</h2>

        <input
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Unlock</button>

        {error && <p className="error">{error}</p>}

        <span className="close" onClick={onClose}>✖</span>
      </div>
    </div>
  );
}

export default PasswordModal;