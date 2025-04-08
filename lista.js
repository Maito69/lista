var kaverit = [];

function nimet() {
    kaverit = [];
    for (var i = 0; i < 10; i++) {
        var nimi = prompt("Anna kaverin nimi:");
        kaverit.push(nimi);
    }
    naytaLista();
}

function naytaLista() {
    var lista = document.getElementById("lista");
    lista.innerHTML = "";
    for (var i = 0; i < kaverit.length; i++) {
        var uusi = document.createElement("li");
        uusi.textContent = kaverit[i];
        lista.appendChild(uusi);
    }
}
