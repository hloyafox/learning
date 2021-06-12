//Rest

const log = function(a, b, ...rest) {
    console.log(a, b, rest);

}

log('basic', 'rest', 'operator', 'usage');

//Параметры по умолчанию
function calcOrDouble(numb, basis  = 2) {
    console.log(numb*basis);
}

calcOrDouble(3, 7);