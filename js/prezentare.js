const buton = document.getElementById('buton');
const animatie = document.getElementsByClassName('pagina2');
//const meniu = document.getElementsByClassName('meniu');

buton.addEventListener('click', pag_urm);

function pag_urm(e){
    animatie[0].setAttribute("transition-style", "in:custom:circle-swoop");
    animatie[0].classList.toggle('apare-pagina2');
    console.log(e);
}