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

function mouseOverGrid(){
    const grid = document.querySelectorAll(".column");

    grid.forEach((div) =>{
        div.addEventListener("mouseover", ()=>{
            div.setAttribute("class","column red");
        });
    });

}

createGrid(50);
mouseOverGrid();

reset.addEventListener("click",()=>{
    while (container.hasChildNodes()){
        let child = document.querySelector(".row");

        if (child == null){
            let newSize = prompt("Enter a size of the new grid");
            createGrid(newSize);
            mouseOverGrid();
            break;
        }
        container.removeChild(child);
    }

    
});

