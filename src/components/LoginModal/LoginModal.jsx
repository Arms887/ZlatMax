import { useState } from 'react';
import styles from './LoginModal.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useLogin } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const navigate = useNavigate();
  const { isLoginOpen, closeLogin,openRegister} = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isLoginOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Hajox mtar sayt!');
      closeLogin();
      navigate('/');
    } catch {
      setError('Sxal parol kam login');
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={closeLogin}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className={styles.inputField}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Enter your email</label>
          </div>
          <div className={styles.inputField}>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Enter your password</label>
          </div>
          <div className={styles.forget}>
            <label>
              <input type="checkbox" />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button className={styles.reglogbtn} type="submit">Log In</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className={styles.register}>
            <p>Don't have an account? <a href="#" onClick={(e) => {
  e.preventDefault();
  closeLogin();
  openRegister();
}}>Register</a></p>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
