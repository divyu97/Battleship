import {Ship} from "./ship.js";

export class Gameboard {
    #missedAttacks;
    #successfulAttacks;
    #ships = {};
    #rows = 10;
    #cols = 10;

    constructor() {
        this.#ships["Carrier"] = new Ship(5);
        this.#ships["Battleship"] = new Ship(4);
        this.#ships["Destroyer"] = new Ship(3);
        this.#ships["Submarine"] = new Ship(3);
        this.#ships["Patrol Boat"] = new Ship(2);
        this.#missedAttacks = [];
        this.#successfulAttacks = [];
    }

    placeShip(name, row, col, ori) {
        let ship = this.#ships[name];
        if (ship.pos().length === 0) {
            let len = ship.getLength(), start, end;
            if (ori === "horizontal") {
                ship.changeOrientation();
                start = [row, col];
                end = [row, col + len - 1];
            } else {
                start = [row, col];
                end = [row + len - 1, col];
            }
            if ((start[0] >= 1 && start[0] <= this.#rows) && (start[1] >= 1 && start[1] <= this.#cols) && (end[0] >= 1 && end[0] <= this.#rows) && (end[1] >= 1 && end[1] <= this.#cols)) {
                for (const name in this.#ships) {
                    let pos = this.#ships[name].pos();
                    if (pos.length !== 0) {
                        let first = pos[0], last = pos[1];
                        for (let i = start[0]; i <= end[0]; i++)
                            for (let j = start[1]; j <= end[1]; j++)
                                if (i >= first[0] && i <= last[0] && j >= first[1] && j <= last[1]) 
                                    return 2;
                    }
                } 
                ship.place(start, end);
                return 0;
            }
            return 1;
        }
    }

    receiveAttack(row, col) {
        for (const name in this.#ships) {
            let ship = this.#ships[name];
            let pos = ship.pos();
            if (row >= pos[0][0] && row <= pos[1][0] && col >= pos[0][1] && col <= pos[1][1]) {
                ship.hit();
                this.#successfulAttacks.push([row, col]);
                return true;
            }
        }
        this.#missedAttacks.push([row, col]);
        return false;
    }

    getMissedAttacks() {
        return this.#missedAttacks;
    }

    getSuccessfulAttacks() {
        return this.#successfulAttacks;
    }

    allSunk() {
        for (const name in this.#ships) {
            if (!(this.#ships[name].isSunk()))
                return false;
        }
        return true;
    }

    getShips() {
        return this.#ships;
    }
}