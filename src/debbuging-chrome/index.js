

// Creamos una funcion llamda repetir

function repetir(nombre, veces) {
    
    /**
     *  Imprimimos nombre el nombre de vcs que indique veces
     *  estos son comentarios especiales para indicar
     *  a nosotros programadores que hace nuestra funcion.
     *  @author Angel Perez
     *  @version 0.1.0.
     *  @param {string} nombre
     *  @param {number} veces
     *  @return  {none}
     */

    // creamos un ciclo for
    for (let index = 1; index <= veces; index++) {
        // la variable index se ha ivcrementado en 1
        // hata que index < veces deje de ser cierto.
        // mientras vamos agregando elementos p con el nombre
        // a nuestro documento html.
        let element = document.createElement('p'); 
        element.innerText = nombre; 
        document.body.appendChild(element); 

    }


}

const nom = prompt("Escribe tu nombre");
const vcs = parseInt(prompt("Escribe las vcs que los mostraras")); 

repetir(nom, vcs);