
/* ESSE NÃO ESTOU USANDO */
let show = true
const menuSection = document.querySelector(".menu-section")
const menuBurguer = menuSection.querySelector(".menu-burguer")

menuBurguer.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show
})

function MostrarOcultarDiv(el) {
    var display = document.getElementById(el).style.display
    if(display == "none")
        document.getElementById(el).style.display = 'block'
    else
        document.getElementById(el).style.display = 'none'
}

function acao() {
    let modal = document.querySelector('.modal')

    modal.style.display = 'block';
}

function fechar() {
    let modal = document.querySelector('.modal')

    modal.style.display = 'none';
}

function inicioPagina() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function toggleVideo1(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video01");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo2(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video02");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo3(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video03");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo4(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video04");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo5(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video05");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo6(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video06");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo7(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video07");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo8(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video08");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo9(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video09");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo10(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video10");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}

function toggleVideo11(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("video11");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'hide' ? 'none' : '';
    func = state == 'hide' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}


function abrirVideo() {
    let modal = document.querySelector('.video')

    modal.style.display = 'block';
}

function fecharMegaManX() {
    let close = document.querySelector('.video')

    close.style.display = 'none';
}

function abrirVideoTopGear() {
    let modal = document.querySelector('.video2')

    modal.style.display = 'block';
}

function fecharTopGear() {
    let close = document.querySelector('.video2')

    close.style.display = 'none';
}

function abrirVideoSunsetRiders() {
    let modal = document.querySelector('.video3')

    modal.style.display = 'block';
}

function fecharSunsetRiders() {
    let close = document.querySelector('.video3')

    close.style.display = 'none';
}

function abrirVideoDonkeyKong() {
    let modal = document.querySelector('.video4')

    modal.style.display = 'block';
}

function fecharDonkeyKong() {
    let close = document.querySelector('.video3')

    close.style.display = 'none';
}

function abrirVideoSuperMario() {
    let modal = document.querySelector('.video5')

    modal.style.display = 'block';
}

function fecharSuperMario() {
    let close = document.querySelector('.video5')

    close.style.display = 'none';
}

function abrirVideoSonic() {
    let modal = document.querySelector('.video6')

    modal.style.display = 'block';
}

function fecharSonic() {
    let close = document.querySelector('.video6')

    close.style.display = 'none';
}

function abrirVideoMetalSLug() {
    let modal = document.querySelector('.video7')

    modal.style.display = 'block';
}

function fecharMetalSLug() {
    let close = document.querySelector('.video7')

    close.style.display = 'none';
}

function abrirVideoCastlevania() {
    let modal = document.querySelector('.video8')

    modal.style.display = 'block';
}

function fecharCastlevania() {
    let close = document.querySelector('.video8')

    close.style.display = 'none';
}


function abrirVideoMetalGear() {
    let modal = document.querySelector('.video9')

    modal.style.display = 'block';
}

function fecharMetalGear() {
    let close = document.querySelector('.video9')

    close.style.display = 'none';
}


function abrirVideoResidentEvil4() {
    let modal = document.querySelector('.video10, .video11')

    modal.style.display = 'block';
}

function fecharResidentEvil4() {
    let close = document.querySelector('.video10, .video11')

    close.style.display = 'none';
}

function abrirVideoPrincipal() {
    let modal = document.querySelector('.video11')

    modal.style.display = 'block';
}

function fecharPrincipal() {
    let close = document.querySelector('.video11')

    close.style.display = 'none';
}

