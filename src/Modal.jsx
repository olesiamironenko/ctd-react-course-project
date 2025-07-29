function Modal({ onClose }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.5)', padding: '20px' }}>
      <h2>Modal Content</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
