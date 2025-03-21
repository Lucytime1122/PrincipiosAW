function sumar() {
    const numA = parseFloat(document.getElementById('numero1').value);
    const numB = parseFloat(document.getElementById('numero2').value);

    //verificar si los valores son validos
    if (isNaN(numA) || isNaN(numB)) {

        document.getElementById('resultado').textContent = 'Por favor, ingrese números válidos';
        return;
    }
    //Llamar a la Api
    fetch('https://sumaapi.onrender.com', { ///reemplaza con lla Url de tu API si es diferente
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1: numA, num2: numB })
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('resultado').textContent = 'Error: ' + data.error;
            } else {
                document.getElementById('resultado').textContent = 'Resultado: ' + data.resultado;
            }

        })
        .catch(error => {
            document.getElementById('resultado').textContent = 'Error de conexión: ' + error;
        });
}