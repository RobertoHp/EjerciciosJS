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
    // INVERT('Hola mundo...');

/**** EJERCICIO 6******/
const FIND = (word, searchedWord) => {
    return (word.includes(searchedWord)) ?
        console.log(`La palabra se encuentra ${word.split(' ').filter(w => w === searchedWord).length} veces en la cadena...`) :
        console.log('La palabra no se encuentra en la cadena...');
}

// FIND('Hola mundo adios mundo mundo mundo', 'mundo');

/**** EJERCICIO 7******/
const PALINDROME = (cadena = '') => {
    try {
        if (typeof cadena === 'string' && cadena != '') {
            let temporal = cadena.localeCompare(cadena.split('').reverse().join(''));
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

// PALINDROME('');

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

PATTERN('xyz1 xyz2 xyz3 xyz4 xyz5', 'z');