'use strict';

var $select = s => document.querySelector(s);

function head(szin, kep, kinek, menu) {

    let body   = $select("body");
    let header = $select("#headImg");
    let cim    = $select("#cim");
    let aktiv  = $select(`${menu}`);

    Object.assign(body.style, { "background-color": szin });

    header.src    = `${kep}`;
    cim.innerHTML = `${kinek}`;

    let mind =  document.querySelectorAll(".active");
    
    mind.forEach(pont => {
        pont.classList.remove('active');

    });

    aktiv.classList.add("active");        
}

// Példányosítások

$select('#en').addEventListener("click", function () {
    let sajat = new Listak();
    sajat.hozzaad();
    sajat.torol();

    head("#511111", "pocket.jpg", "&#129322; magamnak", "#en");
});

$select('#szom').addEventListener("click", function () {
    let szomszed = new Listak();
    szomszed.hozzaad();
    szomszed.torol();

    head("#333", "witch.webp", " &#127785; szomszédasszonyomnak", "#szom");
});

$select('#bar').addEventListener("click", function () {
    let baratno = new Listak();
    baratno.hozzaad();
    baratno.torol();

    head("#FF1493", "girlfriend.jpg", " &#128144; barátnőmnek", "#bar");
});

$select('#ex').addEventListener("click", function () {
    let exem = new Listak();
    exem.hozzaad();
    exem.torol();

    head("navy", "dragon.png", " &#128096; feleségemnek ", "#ex");
});


