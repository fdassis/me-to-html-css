function clikButton() {
  var num = Number(document.getElementById("start").value);
  var select = document.getElementById("tab");

  select.innerHTML = " ";
  for (var temp = 0;temp <= 10; temp ++ ){
    var item = document.createElement('option');
    item.text = `${num} x ${temp} = ${num * temp}`;
    item.value = `select${temp}`;
    select.appendChild(item);
  }
}