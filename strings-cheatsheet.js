/* Strings Cheat Sheet */

// .length nos da la longitud del string
'bootcamper'.length; // 10  

// .charAt nos da el caracter en la posicion que se le indica
'bootcamper'.charAt(0); // 'b' 

// [] nos da el caracter en la posicion que se le indica
'bootcamper'[1]; // 'o' 

// .indexOf nos da la posicion del caracter que se le indica
'bootcamper'.indexOf('c'); // 4 

// si el caracter no existe nos da -1
'bootcamper'.indexOf('z'); // -1 

// .slice nos da el string desde la posicion que se le indica
'bootcamper'.slice(4); // 'camper' 

// .slice nos da el string desde la posicion que se le indica hasta la posicion que se le indica si le pasamos dos parametros
'bootcamper'.slice(4, 7); // 'cam'

// .slice nos da el string desde la posicion que se le indica empezando desde el final si le pasamos un parametro negativo
'bootcamper'.slice(-3); // 'per'

// .includes nos dice si el string contiene el caracter que se le indica y nos devuelve true en caso de que si lo contenga
'bootcamper'.includes('camp'); // true

// y false en caso de que no lo contenga
'bootcamper'.includes('z'); // false

// .replace nos reemplaza el caracter que le indiquemos en el primer argumento  por el que le indiquemos en el segundo argumento
'bootcamper'.replace('camp', 'code'); // 'bootcoder'

// .toUpperCase nos devuelve el string en mayusculas
'bootcamper'.toUpperCase(); // 'BOOTCAMPER'

// .toLowerCase nos devuelve el string en minusculas
'BootCamper'.toLowerCase(); // 'bootcamper'

// .trim nos quita los espacios en blanco al principio y al final del string
'   bootcamper   '.trim(); // 'bootcamper'

// .split nos devuelve un array con los caracteres del string separados por el caracter que le indiquemos
'bootcamper'.split('c'); // ['boot', 'amper']

// si le pasamos un string vacio nos devuelve un array con los caracteres del string separados por cada caracter
'bootcamper'.split(''); // ['b', 'o', 'o', 't', 'c', 'a', 'm', 'p', 'e', 'r']

// si no le pasamos ningun argumento nos devuelve un array con el string completo
'bootcamper'.split(); // ['bootcamper']

// si le pasamos un segundo argumento nos devuelve un array con el string en la posicion que le indiquemos
'bootcamper'.split('c', 1); // ['boot']

// .startsWith nos dice si el string empieza por el caracter que le indiquemos y nos devuelve true en caso de que si lo contenga
'bootcamper'.startsWith('boot'); // true

// .endsWith nos dice si el string termina por el caracter o string  que le indiquemos y nos devuelve true en caso de que si lo contenga
'bootcamper'.endsWith('per'); // true

// .repeat nos repite el string tantas veces como le indiquemos
'bootcamper'.repeat(2); // 'bootcamperbootcamper'

// .concat nos concatena el string que le indiquemos
'bootcamper'.concat(' is awesome'); // 'bootcamper is awesome'


/* 
    Recuerden que no es necesario aprender todo esto de memoria
    pueden consultar esta guia cuando lo necesiten, 
    lo importante es entender como funciona cada método
    y saber que existen para poder usarlos cuando los necesiten
*/

/* Recopilación realizada con ❤️ por Jonathan Araya */