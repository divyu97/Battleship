export function showMenu() {
    document.querySelector("body").innerHTML = `
    <div id="game-heading">BATTLESHIP</div>
    <div id="menu-container">
        <div id="menu">
            <div class="field">
                <label for="player-1">Player 1</label>
                <input id="player-1" placeholder="Enter username">
            </div>
            <div class="field">
                <label for="player-2">Player 2</label>
                <input id="player-2" placeholder="Enter username">
            </div>
        </div>
        <button id="start-game">START GAME</button>
    </div>`;
}