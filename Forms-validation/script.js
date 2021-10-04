

let formulario = document.querySelector('#formCadastro');



formulario.onsubmit = function(evento){
    evento.preventDefault()

    let temErro = false;

    let inputNome = document.forms['formCadastro']['nome'];



    if(!inputNome.value) {
      
        temErro = true;

        inputNome.classList.add('inputError')
      
        let span = inputNome.nextSibling.nextSibling;
        span.innerText = 'Digite o nome corretamente';
    
    } else {

        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling;
        span.innerText = ''
    }




    let inputEmail = document.forms['formCadastro']['Email'];



    if(!inputEmail.value) {
        temErro = true;

        inputEmail.classList.add('inputEmailError')

        let spanEmail = inputEmail.nextSibling.nextSibling;
        spanEmail.innerText = 'Digite o email corretamente';
        
    } else {
    
        inputEmail.classList.remove('inputEmailError')

        let spanEmail = inputEmail.nextSibling.nextSibling;
        spanEmail.innerText = ''
    }



    let inputSelect = document.forms['formCadastro']['cidade'];



    if(!inputSelect.value) {
        temErro = true;

        inputSelect.classList.add('inputSelectError')

        let spanSelect = inputSelect.nextSibling.nextSibling;
        spanSelect.innerText = 'Selecione uma cidade';

    } else {

        inputSelect.classList.remove('inputSelectError')

        let spanSelect = inputSelect.nextSibling.nextSibling;
        spanSelect.innerText = ''
    }



    if(!temErro) {
        formulario.submit()

    }

}