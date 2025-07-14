import { useParams, useNavigate, href } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/classdetail.css';

const clasesInfo  = {
  
 crossfit: {
    nombre: 'CrossFit',
    descripcion: 'Entrenamiento funcional de alta intensidad con pesas, cardio y resistencia.'
  },
  yoga: {
    nombre: 'Yoga',
    descripcion: 'Mejora tu flexibilidad, respiración y equilibrio mental.'
  },
  spinning: {
    nombre: 'Spinning',
    descripcion: 'Clases de ciclismo indoor con música y mucha energía.'
  },
  boxeo: {
    nombre: 'Boxeo',
    descripcion: 'Golpea, esquiva y quema calorías con técnica y cardio.'
  },
  zumba: {
    nombre: 'Zumba',
    descripcion: 'Diviértete bailando y haciendo ejercicio al ritmo de la música.'
  },
  hiit: {
    nombre: 'HIIT',
    descripcion: 'Intervalos de alta intensidad para quemar grasa en poco tiempo.'
  },
  pilates: {
    nombre: 'Pilates',
    descripcion: 'Control, respiración y fuerza para tu cuerpo y mente.'
  },
  funcional: {
    nombre: 'Funcional',
    descripcion: 'Entrena movimientos naturales para mejorar tu fuerza diaria.'
  }
};

function ClassDetail() {
  const { nombre } = useParams();
  const navigate = useNavigate();
  const clase = clasesInfo[nombre.toLowerCase()];

  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    horario: '',
    turno: '',
    nivel: '',
    observaciones: '',
    aceptaTerminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

const handleInscripcion = async () => {
  const { nombreCompleto, email, horario, turno, nivel, aceptaTerminos, observaciones } = formData;
  if (!nombreCompleto || !email || !horario || !turno || !nivel || !aceptaTerminos) {
    alert('Por favor completa todos los campos obligatorios.');
    return;
  }

  try {
    await axios.post('http://localhost:3001/api/inscribirse', {
      nombreCompleto,
      email,
      clase: clase.nombre,
      horario,
      turno,
      nivel,
      observaciones
    });

    alert(`✅ ¡Inscripción registrada con éxito!\nGracias ${nombreCompleto} por unirte a la clase de : ${clase.nombre}.`);
    navigate('/dashboard');
  } catch (error) {
    alert('❌ Hubo un error al registrar la inscripción.');
    console.error(error);
  }
};


  if (!clase) return <h2 className="error">Clase no encontrada</h2>;

  return (
    <div className="class-detail-container">
      <h2>{clase.nombre}</h2>
      <p>{clase.descripcion}</p>

      <form className="form-inscripcion" onSubmit={(e) => e.preventDefault()}>
        <label>Nombre completo</label>
        <input type="text" name="nombreCompleto" value={formData.nombreCompleto} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Horario</label>
        <select name="horario" value={formData.horario} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="06:00 - 07:00">06:00 - 07:00</option>
          <option value="12:00 - 13:00">12:00 - 13:00</option>
          <option value="18:00 - 19:00">18:00 - 19:00</option>
        </select>

        <label>Días</label>
        <select name="turno" value={formData.turno} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Lunes - Miércoles - Viernes">Lunes - Miércoles - Viernes</option>
          <option value="Martes - Jueves">Martes - Jueves</option>
          <option value="Sábado">Sábado</option>
        </select>

        <label>Nivel</label>
        <select name="nivel" value={formData.nivel} onChange={handleChange}>
          <option value="">Selecciona</option>
          <option value="Básico">Básico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </select>

        <label>Observaciones (opcional)</label>
        <textarea
          name="observaciones"
          rows="3"
          placeholder="¿Tienes alguna condición médica o preferencia?"
          value={formData.observaciones}
          onChange={handleChange}
        />

        <div className="checkbox">
          <input type="checkbox" name="aceptaTerminos" checked={formData.aceptaTerminos} onChange={handleChange} />
          <label htmlFor="aceptaTerminos">&nbsp;Acepto los términos y condiciones</label>
        </div>

        <button className="btn" onClick={handleInscripcion}>Inscribirme</button>
      </form>
    </div>
  );
}

export default ClassDetail;
