window.addEventListener("load", () => {

    const radiosList = document.querySelectorAll('input[name="field-of-knowledge"]');
    const searchBox = document.getElementById("search-box");
    const evalBtn = document.getElementById("eval");
    const result = document.getElementById("result");

    styleCheckedRadio();
    cleanResult();

    radiosList.forEach(radioBtn => {
        radioBtn.addEventListener("change", () => { changePlaceholder(), styleCheckedRadio() });
        radioBtn.parentNode.addEventListener("mouseover", () => { hoverRadio(radioBtn.parentNode) });
        radioBtn.parentNode.addEventListener("mouseout", () => { cleanRadio(radioBtn, radioBtn.parentNode) });
    });

    evalBtn.addEventListener('mousedown', () => { showLevel() });

    function changePlaceholder () {
        const checkedRadio = document.querySelector('input[name="field-of-knowledge"]:checked').value;
        let placeholder;

        switch (checkedRadio) {
            case "humanas":
                placeholder = "Ciências Humanas e suas Tecnologias"
                break;
            case "linguagens":
                placeholder = "Linguagens, Códigos e suas Tecnologias"
                break;
            case "natureza":
                placeholder = "Ciências da Natureza e suas Tecnologias"
                break;
            case "matematica":
                placeholder = "Matemática e suas Tecnologias"
                break;
            default:
                placeholder = "Ciências Humanas e suas Tecnologias"    
        }
        searchBox.placeholder = "Digite aqui sua questão sobre " + placeholder;
    }

    function styleCheckedRadio () {
        radiosList.forEach(radioBtn => {
            cleanRadio(radioBtn, radioBtn.parentNode);
        });
        cleanResult();
    
        const checkedRadio = document.querySelector('input[name="field-of-knowledge"]:checked');
        checkedRadio.parentNode.style.border = "1px solid #92cccf";
        checkedRadio.parentNode.style.backgroundColor = "#f4fafa";
    }

    function hoverRadio(label) {
        label.style.border = "1px solid #92cccf";
        label.style.boxShadow = "4px 4px 4px rgba(146, 204, 207, .5)"; // #92cccf
    }

    function cleanRadio (radioBtn, label) {
        if(!radioBtn.checked) {
            label.style = "none";
        } else {
            label.style.boxShadow = "none";
        }
    }

    function getLevel() {
        let level = Math.floor(Math.random() * Math.floor(3));
        switch (level) {
            case 0:
                level = "facil"
                break;
            case 1:
                level = "medio"
                break;
            case 2:
                level = "dificil"
                break;
            default:
                console.log("erro");
        }
        return level;
    }

    function showLevel() {
        const level = getLevel();
        result.style.opacity = "1";
        switch (level) {
            case "facil":
                result.style.backgroundColor = "#289F87";
                result.innerText = "QUESTÃO FÁCIL"
                break;
            case "medio":
                result.style.backgroundColor = "#EA9D2D";
                result.innerText = "QUESTÃO MÉDIA"
                break;
            case "dificil":
                result.style.backgroundColor = "#E64C3C";
                result.innerText = "QUESTÃO DIFÍCIL"
                break;
            default:
                console.log("erro");
        }
    }

    function cleanResult() {
        result.style = "none";
        result.style.opacity = "0";
    }
});
