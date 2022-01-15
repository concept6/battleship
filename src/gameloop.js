import DOM from './modules/DOM';
import Ship from './modules/Ship';
import Gameboard from './modules/Gameboard';
import Player from'./modules/Player';




const gameloop = () => {



    // create data boards
    const gameboard1 = Gameboard();
    const gameboard2 = Gameboard();
    
    //create DOM boards
    DOM.displayBoards();
    const domBoard1 = document.querySelector('.l');
    const domBoard2 = document.querySelector('.r');
    DOM.displayGrid(gameboard1,domBoard1);
    DOM.displayGrid(gameboard2,domBoard2);
    


    // create the data players and reference the appropriate data boards
    const player1 = Player(false,gameboard1,gameboard2,false);
    const player2 = Player(false,gameboard2,gameboard1,false);


    // need to call Gameboard.placeShip five times
    // for now do with alerts, but will later do with fancy form validation (TODO)
    // this will undergo significant refactoring probably

    const shipnames = {
        'Carrier': 5,
        'Battleship': 4,
        'Destroyer': 3,
        'Submarine': 3,
        'Patrol Boat': 2
    };

    const databoards = [gameboard1, gameboard2];
    const domBoards = [domBoard1, domBoard2];

    for (let i in databoards) {
        let coordinate = [0,0];
        for (const [key,value] of Object.entries(shipnames)) {
            let alignment = prompt(`How do you want to place the ${key}? "horizontal" or "vertical"`,'horizontal');
            coordinate[0] = parseInt(prompt(`What row do you want to place the ${key}? on? Between 0 and 9)`,'0')); //TODO: make this clicking the board instead, since this is dangerous (?)
            coordinate[1] = parseInt(prompt(`What column do you want to place the ${key}? on? Between 0 and 9)`,'0')); //TODO: make this clicking the board instead, since this is dangerous (?)
            databoards[i].placeShip(i+1,value,alignment,coordinate);
            DOM.displayGrid(databoards[i],domBoards[i]);
        }
    }






    return;
};





export default gameloop;