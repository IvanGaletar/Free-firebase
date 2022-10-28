document.getElementById("verde").onmouseover = function() {mouseOver1()};
document.getElementById("verde").onmouseout = function() {mouseOut1()};

function mouseOver1() {
    document.body.style.backgroundColor = "green";
    document.getElementById("verde").style.border = "0px";
}

function mouseOut1() {
    document.body.style.backgroundColor = "grey";
}


document.getElementById("amarillo").onmouseover = function() {mouseOver2()};
document.getElementById("amarillo").onmouseout = function() {mouseOut2()};

function mouseOver2() {
    document.body.style.backgroundColor = "yellow";
    document.getElementById("amarillo").style.border = "0px";
}

function mouseOut2() {
    document.body.style.backgroundColor = "grey";
}


document.getElementById("rojo").onmouseover = function() {mouseOver3()};
document.getElementById("rojo").onmouseout = function() {mouseOut3()};

function mouseOver3() {
    document.body.style.backgroundColor = "red";
    document.getElementById("rojo").style.border = "0px";
}

function mouseOut3() {
    document.body.style.backgroundColor = "grey";
}