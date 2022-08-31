function abrefecha1() {
    let duvida = document.getElementById("hidden_texto1");
    if (duvida.style.display == "none") {
        duvida.style.display = "flex";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha2() {
    let duvida = document.getElementById("hidden_texto2");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha3() {
    let duvida = document.getElementById("hidden_texto3");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha4() {
    let duvida = document.getElementById("hidden_texto4");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha5() {
    let duvida = document.getElementById("hidden_texto5");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha6() {
    let duvida = document.getElementById("hidden_texto6");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function abrefecha7() {
    let duvida = document.getElementById("hidden_texto7");
    if (duvida.style.display == "none") {
        duvida.style.display = "block";
    }
    else {
        duvida.style.display = "none"
    }
}

function mascara(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmascara()", 1)
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id(el) {
    return document.getElementById(el);
}
window.onload = function () {
    id('telefone').onkeyup = function () {
        mascara(this, mtel);
    }
}
