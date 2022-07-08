import { validarInput, validarTextArea } from "../validaciones.js";

/*SELECTOR DE INPUTS*/

const inputs = document.querySelectorAll('input');

inputs.forEach( input =>{
    input.addEventListener('blur', (input)=>{
        validarInput(input.target);
    })
})


/*SELECTOR DE TEXTAREA*/

const textArea  = document.querySelector('textarea');

textArea.addEventListener('blur', (textArea) =>{
    validarTextArea(textArea.target)
})

/* INICIALIZADOR ANIMACIONES*/

AOS.init();

/*DETECTOR DE SECCIONES*/

const menulinks = document.querySelectorAll('.header-nav a[href^="#"]');

const observador = new IntersectionObserver( entradas => {
    entradas.forEach( entrada =>{
        const id = entrada.target.getAttribute('id');
        const link = document.querySelector(`.header-nav a[href ="#${id}"]`);

        if(entrada.isIntersecting){
            document.querySelector('.header-nav a.selecionado').classList.remove('selecionado')
            link.classList.add('selecionado');
        }
    });
},{rootMargin: "-50% 0px -50% 0px"});

menulinks.forEach( menulink =>{
    const hash = menulink.getAttribute('href');
    const target = document.querySelector(hash)
    if(target){
        observador.observe(target);
    }
})

