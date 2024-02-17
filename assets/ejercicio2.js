 // ONTIENE INFORMACION SOBRE LOS BOTONES
 const buttons = document.querySelectorAll('button');
 const caja = document.getElementById('caja');

 // SE HACE CLICK SOBLE LISTENER
 buttons.forEach(button => {
     button.addEventListener('click', function () {
         //SE AÑADE EL COLOR 
         const color = this.style.backgroundColor;

         //SE AÑADE EL COLOR A LA CAJA
         caja.style.backgroundColor = color;
     });
 });