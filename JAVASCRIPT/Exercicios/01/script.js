function loading() {
  var saud = window.document.getElementById("saudacao");
  var msg = window.document.getElementById("divTextHours");
  var img = window.document.getElementById("image");
  var hours = new Date().getHours();

  if (hours >= 18) {
    saud.innerHTML = "Boa Noite";
    msg.innerHTML = `Agora são ${hours} horas`;
    img.src = './img/noite.jpg';
    document.body.style.backgroundColor = '#323232';
  } else if ( hours >= 0 && hours < 12) {
    saud.innerHTML = "Boa Dia";
    msg.innerHTML = `Agora são ${hours} horas`;
    img.src = './img/manha.jpg';
    document.body.style.backgroundColor = '#0075f6';
  } else {
    saud.innerHTML = "Boa Tarde";
    msg.innerHTML = `Agora são ${hours} horas`;
    img.src = './img/tarde.jpg';
    document.body.style.backgroundColor = '#ffce76';
  }
}