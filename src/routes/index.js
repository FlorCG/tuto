const express = require ('express');

//Para crear rutas
const router = express.Router();

//Esta funcion responde algo (por ej, un string)
router.get('/', (req, res) => {
    //Esta respuesta envia como mensaje una frase
    //res.send('Mi pagina funciona');
    //res.sendFile('C://Proyectos Node/primer-proyecto/src/views/index.html');

    //res.sendFile(path.join(__dirname, 'views/index.html'));

    res.render('index.html', { title: 'First Web' });
})

//Ruta a contacto
router.get('/contact', (req, res) => {

    res.render('contact.html', { title: 'Contact Page' });
})

module.exports = router;