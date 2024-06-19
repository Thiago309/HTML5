function lerDiv() {
    var caixa = document.getElementById("cert");
    alert(caixa.innerHTML);
}

function lerImagens() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        alert(imgs[i].src);
    }
}