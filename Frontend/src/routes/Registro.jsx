import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import axios from 'axios';

function Registro() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post('http://localhost:3001/api/registro', {
        nombre,
        email,
        password
      });
      alert(res.data.mensaje);
      navigate('/'); 
    } catch (err) {
      alert('❌ Error al registrar. Verifica los datos o intenta con otro correo.');
    }
  };

  return (
    <div className="login-box">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">Correo</label>
        <input type="email" id="email" name="email" placeholder="Tu correo" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" placeholder="Tu contraseña" required />

        <button type="submit">Registrarme</button>
      </form>

      <p className="register-link">
        ¿Ya tienes una cuenta?{' '}
        <span onClick={() => navigate('/')}>Inicia sesión aquí</span>
      </p>
    </div>
  );
}

export default Registro;
