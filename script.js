document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');
    
  
       formulario.addEventListener('submit', function (e) {
        e.preventDefault(); 
        
        const nombreInput = document.getElementById('nombre');
        const apellidoInput = document.getElementById('apellido');
        const fechaNacimientoInput = document.getElementById('fechaNacimiento');
   
   
        const datos = {
            name: nombreInput.value,
            username: apellidoInput.value,
            birthdate: fechaNacimientoInput.value,
        };
        
        const url = 'https://jsonplaceholder.typicode.com/users';
        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        };
        
    
        fetch(url, opciones)
            .then((response) => {
                 return response.json();
            })
            .then((data) => {
              console.log(data);
                alert("Registrado")
               })
         
         }) ;
});
