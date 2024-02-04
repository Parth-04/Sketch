let mainDiv = document.querySelector(".grid");

let btn = document.querySelector(".btn");
btn.textContent = "Change Grid Dimensions";

for (let i=0; i<16; i++){
    let divRow = document.createElement("div");
    divRow.setAttribute("class","Row");
    for (let j=0; j<16; j++){
        let divCol = document.createElement("div")
        divCol.setAttribute("class","Col");
        divRow.appendChild(divCol);
    }
    mainDiv.appendChild(divRow);
}

let divColAll = document.querySelectorAll(".Col");

divColAll.forEach(function(divCol) {
    divCol.addEventListener('mouseover',() => {
        divCol.setAttribute("style",divCol.getAttribute('style')+";background-color: red");
    });
});

divColAll.forEach(function(divCol) {
    divCol.addEventListener('mouseout',() => {
        divCol.setAttribute("style",divCol.getAttribute('style')+";background-color: white");
    });
});

btn.addEventListener('click', () => {
    let divGrid = document.querySelector(".grid");
    divGrid.innerHTML = '';
    let gridDimension = prompt("Enter the grid dimension in terms of grid elements: ");

    for (let i=0; i<gridDimension; i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("class","Row");
        for (let j=0; j<gridDimension; j++){
            let divCol = document.createElement("div")
            divCol.setAttribute("class","Col");
            let size = 960/gridDimension;
            divCol.setAttribute("style", `width: ${size}px; height: ${size}px`);
            divRow.appendChild(divCol);
        }
        mainDiv.appendChild(divRow);
    }

    
    let divColAll = document.querySelectorAll(".Col");
divColAll.forEach(function(divCol) {
    divCol.addEventListener('mouseover',() => {
        divCol.setAttribute("style",divCol.getAttribute('style')+";background-color: red");
    });
});

divColAll.forEach(function(divCol) {
    divCol.addEventListener('mouseout',() => {
        divCol.setAttribute("style",divCol.getAttribute('style')+";background-color: white");
    });
});

})




