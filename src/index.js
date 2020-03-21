//NPM RUN DEV 

const express = require ('express');

//Modulo para trabajar con directorios
const path = require('path');

//Esta const sirve para crear un servidor
const app = express();

//Settings
//Definir variable que sea global
app.set('port', 3000);
app.set('view engine', 'ejs');
//Procesa la sintaxis ejs
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));



//Middlewares (funciones que se ejecutan antes de que las rutas procesen algo)

//Rutas
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

//Archivos estaticos


//Para que el servidor se ejecute en el puerto 3000
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});