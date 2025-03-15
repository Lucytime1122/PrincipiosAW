const express = require('express');
const app = express();

const morgan = require('morgan');

//Configuración del servidor en el puerto 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware lo ocupamos para mostrar resultados, es una función que comunica o conecta dos funciones, transforma los datos para intercomunicarlass
//Investigar 

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Nuestro primer Web Service  //A ESTAS RUTAS SE CONOCEN COMO END POINT
app.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola mundo, my name is Lucia"
            // "mensaje": "Hola, esta es mi primer Api"
        }
    );
})

//Endpoint para sumar dos números
app.post('/sumar', (req, res) => {   //http://localhost/sumar
    const { num1, num2 } = req.body;   //se declaran los datos de entrada

    //Validar que se hayan enviado los dos números que no esten vacío
    if (!num1 || !num2) {
        return res.status(400).send({ error: 'Faltan números para sumar' });
    }

    //sumar los números
    const resultado = num1 + num2;

    //Enviar resultado

    res.send({ resultado });
});

//programar un END POINT QUE CALCULE EL AREÁ DE UN TRIANGULO Y DESPEGAR EN RENDER
app.post('/area', (req, res) => {
    const { base, altura } = req.body;

    // Validar que se hayan enviado la base y la altura
    if (base === undefined || altura === undefined) {
        return res.status(400).send({ error: 'Faltan base o altura para calcular el área' });
    }

    // Calcular el área
    const area = (base * altura) / 2;

    // Enviar resultado
    res.send({ area });
});

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    //console.log("Servidor listening on port ${app.get('port')}");
    console.log("Servidor corriendo en puerto 3000");
});