
/* VALIDANDO LOS INPUTS */

export function validarInput (input){
    const tipoInput = input.dataset.tipo
    if(input.validity.valid){
        input.parentElement.classList.remove('error');
        input.parentElement.classList.add('correcto');
        input.parentElement.querySelector('.mensaje-error-input').classList.add('invisible');
        input.parentElement.querySelector('.mensaje-error-input').innerHTML = '';
    }
    else{
        input.parentElement.classList.add('error');
        input.parentElement.classList.remove('correcto');
        input.parentElement.querySelector('.mensaje-error-input').classList.remove('invisible');
        input.parentElement.querySelector('.mensaje-error-input').innerHTML = mostrarMensajeError(input, tipoInput);
    }
}


const tiposErrores = [
    'valueMissing',
    'patternMismatch',
    'typeMismatch',
    'customError',
    'tooShort'
]

const mensajesErrores = {
    nombre: {
        valueMissing: 'No puedes dejar el espacio en blanco',
        patternMismatch: 'El nombre solo puede tener LETRAS'
    },
    email: {
        valueMissing: 'No puedes dejar el espcaio en blanco',
        typeMismatch: 'Correo no valido falta un @',
        patternMismatch: 'El correo debe de ser: ejemplo@dominio.com'
    },
    asunto: {
        valueMissing: 'No puedes dejar este espacio en blanco',
        patternMismatch: 'El asunto debe de tener de 4 a 20 letras'
    },
}

const mostrarMensajeError = (input, tipoInput) =>{
    let mensaje = '';
    tiposErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesErrores[tipoInput][error];
        }
    })
    return mensaje
}



/* Validando los Textarea*/

export function validarTextArea  (textArea){
    
    if(textArea.validity.valid){
        textArea.parentElement.classList.add('correcto');
        textArea.parentElement.classList.remove('error');
        textArea.parentElement.querySelector('.mensaje-error-input').classList.add('invisible');
        textArea.parentElement.querySelector('.mensaje-error-input').innerHTML = ''
    }else{
        textArea.parentElement.classList.remove('correcto');
        textArea.parentElement.classList.add('error');
        textArea.parentElement.querySelector('.mensaje-error-input').classList.remove('invisible');
        textArea.parentElement.querySelector('.mensaje-error-input').innerHTML = mostrarMensajeErrorTextArea(textArea);
    }
}


const mostrarMensajeErrorTextArea = (textArea) => {
    let mensaje = '';
    tiposErrores.forEach(error =>{
        if(textArea.validity[error]){
            mensaje = mensajesErroresTextArea[error]
        }
    })
    return mensaje
}


const mensajesErroresTextArea ={
    valueMissing: 'No puedes dejarlo en blanco',
    tooShort:'El mensaje debe de tener de 10 a 120 caracteres'
}

