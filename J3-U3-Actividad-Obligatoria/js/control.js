let form = document.querySelector('form');
let usuario = document.getElementById('usuario');
let password = document.getElementById('password');
let submit = document.getElementById('submit');

form.onsubmit = function(e) {

	if(usuario.value === '' || password.value === '' || !usuario.value.includes('@')) { //validar que no se encuentren  y el username contenga un @
		
		e.preventDefault();
		
		let motivo = "--Error-- ";

		if(usuario.value === '') {

			motivo += "Nombre de usuario vacío. ";

		}

		if(password.value === '') {

			motivo += "Contraseña vacía. ";

		}
		
		if(!usuario.value.includes('@')) {
		
			motivo += "Falta el arroba en el usuario";
		
		}
		
		alert(motivo);
	} 

}
 
