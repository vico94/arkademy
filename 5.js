function checkString (par1,par2){
  var pisah_huruf = par1.split('');
  var match = 0;
  pisah_huruf.forEach(char => {
    if (char === par2){
      match++
    }
  })
  if (match !== 0){
    return match;
  } else {
    return "not found"
  }
}
