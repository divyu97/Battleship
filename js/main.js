import {Player} from "./player.js";
import {renderGameBoard} from "./rendergb.js";
import {showMenu} from "./menu.js";
import {placeShipDOM} from "./placingships.js";
import {renderAttackGB} from "./renderattgb.js";

let player1, player2, curr, i = 0, names;

showMenu();

document.addEventListener("click", (event) => {
    if (event.target.id === "start-game") {
        let user1 = document.querySelector("#player-1").value;
        let user2 = document.querySelector("#player-2").value;
        if (user1 === "" || user2 === "")
            alert("Username field can't be empty");
        else if (user1 === user2)
            alert("Both users can't have the same username");
        else {
            player1 = new Player(user1);
            player2 = new Player(user2);
            curr = player1;
            renderGameBoard(curr);
            document.querySelector("body").innerHTML += `<button id="place-ships">PLACE SHIPS</button>`;
            names = Object.keys(curr.gameBoard.getShips());
        }
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "place-ships") {
        placeShipDOM("Carrier", 5);
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "place-ship") {
        let row = document.querySelector("#pos-row").value;
        let col = document.querySelector("#pos-col").value;
        let ori = document.querySelector("#orientation").value;
        if (row === "" || col === "")
            alert("Row and column indices are required");
        else {
            row = Number(row);
            col = Number(col);
            let status = curr.gameBoard.placeShip(names[i], row, col, ori);
            if (status === 1) alert("Ship could not be placed at that location as it is out of bounds");
            else if (status === 2) alert("A ship is already occupying the space required for this placement");
            else {
                if (i == 4) {
                    i = 0;
                    if (curr === player1) curr = player2;
                    else curr = player1;
                    renderGameBoard(curr);
                    if (curr !== player1)
                        document.querySelector("body").innerHTML += `<button id="place-ships">PLACE SHIPS</button>`;
                    else document.querySelector("body").innerHTML += `<button id="attack">ATTACK ${player2.getName()}</button>`;
                } else {
                    i++;
                    let ships = curr.gameBoard.getShips();
                    renderGameBoard(curr);
                    placeShipDOM(names[i], ships[names[i]].getLength());
                }
            }
        }
    }
});

document.addEventListener("click", (event) => {
    if (event.target.id === "attack") {
        if (curr === player1) {
            renderAttackGB(player1, player2);
            curr = player2;
        } else {
            renderAttackGB(player2, player1);
            curr = player1;
        }
    }

});
