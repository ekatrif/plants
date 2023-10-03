// Services blur
const serviceButtonsWrapper = document.querySelector(".service__list");
const serviceButtons = document.querySelectorAll(".service__link");
const serviceCards = document.querySelectorAll(".services__item");
const serviceCardsArray = [...serviceCards];
serviceButtonsWrapper.addEventListener("click", filterServices);
function filterServices(e) {
        // If current button was inactive
    if (e.target.classList.contains("service__link")&&!e.target.classList.contains("service__link-active")) {
        // How many buttons are active?
        let servicesActiveButtons = document.querySelectorAll(".service__link-active");
        if (servicesActiveButtons.length<2) {
            toggleButtonActive(e);
            for (let i=0;i<serviceButtons.length;i++) {
            if (!serviceButtons[i].classList.contains("service__link-active")) {
                switch (serviceButtons[i].innerText) {
                case 'Gardens':
                for (let j=0; j<serviceCardsArray.length;j++) {
                    let title = serviceCardsArray[j].querySelector(".services__title > a");
                    if (title.innerText==="Garden care") {
                        addBlur(serviceCardsArray[j]);
                        }
                    }
                break;
                case 'Lawn':
                for (let j=0; j<serviceCardsArray.length;j++) {
                    let title = serviceCardsArray[j].querySelector(".services__title > a");
                    if (title.innerText==="Lawn care") {
                        addBlur(serviceCardsArray[j]);
                        }
                    }
                break;
                case 'Planting':
                for (let j=0; j<serviceCardsArray.length;j++) {
                    let title = serviceCardsArray[j].querySelector(".services__title > a");
                    if (title.innerText==="Planting") {
                        addBlur(serviceCardsArray[j]);
                        }
                    }
                break;
        }
                    
            } else {
                switch (serviceButtons[i].innerText) {
                    case 'Gardens':
                    for (let j=0; j<serviceCardsArray.length;j++) {
                        let title = serviceCardsArray[j].querySelector(".services__title > a");
                        if (title.innerText==="Garden care") {
                            removeBlur(serviceCardsArray[j]);
                            }
                        }
                    break;
                    case 'Lawn':
                    for (let j=0; j<serviceCardsArray.length;j++) {
                        let title = serviceCardsArray[j].querySelector(".services__title > a");
                        if (title.innerText==="Lawn care") {
                            removeBlur(serviceCardsArray[j]);
                            }
                        }
                    break;
                    case 'Planting':
                    for (let j=0; j<serviceCardsArray.length;j++) {
                        let title = serviceCardsArray[j].querySelector(".services__title > a");
                        if (title.innerText==="Planting") {
                            removeBlur(serviceCardsArray[j]);
                            }
                        }
                    break;
            }
            }
        }
       
    }
} else if (e.target.classList.contains("service__link-active")) {
        let servicesActiveButtons = document.querySelectorAll(".service__link-active");
        toggleButtonActive(e);
        if (servicesActiveButtons.length>1) {
        switch (e.target.innerText) {
            case 'Gardens':
            for (let j=0; j<serviceCardsArray.length;j++) {
                let title = serviceCardsArray[j].querySelector(".services__title > a");
                if (title.innerText==="Garden care") {
                    addBlur(serviceCardsArray[j]);
                    }
                }
            break;
            case 'Lawn':
            for (let j=0; j<serviceCardsArray.length;j++) {
                let title = serviceCardsArray[j].querySelector(".services__title > a");
                if (title.innerText==="Lawn care") {
                    addBlur(serviceCardsArray[j]);
                    }
                }
            break;
            case 'Planting':
            for (let j=0; j<serviceCardsArray.length;j++) {
                let title = serviceCardsArray[j].querySelector(".services__title > a");
                if (title.innerText==="Planting") {
                    addBlur(serviceCardsArray[j]);
                    }
                }
            break;
    }
    } else {
        unblurAll();
    }
}
}
function unblurAll() {
    serviceCards.forEach(card=>card.classList.remove("blur"));
}
function removeBlur(element) {
    element.classList.remove("blur");
}
function addBlur(element) {
    element.classList.add("blur");
}
function toggleButtonActive(e) {
    e.target.classList.toggle("service__link-active");
}