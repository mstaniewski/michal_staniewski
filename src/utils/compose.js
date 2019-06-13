export default (...functions) => args =>
  functions.reduceRight((arg, fn) => fn(arg), args);
