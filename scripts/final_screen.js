function finalScreen (win) {
    const menuPop = document.getElementById("menu");
    const msg = document.getElementById('msg');
    const icon = document.getElementById('icon');
    const button = document.getElementById('btn');
    
    menuPop.style.visibility = "visible";
    
    if (win) {
        icon.classList.remove("fa-heart-crack");
        icon.classList.add("fa-circle-check");
        icon.style.color = '#61D06C';
        msg.innerText = "Você acertou! A palavra era:\n" + unknown_word + ".";
        button.focus();
    }
    else {
        icon.classList.remove("fa-circle-check");
        icon.classList.add("fa-heart-crack");
        icon.style.color = '#f13a37';
        msg.innerText = "Você perdeu! A palavra era:\n" + unknown_word + ".";
        button.focus();
    }
}