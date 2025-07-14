// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // ✅ Para encriptar contraseñas

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'brelyn_27',
  database: 'gym_app'
});

// Verificar conexión
db.connect(err => {
  if (err) {
    console.log('❌ Error al conectar a la base de datos:', err);
  } else {
    console.log('✅ Conectado a la base de datos MySQL');
  }
});

// Ruta para registrar usuario
app.post('/api/registro', async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: 'Usuario registrado correctamente' });
    });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Ruta para login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json({ error: err });

    if (result.length === 0) {
      return res.status(401).json({ success: false, mensaje: 'Usuario no encontrado' });
    }

    const usuario = result[0];
    const match = await bcrypt.compare(password, usuario.password);

    if (match) {
      res.json({ success: true, usuario });
    } else {
      res.status(401).json({ success: false, mensaje: 'Contraseña incorrecta' });
    }
  });
});

app.post('/api/inscribirse', (req, res) => {
  const { nombreCompleto, email, clase, horario, turno, nivel, observaciones } = req.body;
  const sql = 'INSERT INTO inscripciones (nombre, email, clase, horario, turno, nivel, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?)';
  
  db.query(sql, [nombreCompleto, email, clase, horario, turno, nivel, observaciones], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: '✅ Inscripción guardada correctamente' });
  });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log('🚀 Servidor backend corriendo en http://localhost:3001');
});
