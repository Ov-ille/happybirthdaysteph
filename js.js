window.onload = function () {
    const text = document.getElementById("text");
    const continuebutton = document.getElementById("continuebutton");
    const box = document.getElementById("box");
    const closex = document.getElementById("closex");
    const boxtext = document.getElementById("boxtext");
    const buttonbox1 = document.getElementById("buttonbox1");
    const buttonbox2 = document.getElementById("buttonbox2");
    const correctbutton1 = document.getElementById("correctbutton1");
    const correctbutton2 = document.getElementById("correctbutton2");
    const buttonrow = document.getElementById("buttonrow");
    const checkboxbox = document.getElementById("checkboxbox");
    const checkbox = document.getElementById("checkbox");
    const gif = document.getElementById("gif");
    let counter = 0;
    continuebutton.addEventListener("click", () => {
        if (counter === 0) {
            text.innerHTML = "Mein lieber Bruder Stef"
            continuebutton.innerText = "Weiter"
            counter += 1
        }
        else if (counter === 1) {
            text.innerHTML = "flpeffl,"
            counter += 1
            box.style.display = "block"
        }
        else if (counter === 2) {
            text.innerHTML = "wie du vielleicht weißt<br>ist heute dein Geburtstag."
            counter += 1
        }
        else if (counter === 3) {
            text.innerHTML = "Deshalb gratulieren dir heute auch (hoffentlich) so viele Menschen."
            counter += 1
            box.style.display = "block"
            boxtext.innerText = "Mit einem der Buttons gehts weiter."
            buttonbox1.style.display = "flex"
            buttonbox2.style.display = "flex"
        }
        else if (counter === 4) {
            text.innerHTML = "Zum Glück macht das nicht jeder so umständlich wie ich."
            counter += 1
            box.style.display = "block"
            boxtext.innerText = "Klicke 'Zurück' um weiter zu machen."
            buttonrow.style.display = "flex"
        }
        else if (counter === 5) {
            text.innerHTML = "Ich wünsche dir jedenfalls..."
            counter += 1
        }
        else if (counter === 6) {
            text.innerHTML = "ALLES GUUUUUUTE!"
            counter += 1
            box.style.display = "block"
            boxtext.innerText = "Jetzt erfährst du gleich was ich dir wünsche!"
            buttonrow.style.display = "none"
        }
    })
    closex.addEventListener("click", () => {
        if (counter < 7 && counter !== 4 && counter !== 5) {
            box.style.display = "none"
        }
        else if (counter === 7) {
            checkboxbox.style.display = "flex"
            counter += 1
        }
        else if (checkbox.checked) {
            box.style.display = "none"
            continuebutton.style.display = "none"
            checkboxbox.style.display = "none"
            gif.style.display = "block"
        }

    })

    correctbutton1.addEventListener("click", () => {
        buttonbox1.style.display = "none"
        buttonbox2.style.display = "none"
        box.style.display = "none"
    })
    correctbutton2.addEventListener("click", () => {
        box.style.display = "none"
    })


}