function clikButton() {
  var start = Number(document.getElementById("start").value);
  var end = Number(document.getElementById("end").value);
  var step = Number(document.getElementById("step").value);
  var result = document.getElementById("result")

  if(step <= 0)
    step = 1;
  
  if(start == 0 || end == 0 || step == 0) {
    result.innerHTML = `Impossivel contar`;
  } else {
    result.innerHTML = "Contando: <br>"

    //Contagem decresente
    if(start > end){
      for(start; start >= end; start -= step){
        result.innerHTML += `${start} 👉`
      }
    
    // Contagem crescente   
    } else {
      for(start; start <= end; start += step){
        result.innerHTML += `${start} 👉`
      }
    }
    result.innerHTML += '🏁';
  }
  
}