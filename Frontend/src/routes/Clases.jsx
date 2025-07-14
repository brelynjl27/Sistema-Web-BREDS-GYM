import { useNavigate } from 'react-router-dom';
import {
  FaDumbbell,
  FaRunning,
  FaBicycle,
  FaHandRock,
  FaMusic,
  FaFireAlt,
  FaSpa,
  FaHeartbeat,
} from 'react-icons/fa';
import '../styles/clases.css';

function Clases() {
  const navigate = useNavigate();

  const clases = [
    {
      nombre: 'CrossFit',
      descripcion: 'Entrenamiento funcional de alta intensidad.',
      icon: <FaDumbbell />,
    },
    {
      nombre: 'Yoga',
      descripcion: 'Mejora tu flexibilidad, fuerza y equilibrio.',
      icon: <FaSpa />,
    },
    {
      nombre: 'Spinning',
      descripcion: 'Sesiones de ciclismo indoor energizantes.',
      icon: <FaBicycle />,
    },
    {
      nombre: 'Boxeo',
      descripcion: 'Cardio + técnica en clases dinámicas.',
      icon: <FaHandRock />,
    },
    {
      nombre: 'Zumba',
      descripcion: 'Baile y ejercicio para divertirte al máximo.',
      icon: <FaMusic />,
    },
    {
      nombre: 'HIIT',
      descripcion: 'Entrenamiento rápido e intenso que quema grasa.',
      icon: <FaFireAlt />,
    },
    {
      nombre: 'Pilates',
      descripcion: 'Fortalece tu core y mejora la postura y respiración.',
      icon: <FaHeartbeat />,
    },
    {
      nombre: 'Funcional',
      descripcion: 'Entrena movimientos naturales para todo el cuerpo.',
      icon: <FaRunning />,
    },
  ];

  const handleClick = (nombreClase) => {
    navigate(`/clase/${nombreClase.toLowerCase()}`);
  };

  return (
    <div className="dashboard-container">
      <h2>🔥 Clases Disponibles</h2>
      <div className="class-grid">
        {clases.map((clase, index) => (
          <div
            key={index}
            className="class-button"
            onClick={() => handleClick(clase.nombre)}
          >
            <div className="icon">{clase.icon}</div>
            <h3>{clase.nombre}</h3>
            <p>{clase.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clases;
