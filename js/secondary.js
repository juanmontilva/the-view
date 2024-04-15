// carga estilos en el navegador

// // window.addEventListener('scroll',() =>{
// //     document.querySelector('nav').classList.toggle('window-scrolled'),window.scrollY >0;
// // })

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
});

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//         document.querySelector('nav').classList.add('window-scrolled');
//     } else {
//         document.querySelector('nav').classList.remove('window-scrolled');
//     }
// });

// boton de contacto
const textButtons = document.querySelectorAll('.contact__btn');


textButtons.forEach(textButtons =>{
    let text = textButtons.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character,index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})



