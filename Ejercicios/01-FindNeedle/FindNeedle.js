function FindNeedle(haystack, needle) {
  // Your code here:
  if (haystack.length < needle.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) return i;
    }
  }

  return -1;

  // react-redux
  //  i
  // x
  // redux
}

// APROXIMACION

// ver tamaños que no sea menor el needle que el haystack
// iterar el haystack
// buscamos la primer letra del needle y vemos si coincide hay adelante

module.exports = FindNeedle;
