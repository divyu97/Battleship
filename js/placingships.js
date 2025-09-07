export function placeShipDOM(name, len) {
    let cont = document.querySelector("#place-ship-container");
    let placeShipsButton = document.querySelector("#place-ships");
    if (cont !== null)
        cont.remove();
    if (placeShipsButton !== null)
        placeShipsButton.remove();
    document.querySelector("body").innerHTML += `
    <div id="place-ship-container">
        <label for="pos-row">Place ${name} (Length: ${len})</label>
        <div id="pos-container">
            <input type="number" min="1" max="10" id="pos-row" placeholder="Row">
            <input type="number" min="1" max="10" id="pos-col" placeholder="Column">
            <select id="orientation">
                <option selected value="horizontal">Horizontal</option>
                <option value="vertical">Vertical</option>
            </select>
        </div>
        <button id="place-ship">PLACE SHIP</button>
    </div>`;
}