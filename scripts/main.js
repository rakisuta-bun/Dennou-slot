// スロットの出目の画像タグ
let rolls = [
    '<img src="images/cherry.png" class="img-fluid" style="height: 100px">',
    '<img src="images/prum.png" class="img-fluid" style="height: 100px">',
    '<img src="images/suika.png" class="img-fluid" style="height: 100px">',
    '<img src="images/bar.png" class="img-fluid" style="height: 100px">',
    '<img src="images/seven.png" class="img-fluid" style="height: 100px">',
    '<img src="images/suneo.png" class="img-fluid" style="height: 100px">',
];
// スロットの回転を管理するためのタイマー
let intervalTimers = [
    null, null, null
];
// スロットの結果を保存する配列
let result = [
    null, null, null
]

function ranNum(num = null) {
  if (num === null) {
    num = Math.ceil( Math.random() * 1000 );
  }
  document.getElementById("dat").value = num;
    //ハズレ
    if (1 <= num && num <=299 ){
        do {
            result[0] = Math.floor(Math.random() * rolls.length);
            result[1] = Math.floor(Math.random() * rolls.length);
            result[2] = Math.floor(Math.random() * rolls.length);
            console.log(result)
        } while (result[0] == result[1] == result[2])
    }
    //チェリー
    if (300 <= num && num <=499 ){
        result = [0,0,0,]
    }
    //プラム
    if (350 <= num && num <=699 ){
        result = [1,1,1,]
    }
    //スイカ
    if (700 <= num && num <=949 ){
        result = [2,2,2,]
    }
    //BAR
    if (950 <= num && num <=989 ){
        result = [3,3,3,]
    }
    //7
    if (990 <= num && num <=997 ){
        result = [4,4,4,]
    }
    //スネ夫
    if (998 <= num && num <=1000 ){
        result = [5,5,5,]
    }
    //  console.log(result)
}

function shuffle(id) {
    intervalTimers[id] = setInterval(function () {
        const roll = Math.floor(Math.random() * rolls.length);
        // console.log(rolls[roll])
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

function setResult() {
    // result[0] = Math.floor(Math.random() * rolls.length);
    // result[1] = Math.floor(Math.random() * rolls.length);
    // result[2] = Math.floor(Math.random() * rolls.length);
    while(result[0] === result[1] === result[2]) {
        result[0] = Math.floor(Math.random() * rolls.length);
        result[1] = Math.floor(Math.random() * rolls.length);
        result[2] = Math.floor(Math.random() * rolls.length);
    }

    console.log("Result 0: ", result[0])
    console.log("Result 1: ", result[1])
    console.log("Result 2: ", result[2])
}

function start() {
    if (isStopAllSlots() === false) {
        return false
    }
    // setResult()
    start_lever()
    start_stop_buttons()
    shuffle(0)
    shuffle(1)
    shuffle(2)
    ranNum(123)
}

function start_lever() {
    const obj = document.getElementById("start-button")
    obj.classList.add("btn-primary");
    obj.classList.remove("btn-secondary");
}

function start_stop_buttons() {
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
document.getElementById("stop-1").onclick = function () {
    this.classList.toggle("btn-danger");
    stop(0);
    const elementId = 'rand0';
    document.getElementById(elementId).innerHTML = rolls[result[0]];

}
document.getElementById("stop-2").onclick = function () {
    this.classList.toggle("btn-danger");
    stop(1);
    const elementId = 'rand1';
    document.getElementById(elementId).innerHTML = rolls[result[1]];
}
document.getElementById("stop-3").onclick = function () {
    this.classList.toggle("btn-danger");
    stop(2);
    const elementId = 'rand2';
    document.getElementById(elementId).innerHTML = rolls[result[2]];
}
