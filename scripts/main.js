function start(){
  start_lever()
  start_stop_buttons()
}
function start_lever(){
  const obj = document.getElementById("start-button")
  obj.classList.add("btn-primary");
  obj.classList.remove("btn-secondary");
}
function start_stop_buttons(){
  const obj1 = document.getElementById("stop-1")
  obj1.classList.add("btn-primary");
  obj1.classList.remove("btn-secondary");
  const obj2 = document.getElementById("stop-2")
  obj2.classList.add("btn-primary");
  obj2.classList.remove("btn-secondary");
  const obj3 = document.getElementById("stop-3")
  obj3.classList.add("btn-primary");
  obj3.classList.remove("btn-secondary");
}
document.getElementById("start-button").onclick = start
;
document.getElementById("stop-1").onclick = function() {
  this.classList.toggle("btn-danger");
};
document.getElementById("stop-2").onclick = function() {
  this.classList.toggle("btn-danger");
};
document.getElementById("stop-3").onclick = function() {
  this.classList.toggle("btn-danger");
};
