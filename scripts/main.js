let rolls = [];
rolls = [
  '<img src="images/bar.png" class="img-fluid" style="height: 100px">',
  '<img src="images/cherry.png" class="img-fluid" style="height: 100px">',
  '<img src="images/prum.png" class="img-fluid" style="height: 100px">',
  '<img src="images/seven.png" class="img-fluid" style="height: 100px">',
  '<img src="images/suika.png" class="img-fluid" style="height: 100px">',
  '<img src="images/suneo.png" class="img-fluid" style="height: 100px">',
];
let intervalTimers = [
    null, null, null
];
// ・文字をランダムで出力するプログラムをつくろう
// 1. HTMLファイルに、ランダム文字列表示用の要素をつくる（  <span id="rand1"></span> ）
// 2. 関数 shuffle(id)関数を作成する。引数は、上記要素のidを渡すためのid文字列を持たせる
// 3. 関数 shuffle(id)では、一定時間ごとに処理を呼び出すsetInterval()を使って、文字列を定期的に変更する

function shuffle(id) {
  intervalTimers[id] = setInterval(function() {
    const roll = [Math.floor(Math.random() * rolls.length)];
    console.log(rolls[roll])
    const elementId = "rand" + id // rand0 ~ rand2
    document.getElementById(elementId).innerHTML = rolls[roll];
  }), 100
}

function stop(id) {
  clearTimeout(intervalTimers[id]);
  intervalTimers[id] = null;
}

function isStopAllSlots() {
  let result0 = intervalTimers[0] === null; // intervalTimersのひとつめの要素がヌルであること(true/false)
  let result1 = intervalTimers[1] === null;
  let result2 = intervalTimers[2] === null;

  return result0 && result1 && result2;
}

function start() {
  if (isStopAllSlots() === false) {
    return false
  }

  start_lever()
  start_stop_buttons()
  shuffle(0)
  shuffle(1)
  shuffle(2)
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
document.getElementById("start-button").onclick = start;
document.getElementById("stop-1").onclick = function() {
  this.classList.toggle("btn-danger");
  stop(0);
}
document.getElementById("stop-2").onclick = function() {
  this.classList.toggle("btn-danger");
  stop(1);
}
document.getElementById("stop-3").onclick = function() {
  this.classList.toggle("btn-danger");
  stop(2);
}
