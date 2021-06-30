const express = require('express');
const path = require('path');

const app = express();

//const publicPath = path.join(__dirname, './public');
//app.use(express.static(publicPath));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

/*
app.listen(3000, () => {
    console.log("Servidor corriendo");
});
*/

app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendo");
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
    //res.sendFile(path.join(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});




