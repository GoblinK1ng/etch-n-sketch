const container = document.querySelector("div");
const reset = document.querySelector("button");

function createGrid(size){
    for (let i = 0; i < size; i++){
        const row = document.createElement("div");
        row.setAttribute("class","row");
        for (let x = 0; x < size; x++){
            const column = document.createElement("div");
            column.setAttribute("class","column");
            row.appendChild(column);
        }

        container.appendChild(row);
    }
}

createGrid(50);

reset.addEventListener("click",()=>{
    while (container.hasChildNodes()){
        let child = document.querySelector(".row");
        console.log(child);
        if (child == null){
            let newSize = prompt("Enter a size of the new grid");
            createGrid(newSize);
            break;
        }
        container.removeChild(child);
    }

    
    
});

const grid = document.querySelectorAll(".column");

grid.forEach((div) =>{
    div.addEventListener("mouseover", ()=>{
        div.setAttribute("class","column red");
    });
});
