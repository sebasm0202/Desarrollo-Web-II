const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = 'tu_secreto'; // Cambia esto a una clave secreta segura

app.use(bodyParser.json());

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica las credenciales del usuario
    if (username === 'usuario' && password === 'contraseña') { // Cambia esto por la validación real
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

// Middleware para proteger rutas
const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Ruta protegida
app.get('/protected', authenticateJWT, (req, res) => {
    res.json({ message: 'Esta es una ruta protegida', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
