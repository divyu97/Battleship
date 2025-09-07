export function renderGameBoard(player) {
    document.querySelector("body").innerHTML = `
        <div id="game-heading">BATTLESHIP</div>
        <div id="gameboard-container">
            <div id="row-index">
                <div class="index"></div>
                <div class="index">1</div>
                <div class="index">2</div>
                <div class="index">3</div>
                <div class="index">4</div>
                <div class="index">5</div>
                <div class="index">6</div>
                <div class="index">7</div>
                <div class="index">8</div>
                <div class="index">9</div>
                <div class="index">10</div>
            </div>
            <div id="gameboard">
                <div id="col-index">
                    <div class="index">1</div>
                    <div class="index">2</div>
                    <div class="index">3</div>
                    <div class="index">4</div>
                    <div class="index">5</div>
                    <div class="index">6</div>
                    <div class="index">7</div>
                    <div class="index">8</div>
                    <div class="index">9</div>
                    <div class="index">10</div>
                </div>
                <div class="row" id="row-1">
                    <div class="cell" id="row-1_col-1"></div>
                    <div class="cell" id="row-1_col-2"></div>
                    <div class="cell" id="row-1_col-3"></div>
                    <div class="cell" id="row-1_col-4"></div>
                    <div class="cell" id="row-1_col-5"></div>
                    <div class="cell" id="row-1_col-6"></div>
                    <div class="cell" id="row-1_col-7"></div>
                    <div class="cell" id="row-1_col-8"></div>
                    <div class="cell" id="row-1_col-9"></div>
                    <div class="cell" id="row-1_col-10"></div>
                </div>
                <div class="row" id="row-2">
                    <div class="cell" id="row-2_col-1"></div>
                    <div class="cell" id="row-2_col-2"></div>
                    <div class="cell" id="row-2_col-3"></div>
                    <div class="cell" id="row-2_col-4"></div>
                    <div class="cell" id="row-2_col-5"></div>
                    <div class="cell" id="row-2_col-6"></div>
                    <div class="cell" id="row-2_col-7"></div>
                    <div class="cell" id="row-2_col-8"></div>
                    <div class="cell" id="row-2_col-9"></div>
                    <div class="cell" id="row-2_col-10"></div>
                </div>
                <div class="row" id="row-3">
                    <div class="cell" id="row-3_col-1"></div>
                    <div class="cell" id="row-3_col-2"></div>
                    <div class="cell" id="row-3_col-3"></div>
                    <div class="cell" id="row-3_col-4"></div>
                    <div class="cell" id="row-3_col-5"></div>
                    <div class="cell" id="row-3_col-6"></div>
                    <div class="cell" id="row-3_col-7"></div>
                    <div class="cell" id="row-3_col-8"></div>
                    <div class="cell" id="row-3_col-9"></div>
                    <div class="cell" id="row-3_col-10"></div>
                </div>
                <div class="row" id="row-4">
                    <div class="cell" id="row-4_col-1"></div>
                    <div class="cell" id="row-4_col-2"></div>
                    <div class="cell" id="row-4_col-3"></div>
                    <div class="cell" id="row-4_col-4"></div>
                    <div class="cell" id="row-4_col-5"></div>
                    <div class="cell" id="row-4_col-6"></div>
                    <div class="cell" id="row-4_col-7"></div>
                    <div class="cell" id="row-4_col-8"></div>
                    <div class="cell" id="row-4_col-9"></div>
                    <div class="cell" id="row-4_col-10"></div>
                </div>
                <div class="row" id="row-5">
                    <div class="cell" id="row-5_col-1"></div>
                    <div class="cell" id="row-5_col-2"></div>
                    <div class="cell" id="row-5_col-3"></div>
                    <div class="cell" id="row-5_col-4"></div>
                    <div class="cell" id="row-5_col-5"></div>
                    <div class="cell" id="row-5_col-6"></div>
                    <div class="cell" id="row-5_col-7"></div>
                    <div class="cell" id="row-5_col-8"></div>
                    <div class="cell" id="row-5_col-9"></div>
                    <div class="cell" id="row-5_col-10"></div>
                </div>
                <div class="row" id="row-6">
                    <div class="cell" id="row-6_col-1"></div>
                    <div class="cell" id="row-6_col-2"></div>
                    <div class="cell" id="row-6_col-3"></div>
                    <div class="cell" id="row-6_col-4"></div>
                    <div class="cell" id="row-6_col-5"></div>
                    <div class="cell" id="row-6_col-6"></div>
                    <div class="cell" id="row-6_col-7"></div>
                    <div class="cell" id="row-6_col-8"></div>
                    <div class="cell" id="row-6_col-9"></div>
                    <div class="cell" id="row-6_col-10"></div>
                </div>
                <div class="row" id="row-7">
                    <div class="cell" id="row-7_col-1"></div>
                    <div class="cell" id="row-7_col-2"></div>
                    <div class="cell" id="row-7_col-3"></div>
                    <div class="cell" id="row-7_col-4"></div>
                    <div class="cell" id="row-7_col-5"></div>
                    <div class="cell" id="row-7_col-6"></div>
                    <div class="cell" id="row-7_col-7"></div>
                    <div class="cell" id="row-7_col-8"></div>
                    <div class="cell" id="row-7_col-9"></div>
                    <div class="cell" id="row-7_col-10"></div>
                </div>
                <div class="row" id="row-8">
                    <div class="cell" id="row-8_col-1"></div>
                    <div class="cell" id="row-8_col-2"></div>
                    <div class="cell" id="row-8_col-3"></div>
                    <div class="cell" id="row-8_col-4"></div>
                    <div class="cell" id="row-8_col-5"></div>
                    <div class="cell" id="row-8_col-6"></div>
                    <div class="cell" id="row-8_col-7"></div>
                    <div class="cell" id="row-8_col-8"></div>
                    <div class="cell" id="row-8_col-9"></div>
                    <div class="cell" id="row-8_col-10"></div>
                </div>
                <div class="row" id="row-9">
                    <div class="cell" id="row-9_col-1"></div>
                    <div class="cell" id="row-9_col-2"></div>
                    <div class="cell" id="row-9_col-3"></div>
                    <div class="cell" id="row-9_col-4"></div>
                    <div class="cell" id="row-9_col-5"></div>
                    <div class="cell" id="row-9_col-6"></div>
                    <div class="cell" id="row-9_col-7"></div>
                    <div class="cell" id="row-9_col-8"></div>
                    <div class="cell" id="row-9_col-9"></div>
                    <div class="cell" id="row-9_col-10"></div>
                </div>
                <div class="row" id="row-10">
                    <div class="cell" id="row-10_col-1"></div>
                    <div class="cell" id="row-10_col-2"></div>
                    <div class="cell" id="row-10_col-3"></div>
                    <div class="cell" id="row-10_col-4"></div>
                    <div class="cell" id="row-10_col-5"></div>
                    <div class="cell" id="row-10_col-6"></div>
                    <div class="cell" id="row-10_col-7"></div>
                    <div class="cell" id="row-10_col-8"></div>
                    <div class="cell" id="row-10_col-9"></div>
                    <div class="cell" id="row-10_col-10"></div>
                </div>
            </div>
        </div>
        <div id="player-name">${player.getName()}\'s gameboard</div>`;
        let ships = player.gameBoard.getShips();
        for (const name in ships) {
            let ship = ships[name];
            let pos = ship.pos();
            if (pos.length !== 0) {
                for (let i = pos[0][0]; i <= pos[1][0]; i++)
                    for (let j = pos[0][1]; j <= pos[1][1]; j++)
                        document.querySelector(`#row-${i}_col-${j}`).style.backgroundColor = "grey";
            }
        }
        let hits = player.gameBoard.getSuccessfulAttacks();
        let misses = player.gameBoard.getMissedAttacks();
        for (const hit of hits) {
            document.querySelector(`#row-${hit[0]}_col-${hit[1]}`).style.backgroundColor = "red";
        }
        for (const miss of misses) {
            document.querySelector(`#row-${miss[0]}_col-${miss[1]}`).style.backgroundColor = "white";
        }
}