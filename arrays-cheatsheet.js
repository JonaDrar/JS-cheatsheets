/* Arrays Cheat Sheet */

/* Los métodos que modifiquen el arreglo original van a llevar un asterisco (*) al lado del output */

// .length nos da la longitud del array
[1, 2, 3].length; // 3

// .push nos añade un elemento al final del array
[1, 2, 3].push(4); // [1, 2, 3, 4] (*)

// .pop nos elimina el ultimo elemento del array
[1, 2, 3].pop(); // [1, 2] (*)

// .unshift nos añade un elemento al principio del array
[1, 2, 3].unshift(0); // [0, 1, 2, 3] (*)

// .shift nos elimina el primer elemento del array

[1, 2, 3].shift(); // [2, 3] (*)

// .indexOf nos da la posicion del elemento que le indiquemos
[1, 2, 3].indexOf(2); // 1

// si el elemento no existe nos da -1
[1, 2, 3].indexOf(4); // -1

// .slice nos da el array desde la posicion que le indicamos
[1, 2, 3].slice(1); // [2, 3]

// si le pasamos un segundo argumento nos da el array desde la posicion que le indicamos en el primer argumento hasta la posicion que le indiquemos en el segundo argumento
[1, 2, 3].slice(1, 2); // [2]

// si le pasamos un argumento negativo nos da el array desde la posicion que le indicamos empezando desde el final
[1, 2, 3].slice(-2); // [2, 3]

// .includes nos dice si el array contiene el elemento que le indiquemos y nos devuelve true en caso de que si lo contenga
[1, 2, 3].includes(2); // true

// y false en caso de que no lo contenga
[1, 2, 3].includes(4); // false

// .join nos devuelve un string con los elementos del array separados por el caracter que le indiquemos
[1, 2, 3].join(''); // '123'

// si no le pasamos ningun argumento nos devuelve un string con los elementos del array separados por comas
[1, 2, 3].join(); // '1,2,3'

// .reverse nos da el array al reves
[1, 2, 3].reverse(); // [3, 2, 1] (*)

// .sort nos da el array ordenado
[3, 2, 1].sort(); // [1, 2, 3] (*)

// .concat nos da un nuevo array con el array que le pasemos como argumento añadido al final del array original
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]

// .splice nos elimina los elementos que le indiquemos desde la posicion que le indiquemos
[1, 2, 3].splice(1, 1); // [1, 3] (*)

// si el segundo argumento es 0 nos añade los elementos que le indiquemos desde la posicion que le indiquemos
[1, 2, 3].splice(1, 0, 4); // [1, 4, 2, 3] (*)

// .fill nos rellena el array con el elemento que le pasemos como argumento
[1, 2, 3].fill(0); // [0, 0, 0] (*)

// si le pasamos un segundo argumento nos rellena el array desde la posicion que le indiquemos
[1, 2, 3].fill(0, 1); // [1, 0, 0] (*)

// si le pasamos un tercer argumento nos rellena el array desde la posicion que le indiquemos hasta la posicion que le indiquemos
[1, 2, 3].fill(0, 1, 2); // [1, 0, 3] (*)

// .map nos devuelve un nuevo array con los elementos del array original modificados por la funcion que le pasemos como argumento
[1, 2, 3].map((el) => el * 2); // [2, 4, 6]

// .filter nos devuelve un nuevo array con los elementos del array original que cumplan la condicion que le pasemos como argumento
[1, 2, 3].filter((el) => el > 1); // [2, 3]

// .reduce nos devuelve un nuevo array con los elementos del array original reducidos por la funcion que le pasemos como argumento
[1, 2, 3].reduce((acc, el) => acc + el); // 6

// .forEach itera sobre los elementos del array original y ejecuta la funcion que le pasemos como argumento mas no nos devuelve nada
[1, 2, 3].forEach((el) => el * 2); // undefined

// .some nos devuelve true si algun elemento del array original cumple la condicion que le pasemos como argumento
[1, 2, 3].some((el) => el > 1); // true

// y false en caso de que ningun elemento del array original cumpla la condicion que le pasemos como argumento
[1, 2, 3].some((el) => el > 3); // false

