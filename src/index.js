// Angel Perez #12 5to B

const saludar = nombre => {

    console.log('Creando etiqueta h1, en el HTML!');

     // Comentario de una sola linea.
//El codigo comentado no lo lee el interprete de JS.

    /* 
        Comentario de varias lineas.
        Uso basico del DOCUMENTO OBJECT MODEL (DOM)
        permite a JS modificar el HTML.
    */

    const h1 = document.createElement ('h1');
    h1.innerText = 'Hola, ${Nombre}'; 

    document.body.append(h1);
}

const user = "Juancho";

saludar(user); 