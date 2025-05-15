import { useState } from 'react';
import styles from "./RegisterModal.module.scss"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useLogin } from '../../context/LoginContext';

function RegisterModal() {
  const { isRegisterOpen, closeRegister, openLogin } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isRegisterOpen) return null;

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Регистрация успешна!');
      closeRegister();
    } catch (err) {
      setError('Ошибка регистрации: ' + err.message);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={closeRegister}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className={styles.inputField}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Enter your email</label>
          </div>
          <div className={styles.inputField}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Create password</label>
          </div>
          <button className={styles.reglogbtn} type="submit">Register</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className={styles.register}>
            <p>Already have an account? <a href="#" onClick={openLogin}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
