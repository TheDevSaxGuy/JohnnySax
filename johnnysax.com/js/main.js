function i(id){
    return document.getElementById(id);
}

window.onscroll = function() {scrl()};
var hover = false;
function scrl() {
  if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
}     
function start(){


var intv = setInterval(function() {
 
    i("out").innerHTML =  '<i style="color: black" class="fas fa-play-circle"></i>';
    clearInterval(intv);
    i("out").innerHTML = "Bienvenido!";
    i("out2").innerHTML = "Bienvenido!";
}, 1000);
}

function mov(v){
    v.innerHTML = "JOS";
}
function mot(v){
    v.innerHTML = "Johnny Ortíz Sax";
}
function mov2(v){
    v.innerHTML = 'Bienvenido <i style="color: #59adf7" class="fas fa-play-circle"></i>';
    hover =true;
}
function mot2(v){

   hover=false;
}