let array = [];

array = [
  // '<img src="images/bar.png" class="img-fluid" alt="Responsive image">',
  // '<img src="images/cherry.png" class="img-fluid" alt="Responsive image">',
  // '<img src="images/prum.png" class="img-fluid" alt="Responsive image">',
  // '<img src="images/seven.png" class="img-fluid" alt="Responsive image">',
  // '<img src="images/suika.png" class="img-fluid" alt="Responsive image">',
  // '<img src="images/suneo.png" class="img-fluid" alt="Responsive image">',
  'A',
  'B',
  'C',
  'D',
  'E',
];
// ・文字をランダムで出力するプログラムをつくろう
// 1. HTMLファイルに、ランダム文字列表示用の要素をつくる（  <span id="rand1"></span> ）
// 2. 関数 shuffle(id)関数を作成する。引数は、上記要素のidを渡すためのid文字列を持たせる
// 3. 関数 shuffle(id)では、一定時間ごとに処理を呼び出すsetInterval()を使って、文字列を定期的に変更する

function shuffle(id) {
  setInterval(function() {
    const roll = [Math.floor(Math.random() * array.length)];
    console.log(array[roll])
    document.getElementById("rand1").innerHTML = (array[roll]);
  }), 100
};


function start(){
  start_lever()
  start_stop_buttons()
  shuffle()
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
