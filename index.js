let mainDiv = document.querySelector(".grid");

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
