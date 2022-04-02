function bracketDetector(string) {
  //ME CREO UNA TABLA DE REFERENCIA.
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  //CAJA DONDE VOY A IR PUSHEANDO LAS APERTURAS DE BRACKET
  let caja = [];

  //ESTO ES PARA VALIDAR QUE EL PRIMER BRACKET SEA DE APERTURA. SINO DIRECTAMENTE RETORNA FALSE..
  if (!brackets[string[0]]) return false;

  //BUCLE FOR PARA IR ITERANDO EN CADA INDEX DEL STR
  for (var i = 0; i < string.length; i++) {
    //SI EN MI TABLA DE REFERENCIA EXISTE ESE INDEX, SIGNIFICA QUE ES DE APERTURA, POR LO QUE LO PUSHEO A LA CAJA.
    if (brackets[string[i]]) {
      caja.push(string[i]);
    }
    //SI NO EXISTE SIGNIFICA QUE ES DE CIERRE (SIEMPRE Y CUANDO CONSIDERANDO QUE SOLO LLEGAN BRACKETS AL STR... ESO SE PODRIA VALIDAR ANTES DE EMPEZAR.)
    //SI NO EXISTE Y EL ULTIMO INDEX DE LA CAJA EN MI TABLA ES IGUAL AL INDEX ITERADO, SIGNIFICA QUE SE ESTA CERRANDO UN BRACKET ADECUADAMENTE, SINO, SE ESTA CERRANDO UN BRACKET MAL.
    //POR LO TANTO, SI SE ABRE & CIERRA BIEN, LO ELIMINO DE MI CAJA, SINO, DEBERIA QUEDAR EN LA CAJA HASTA TERMINAR LA ITERACION.
    else if (
      !brackets[string[i]] &&
      brackets[caja[caja.length - 1]] === string[i]
    ) {
      caja.pop();
    }
  }

  //SI LA CAJA TIENE 0, SIGNIFICA QUE TODO LO Q SE ABRIO SE CERRO CORRECTAMENTE.
  if (caja.length > 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = HasBalancedBrackets;
