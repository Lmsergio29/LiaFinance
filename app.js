// Espera a que todo el HTML de la página (index.html) esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Busca el formulario de registro en la página
    const miFormulario = document.querySelector('.formulario-registro');

    // 2. Si lo encuentra, le da funcionalidad
    if (miFormulario) {
        
        // 3. Detecta cuándo el usuario presiona "Enviar"
        miFormulario.addEventListener('submit', (event) => {
            
            // 4. EVITA que la página se recargue
            event.preventDefault(); 
            
            // 5. Captura ("llena") los datos de los campos
            const nombre = document.getElementById('nombre').value;
            const pais = document.getElementById('pais').value;

            // 6. Captura los "intereses" (checkboxes)
            const intereses = [];
            document.querySelectorAll('input[name="interes"]:checked').forEach((checkbox) => {
                intereses.push(checkbox.value);
            });

            // 7. Captura el "género" (radio button)
            const generoRadio = document.querySelector('input[name="genero"]:checked');
            const genero = generoRadio ? generoRadio.value : 'No seleccionado';

            // 8. Validación (revisa si el nombre está vacío)
            if (nombre.trim() === '') {
                alert('Por favor, ingresa tu nombre.');
                return; // Detiene la función
            }

             // 9. Llevamos al usuario a la parte de arriba
              window.scrollTo({
              top: 0,
               behavior: 'smooth' // Para un scroll suave
          });
            
            // 10. Limpia el formulario
            miFormulario.reset();
        });
    }
});