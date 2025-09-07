import {Gameboard} from "./gameboard.js";

export class Player {
    #name;

    constructor(username) {
        this.#name = username;
        this.gameBoard = new Gameboard();
    }

    getName() {
        return this.#name;
    }
}