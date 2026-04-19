const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Ruta simulada de login con JWT falso
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const db = require('./db.json');
  const usuario = db.usuarios.find(
    u => u.email === email && u.password === password
  );

  if (usuario) {
    // JWT simulado (header.payload.signature en base64)
    const payload = btoa(JSON.stringify({
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      exp: Date.now() + 3600000 // 1 hora
    }));
    const token = `eyJhbGciOiJIUzI1NiJ9.${payload}.simulado`;

    res.json({
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('✅ JSON Server corriendo en http://localhost:3000');
});