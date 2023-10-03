const cities = {
    "Canandaigua, NY": {
        phone:"+1 585 393 0001",
        adress:"151 Charlotte Street",
    },
    "New York City": {
        phone:"+1 585 393 0002",
        adress:"1404 Rosewood Lane",
    },
    "Yonkers, NY": {
        phone:"+1 914 678 0003",
        adress:"511 Warburton Ave",
    },
    "Sherrill, NY": {
        phone:"+1 315 908 0004",
        adress:"14 WEST Noyes BLVD",
    },
};
const selector = document.querySelector(".contact-us__option");
const container = document.querySelector(".contact-us__wrapper");
let selectorFlag=false;
selector.addEventListener("click", toggleList);
container.addEventListener("click", showInfo);
function toggleList(e) {
    if (!selectorFlag) {
        showList();
    } else {
        hideList();
        hideInfo();
    }
}
function showList() {
    selectorFlag = true;
    selector.classList.add("contact-us__option-active");
    const wrapper = document.createElement('div');
    wrapper.className = "contact-us__dropdown";
    const ul = document.createElement('ul');
    ul.className = "contact-us__list";
    wrapper.appendChild(ul);
    for (let key in cities) {
        const li = document.createElement('li');
        li.className = "contact-us__item";
        li.innerText = key;
        ul.appendChild(li);
    }
    container.insertAdjacentElement("afterbegin",wrapper);
}
function hideList() {
    selectorFlag = false;
    selector.classList.remove("contact-us__option-active");
    const openedList = document.querySelector(".contact-us__dropdown");
    if (openedList) {
    openedList.remove();
    }
}
function hideInfo() {
    const info = document.querySelector(".contact-us__info");
    info.remove();
    selector.innerText = "City";
}
function showInfo(e) {
    if (e.target.classList.contains("contact-us__item")) {
        let currentKey = e.target.innerText;
        hideList();
        selectorFlag = true;
        selector.classList.add("contact-us__option-active");
        selector.innerText = currentKey;
        const wrapper = document.createElement('div');
        wrapper.className = "contact-us__info adress-info";
        const left = document.createElement('div');
        left.className = "adress-info__left";
        const right = document.createElement('div');
        right.className = "adress-info__right";
        const cityTitle = document.createElement('div');
        cityTitle.className = "adress-info__title";
        cityTitle.innerText = "City:";
        const phoneTitle = document.createElement('div');
        phoneTitle.className = "adress-info__title";
        phoneTitle.innerText = "Phone:";
        const adressTitle = document.createElement('div');
        adressTitle.className = "adress-info__title";
        adressTitle.innerText = "Office adress:";
        const cityText = document.createElement('div');
        cityText.className = "adress-info__text";
        cityText.innerText = currentKey;
        const phoneText = document.createElement('div');
        phoneText.className = "adress-info__text";
        phoneText.innerText = cities[currentKey].phone;
        const adressText = document.createElement('div');
        adressText.className = "adress-info__text";
        adressText.innerText = cities[currentKey].adress;
        const button = document.createElement('div');
        button.className = "adress-info__button";
        const link = document.createElement('a');
        link.className = "adress-info__link";
        link.setAttribute("href",`tel:${cities[currentKey].phone.replace(/\s/g,'')}`)
        button.appendChild(link);
        link.innerHTML += "Call us";
        
        right.appendChild(cityText);
        right.appendChild(phoneText);
        right.appendChild(adressText);        
        
        left.appendChild(cityTitle);
        left.appendChild(phoneTitle);
        left.appendChild(adressTitle);        
        
        wrapper.appendChild(left); 
        wrapper.appendChild(right);  
        wrapper.appendChild(button);   
         
        container.insertAdjacentElement("beforeend",wrapper);
    }
}