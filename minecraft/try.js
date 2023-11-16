document.addEventListener("DOMContentLoaded", function () {


    const game = document.querySelector("#game");
    const grid = document.querySelector("#grid");

    // tools
    const axeTool = document.querySelector("#axe");
    const pickaxeTool = document.querySelector("#pickaxe");
    const shovelTool = document.querySelector("#shovel");

    const leafBtn = document.querySelector("#leaf");
    const rockBtn = document.querySelector("#rockbtn");







    const leafImg = "assets/grass.png";
    const grassImg = "assets/grass.png";
    const soilImg = "assets/soil.png";
    const rockImg = "assets/rock.png";
    const woodImg = "assets/wood.png";




    function createCells(i, j, color) {
        const cell = document.createElement("div");
        cell.className = "grid-item";
        cell.id = `cell-${i}-${j}`;
        document.querySelector(".grid-container").appendChild(cell);
        addColor(i, j, "#1d93bb");
    }

    function createGrid(width, height) {
        grid.style.gridTemplateRows = `repeat(${width}, 40px)`;
        grid.style.gridTemplateColumns = `repeat(${height}, 40px)`;

        for (let i = 0; i < width; ++i) {
            for (let j = 0; j < height; ++j) {
                createCells(i, j);
            }
        }
    }

    createGrid(15, 23);

    function addColor(i, j, color) {
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.style.backgroundColor = color
    }



    function setImg(i, j, img) {
        const cell = document.getElementById(`cell-${i}-${j}`);
        cell.style.backgroundImage = `url(${img})`
        cell.style.backgroundSize = 'cover';
        cell.style.backgroundPosition = 'center';
        cell.style.backgroundRepeat = 'no-repeat';
    }
    








});
