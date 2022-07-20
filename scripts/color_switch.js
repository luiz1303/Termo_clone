/* ====================  Switch light/Dark ====================== */

const color_switch = document.getElementById("check");
document.documentElement.classList.add('dark');

color_switch.addEventListener('change', () => {

    document.body.style.transition = "background-color 0.4s"; //Evita a transição ao carregar a página
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.remove('light');
    }
    else {
        document.documentElement.classList.add('light');
    }
});
