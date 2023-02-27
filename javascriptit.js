/*
var n1 = document.getElementById("numero1");

var n2 = document.getElementById("numero2");

var tulos = document.getElementById("ratkaisu");

document.getElementById("plus").addEventListener("click", function() {
    tulos.value = parseInt(nl.value)+parseInt(n2.value);
});

document.getElementById("miinus").addEventListener("click", function() {
    tulos.value = parseInt(nl.value)-parseInt(n2.value);
});

document.getElementById("kerto").addEventListener("click", function() {
    tulos.value = parseInt(nl.value)*parseInt(n2.value);
});

document.getElementById("jako").addEventListener("click", function() {
    tulos.value = parseInt(nl.value)/parseInt(n2.value);
});
*/

function munTulos()
{
    var a=parseInt(document.getElementById('numero1').value);
    var b=parseInt(document.getElementById('numero2'). value);
    document.getElementById('tulos').innerHTML=(a+b);
}

function munTulos2()
{
    var a=parseInt(document.getElementById('numero1').value);
    var b=parseInt(document.getElementById('numero2'). value);
    document.getElementById('tulos').innerHTML=(a-b);
}

function munTulos3()
{
    var a=document.getElementById('numero1').value;
    var b=document.getElementById('numero2'). value;
    document.getElementById('tulos').innerHTML=(a*b);
}

function munTulos4()
{
    var a=document.getElementById('numero1').value;
    var b=document.getElementById('numero2'). value;
    document.getElementById('tulos').innerHTML=(a/b);
}