/**** EJERCICIO 1******/

const CONT_ELEMENTO = function(elemento) {
        try {
            switch (typeof elemento) {
                case 'string':
                    console.log(`La cadena \'${elemento}\' contiene ${elemento.length} caracteres`);
                    break;
                case 'number':
                    console.log(`El numero \'${elemento}\' contiene ${elemento.toString().length} caracteres`);
                    break;
                case 'object':
                    console.log(`El objeto contiene ${Object.values(elemento).length} registro(s)`);
                    break;
                default:
                    console.warn('El dato es nulo o no tengo ese tipo de dato...');
                    break;
            }
        } catch (error) {
            console.error(`Surgio en siguiente error: ${error}`);
        }
    }
    // CONT_ELEMENTO('Hola mundo');

/**** EJERCICIO 2******/
const CUT_STRING = (cadena = '', cantidad = undefined) => {
        try {
            return (typeof cadena === 'string' && cadena != '' && typeof cantidad === 'number') ?
                console.log(cadena.slice(0, cantidad)) :
                console.warn('Los argumentos son inválidos o faltan parámetros...');
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // CUT_STRING('Hola', 2);

/**** EJERCICIO 3******/

const SEPARE_STRING = (cadena = '', separador = '') => {
        try {
            return ((cadena && separador) != '' && typeof(cadena && separador) === 'string') ?
                console.log(`La cadena en arreglo es la siguiente [${cadena.split(separador)}]`) :
                console.warn('Los argumentos son inválidos o faltan parámetros, inténtalo de nuevo...');
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // SEPARE_STRING('5.6.9.8.1', '.   ');

/**** EJERCICIO 4******/
const REPEAT_STRING = (elemento = undefined, numero = undefined) => {
        try {
            if ((elemento && numero) != undefined && numero != 0) {
                for (let i = 0; i < Math.abs(numero); i++) {
                    console.info(`${elemento}`);
                }
            } else {
                console.warn('Los argumentos son inválidos o faltan parámetros, inténtalo de nuevo...');
            }
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // REPEAT_STRING('Hola mundo', 1);
    // REPEAT_STRING('Hola mundo', 0);
    // REPEAT_STRING('Hola mundo', -20);
    // REPEAT_STRING('Hola mundo', -20);
    // REPEAT_STRING(''    );

/**** EJERCICIO 5******/
const INVERT = (cadena = '') => {
        try {
            return (typeof cadena === 'string' && cadena != '') ?
                console.log(cadena.split('').reverse().join('')) :
                console.warn('El argumento no es string o faltan parámetros, inténtalo de nuevo...');
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // INVERT('Javascript es un lenguajes de programacion genial');

/**** EJERCICIO 6******/
const FIND = (word, searchedWord) => {
    return (word.includes(searchedWord)) ?
        console.log(`La palabra se encuentra ${word.split(' ').filter(w => w === searchedWord).length} veces en la cadena...`) :
        console.log('La palabra no se encuentra en la cadena...');
}

// FIND('Hola mundo adios mundo mundo', 'mundo');

/**** EJERCICIO 7******/
const PALINDROME = (cadena = '') => {
    try {
        if (typeof cadena === 'string' && cadena != '') {
            let temporal = cadena.toLowerCase().localeCompare(cadena.toLowerCase().split('').reverse().join(''));
            return (temporal === 0) ?
                console.log(`La cadena ${cadena} es un palindromo...`) :
                console.log(`La cadena ${cadena} no es un palindromo...`);
        } else {
            console.warn('El argumento no es string o faltan parámetros, inténtalo de nuevo...');
        }
    } catch (error) {
        console.error(`Surgio el siguiente error ${error}`);
    }
}

// PALINDROME('aNA');

/**** EJERCICIO 8******/

const PATTERN = (cadena = '', pattern = undefined) => {
    try {
        if (typeof cadena === 'string' && cadena != '' && pattern != undefined) {
            let regex = new RegExp(pattern, 'ig');;
            console.log(cadena.replace(regex, ''));
        } else {
            console.warn('El argumento no es string o faltan parámetros, inténtalo de nuevo...');
        }
    } catch (error) {
        console.error(`Surgio el siguiente error ${error}`);
    }
}


// PATTERN('Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est voluptas deleniti officiis, alias odio, iure et eum, nostrum impedit dolores earum nisi enim veniam ipsum! Reprehenderit optio corporis exercitationem.', 'o');

/*** EJERCICIO 9 ***/
// console.time('rdm');
const NUM_RANDOM = (start, limit) => {
    try {
        if (start <= limit && start && limit && !isNaN(start) && !isNaN(limit)) {
            console.info(`El número generado aleatoriamente entre ${start} y ${limit} es ${Math.trunc(Math.random() * (limit - start) + start)}`);
        } else {
            console.warn('Los parametros ingresados no son numeros, faltan parametros o el limite es menor al inicio, intentalo de nuevo...');
        }
    } catch (error) {
        console.error(`Ocurrio el siguiente error ${error}`);
    }
};

// NUM_RANDOM();
// NUM_RANDOM('fdfd');
// NUM_RANDOM(55);
// NUM_RANDOM(30, 10);
// NUM_RANDOM(10, 30);
// NUM_RANDOM(501, 600);
// console.timeEnd('rdm');



/**** EJERCICIO 10 (OPCION 1)******/
console.time('loop');
const CAPICUA = (num = '') => {
        try {
            if (!isNaN(num) && num) {
                let temporal = '';
                for (let i = num.toString().length - 1; i >= 0; i--)
                    temporal += num.toString()[i];
                console.info((temporal == num) ? 'Los numeros son iguales' : 'Los numeros no son iguales');
            } else {
                console.warn('No se ingreso parametro o no es de tipo numero');
            }
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // CAPICUA(121);
    // console.timeEnd('loop');

/**** EJERCICIO 10 (OPCION 2)******/
// console.time('loop2');
const CAPICUA2 = (num) => {
        try {
            if (!isNaN(num) && num) {
                let conv = num.toString().split('').reverse().toString().replace(new RegExp(',', 'ig'), '');
                console.info((num == conv) ?
                    `CAPICUO: original ${num} al revés ${conv}` : `NO CAPICUO: original ${num} al revés ${conv}`);
            } else {
                console.warn('El dato no es positivo o no se ingresaron datos...');
            }
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // CAPICUA2(10001);
    // console.timeEnd('loop2');



/**** EJERCICIO 11******/

// console.time('Factorial');
const FACTORIAL = (num = '') => {
        try {
            if (!isNaN(num) && num && Math.sign(num) > 0) {
                let temporal = 1;
                for (let i = num; i > 0; i--) {
                    temporal *= i;
                }
                console.log(`El factorial de ${num} es ${temporal}`);
            } else {
                console.warn('El dato no es valido o faltan parámetros, inténtalo de nuevo...');
            }
        } catch (error) {
            console.error(`Surgio el siguiente error ${error}`);
        }
    }
    // FACTORIAL('6');
    // console.timeEnd('Factorial');