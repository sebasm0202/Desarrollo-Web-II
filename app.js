const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

const SECRET_KEY = 'your_secret_key'; // Cambia esto por una clave secreta segura

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;

    // Aquí deberías verificar el usuario y la contraseña con tu base de datos
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
