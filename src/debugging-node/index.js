/* Algoritmo de ordenamiento de la Burbuja 0(n^2)*/

const ordenaBurbuja = (lista) => { 


    let longitudLista, indexOrder, indexChange, auxChange;
    longitudLista = lista.length;

    console.info(longitudLista); // Mostramos por consola la cantidad de elementos en la lista.

    for (indexOrder = 1; indexChange < longitudLista; indexOrder++) {
        //For anidado.
        for (indexChange = 0; indexChange < (longitudLista - indexOrder); indexChange++) {
            //Intercambiamos los valores si el anterior esmayor al siguiente.
            if (lista[indexChange] > lista [indexChange + 1]) {
                auxChange = lista [indexChange];
                lista[indexChange] = lista[indexChange + 1];
                lista[indexChange + 1] = auxChange;
            }
        }
    }

    return lista;
}

let listaDesordenada = [6, 5, 3, 1, 8, 7, 2, 4];
console.warn(listaDesordenada); // Mostramos, por consola, la lista desordenada.

const listaOrdenada = ordenaBurbuja(listaDesordenada);
console.log(listaOrdenada); //Mostramos, por consola, la lista ordenada.