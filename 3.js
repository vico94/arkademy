function sortNumber (par1){
  var sort = par1.replace(/\D/g,'').split('').sort();
  var result = ""

  sort.forEach(n => {
    result = result + n
  })

  if (sort.length === 0) {
    return "No number found in parameter!"
  } else {
    return result
  }
}
