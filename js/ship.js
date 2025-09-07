export class Ship {
    #length;
    #hits;
    #position;
    #horizontal;

    constructor(len) {
        this.#length = len;
        this.#hits = 0; 
        this.#position = [];
        this.#horizontal = false;
    }
    
    getLength() {
        return this.#length;
    }

    hit() {
        if (this.#hits < this.#length)
            this.#hits++;
    }

    isSunk() {
        return this.#hits === this.#length;
    }

    place(start, end) {
        this.#position = [start, end];
    }

    pos() {
        return this.#position;
    }

    getOrientation() {
        if (this.#horizontal === false)
            return "vertical";
        return "horizontal";
    }

    changeOrientation() {
        this.#horizontal = !this.#horizontal;
    }
}