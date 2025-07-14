import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post('http://localhost:3001/api/login', { email, password });
      if (res.data.success) {
        navigate('/dashboard');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (err) {
      alert('Error de conexión con el servidor');
    }
  };

  return (
    <div className="login-box">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" name="email" placeholder="Tu correo" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Tu contraseña" required />

        <button type="submit">Ingresar</button>

    
      </form>

      <p className="register-link">
        ¿No tienes cuenta?{' '}
        <span onClick={() => navigate('/registro')}>Regístrate aquí</span>
      </p>
    </div>
  );
}

export default Login;
