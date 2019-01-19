function shapeAlert(e) {
  let messageSpan = document.getElementsByClassName('click-message')[0];
  messageSpan.innerHTML = e.target.id;
  e.preventDefault();
}

function addClicker() {
  let els = document.getElementsByClassName('shape');
  let ns = document.getElementsByClassName('ns');
  
  for (let i = 0; i < els.length; i++) {
    els[i] && els[i].addEventListener('click', shapeAlert);
    ns[i] && ns[i].addEventListener('click', shapeAlert);
  }  
}

window.onload = addClicker;