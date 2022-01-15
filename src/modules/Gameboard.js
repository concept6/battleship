import Ship from'./Ship';


const Gameboard = () => {

    const board = Array(10).fill().map(() => Array(10).fill(0)); // avoids reference to same array.

    const ships = new Array(5).fill(0);

    // assumes coords are given in 0-9 range, not including letters.
    // shipnum should be between 1 and 5, and identifies a ship in ships.
    const placeShip = (shipnum, length, align, coord) => {

        // check all spots along length of ship to verify valid coordinates.
        // can only place left to right or top to bottom.
       for (let i = 0; i < length; i++) {
            
            if (align === 'horizontal') {
                if (board[coord[0]+i][coord[1]] !== 0) {
                    return 'Invalid location';
                }
            } else if (align === 'vertical') {
                if (board[coord[0]][coord[1]+i] !== 0) {
                    return 'Invalid location';
                }
            }
        }
        ships[shipnum-1] = Ship(length,align,coord);

        for (let i = 0; i < length; i++) {
            if (align === 'horizontal') {
                board[coord[0]+i][coord[1]] = shipnum;
            } else if (align === 'vertical') {
                board[coord[0]][coord[1]+i] = shipnum;
            }
        }
        
    }


    const missedShots = [];

    const hitShots = [];


    const receiveAttack = (coord) => {
        if (board[coord[0]][coord[1]]) {
            let shipRef = board[coord[0]][coord[1]] - 1;
            if (ships[shipRef].align === 'horizontal') {
                let shipSpot = coord[0] - ships[shipRef].origin[0];
                ships[shipRef].hit(shipSpot);
                hitShots.push(coord);
            } else if (ships[shipRef].align === 'vertical') {
                let shipSpot = coord[1] - ships[shipRef].origin[1];
                ships[shipRef].hit(shipSpot);
                hitShots.push(coord);
            }
            
        } else if (board[coord[0]][coord[1]] === 0) {
            missedShots.push(coord);
        }
    }


    const checkSunk = () => {
        for (let i in ships) {
            if (!ships[i].isSunk()) {
                return false;
            }
            return true;
        }
    }


    return {
        board,
        placeShip,
        receiveAttack,
        missedShots,
        hitShots,
        ships,
        checkSunk,
    }
}

export default Gameboard;