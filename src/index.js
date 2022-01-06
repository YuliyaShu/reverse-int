module.exports = function reverse (n) {
    n = Math.abs(n);
    let nLength = String(n).length; 
    let result = '';
    for (let i = 0; i <= (nLength - 1); i++) { 
      result = `${ String(n)[i]}` + result; 
    };
    return Number(result);
  }
