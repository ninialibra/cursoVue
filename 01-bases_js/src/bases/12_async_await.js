const miPromesa = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Tenemos un valor en la promesa');
        }, 1000);
    });
};

//async convierte una función en una promesa
const medirTiempoAsync = async() => {
    console.log('Inicio');

    //espera a que se resuelva la promesa.
    //no puede usarse fuera de una funcion async
    await miPromesa();

    console.log('Fin');

    return 'Fin de medir tiempo async';
    //throw 'Error en medirTiempoAsync';
};

medirTiempoAsync()
    .then(valor => console.log(valor))
    .catch(err => console.log('error: ', err));