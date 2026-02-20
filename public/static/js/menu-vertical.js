// ocultar los menús verticales
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('leftMenu').style.display = 'none';
    document.getElementById('rightMenu').style.display = 'none';


 // Selecciona todos los enlaces dentro de los menús y les asigna el evento de cerrar
 const leftMenuLinks = document.querySelectorAll('#leftMenu a');
 const rightMenuLinks = document.querySelectorAll('#rightMenu a');

 leftMenuLinks.forEach(link => {
     link.addEventListener('click', () => closeMenu('leftMenu'));
 });

 rightMenuLinks.forEach(link => {
     link.addEventListener('click', () => closeMenu('rightMenu'));
 });
});



function toggleMenus() {
    const leftMenu = document.getElementById('leftMenu');
    const rightMenu = document.getElementById('rightMenu');
   
        
    if (leftMenu.style.display === 'block'|| rightMenu.style.display==='block') {
        leftMenu.style.display = 'none';
        rightMenu.style.display = 'none';
    } else {
        leftMenu.style.display = 'block';
        rightMenu.style.display = 'block';
    }
}

function closeMenu(menuId) {
    document.getElementById(menuId).style.display = 'none';
};