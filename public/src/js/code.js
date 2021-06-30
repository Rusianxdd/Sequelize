const boton_agregar = document.getElementById('agregar');
const boton_cancelar_usuario = document.getElementById('cancelar_usuario');


boton_agregar.addEventListener('click',()=>{
    let formulario_agregar = document.getElementById('agregar_usuario');
   

    formulario_agregar.style.animation = 'none';
    formulario_agregar.style.display = 'flex';
    formulario_agregar.style.alignItems = 'center'; 
});


boton_cancelar_usuario.addEventListener('click',()=>{
    let formulario_agregar = document.getElementById('agregar_usuario');

        //formulario_agregar.style.animation = 'usuario_form_cancel';

        formulario_agregar.style.animationName = 'usuario_form_cancel';
        formulario_agregar.style.animationDuration = 1+'s';
        formulario_agregar.style.animationFillMode = 'forwards';
      

        setTimeout(()=>{
            formulario_agregar.style.display = 'none';
        },1000);



    
});