// .every nos devuelve true si todos los elementos del array original cumplen la condicion que le pasemos como argumento
[1, 2, 3].every((el) => el > 0); // true

// y false en caso de que algun elemento del array original no cumpla la condicion que le pasemos como argumento
[1, 2, 3].every((el) => el > 1); // false

// .find nos devuelve el primer elemento del array original que cumpla la condicion que le pasemos como argumento
[1, 2, 3].find((el) => el > 1); // 2

// .findIndex nos devuelve la posicion del primer elemento del array original que cumpla la condicion que le pasemos como argumento
[1, 2, 3].findIndex((el) => el > 1); // 1

// si ningun elemento del array original cumple la condicion que le pasemos como argumento nos devuelve -1
[1, 2, 3].findIndex((el) => el > 3); // -1

// .flat nos devuelve un nuevo array con los elementos del array original aplanados
[1, [2, 3]].flat(); // [1, 2, 3]

// si le pasamos un argumento nos devuelve un nuevo array con los elementos del array original aplanados tantas veces como le indiquemos
[1, [2, [3]]].flat(2); // [1, 2, 3]

// .flatMap nos devuelve un nuevo array con los elementos del array original modificados por la funcion que le pasemos como argumento y posteriormente los aplana en un solo array
[1, 2, 3].flatMap((el) => el * 2); // [2, 4, 6]
[1, 2, 1].flatMap((el) => (el === 1 ? [el, el] : el)); // [1, 1, 2, 1, 1]

// .keys nos devuelve un nuevo array con las posiciones del array original
['A', 'B', 'C'].keys(); // [0, 1, 2]

// .values nos devuelve un nuevo array con los elementos del array original

['A', 'B', 'C'].values(); // ['A', 'B', 'C']

// .entries nos devuelve un nuevo array con las posiciones y los elementos del array original
['A', 'B', 'C'].entries(); // [[0, 'A'], [1, 'B'], [2, 'C']]

// .from nos devuelve un nuevo array con los elementos del array original
Array.from([1, 2, 3]); // [1, 2, 3]

// .of nos devuelve un nuevo array con los elementos que le pasemos como argumento
Array.of(1, 2, 3); // [1, 2, 3]

// .isArray nos dice si el elemento que le pasemos como argumento es un array y nos devuelve true en caso de que si lo sea
Array.isArray([1, 2, 3]); // true

// y false en caso de que no lo sea
Array.isArray(1); // false

// .toString nos devuelve un string con los elementos del array separados por comas
[1, 2, 3].toString(); // '1,2,3'

// .toLocaleString nos devuelve un string con los elementos del array separados por comas y con el formato de lenguaje que le indiquemos
[7, 500, 8123, 12].toLocaleString("en-US", { style: "currency", currency: "USD" }) // '$7.00, $500.00, $8,123.00, $12.00'

// .copyWithin nos devuelve un nuevo array con los elementos del array original copiados desde la posicion que le indiquemos hasta la posicion que le indiquemos
['A', 'B', 'C'].copyWithin(1, 0); // ['A', 'A', 'B']

// si le pasamos un tercer argumento nos copia los elementos desde la posicion que le indiquemos hasta la posicion que le indiquemos
[1, 2, 3].copyWithin(1, 0, 1); // [1, 1, 3] (*)

// .lastIndexOf nos da la posicion del elemento que le indiquemos empezando desde el final del array
[1, 2, 3].lastIndexOf(2); // 1

// si el elemento no existe nos da -1
[1, 2, 3].lastIndexOf(4); // -1

// .reduceRight nos devuelve un nuevo array con los elementos del array original reducidos por la funcion que le pasemos como argumento, la única diferencia con .reduce es que empieza desde el final del array a reducir
[[1,2], [2,3], [3,4]].reduceRight((acc, el) => acc.concat(el)); // [3, 4, 2, 3, 1, 2]


/* 
    Recuerden que no es necesario aprender todo esto de memoria
    pueden consultar esta guia cuando lo necesiten, 
    lo importante es entender como funciona cada método
    y saber que existen para poder usarlos cuando los necesiten
*/

/* Recopilación realizada con ❤️ por Jonathan Araya */