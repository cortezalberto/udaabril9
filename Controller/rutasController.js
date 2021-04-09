const express= require('express');

const router = express.Router();

// Ruta Home



router.get('/', function(req, res) {
    const cursos = [
        { nombre: 'Node.js', descripcion: "Backend", comienza: "abril de 2021"},
        { nombre: 'React.js', descripcion: "FrontEnd", comienza: "mayo de 2021"},
        { nombre: 'Angular', descripcion: "FrontEnd", comienza: "junio de 2021"}
    ];

    const comentario = "Preparate para el futuro";

    res.render('pages/index', {
        cursos: cursos,
        comentario: comentario
    });
});

// Ruta empresa
router.get('/empresas', function(req, res) {
    res.render('pages/empresas');
});

module.exports = router;