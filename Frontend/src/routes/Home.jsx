import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-banner">
        <div className="overlay">
          <h1>🏋️ BRED'S GYM </h1>
          <p className="subtitle">Activa tu cuerpo. Transforma tu vida.</p>
            <div className="button-group">
            <button className="btn" onClick={() => navigate('/clases')}>
                Ver clases disponibles
            </button>
            <button className="btn" onClick={() => navigate('/instructores')}>
                Conoce a nuestros instructores
            </button>
            </div>
        </div>
      </div>

      <div className="home-description">
        <p>
          Bienvenido a <strong>GYM FIT BREXXX</strong>, tu centro de entrenamiento integral. Aquí encontrarás clases para todos los niveles, instructores certificados y una comunidad motivadora. 💪
        </p>
        <p>
          ¡Ven a mejorar tu salud, energía y bienestar con nosotros!
        </p>
      </div>

      <div className="benefits-section">
        <h2>🔥 ¿Por qué elegirnos?</h2>
        <div className="benefits-grid">
          <div className="benefit-box">✅ Rutinas personalizadas para cada meta</div>
          <div className="benefit-box">✅ Ambientes amplios, limpios y seguros</div>
          <div className="benefit-box">✅ Instructores certificados y atentos</div>
          <div className="benefit-box">✅ Clases dinámicas como HIIT, Zumba, Yoga y más</div>
          <div className="benefit-box">✅ Comunidad que te motiva a superarte</div>
          <div className="benefit-box">✅ Buen ambiente que te motiva a entrenar</div>
          <div className="benefit-box">✅ Lleva una vida saludable con nuestras recomendaciones</div>
          <div className="benefit-box">✅ Te brindamos una dieta saludable</div>
        </div>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://wa.me/51913471597" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p>© 2025 GYM FIT BREXXX — Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default Home;
