document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                // Almacenar el token JWT en el almacenamiento local
                localStorage.setItem('token', data.token);
                // Redirigir a la página principal
                window.location.href = 'login.html';
            } else {
                // Mostrar mensaje de error
                document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('error-message').textContent = 'Ocurrió un error al iniciar sesión.';
        });
});
