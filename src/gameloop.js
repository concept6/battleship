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
    const domBoard1 = document.querySelector('.board-one');
    const domBoard2 = document.querySelector('.board-two');

    const databoards = [gameboard1, gameboard2];
    const domBoards = [domBoard1, domBoard2];

    DOM.displayGrid(databoards[0], domBoards[0]);
    DOM.displayGrid(databoards[1], domBoards[1]);
    


    // create the data players and reference the appropriate data boards
    const player1 = Player(false,gameboard1,gameboard2,false);
    const player2 = Player(true,gameboard2,gameboard1,false);


    // need to call Gameboard.placeShip five times
    // for now do with alerts, but will later do with fancy form validation (TODO)
    // this will undergo significant refactoring probably
    // actually probably use drag and drop.

    const shipnames = {
        'Carrier': 5,
        'Battleship': 4,
        'Destroyer': 3,
        'Submarine': 3,
        'Patrol Boat': 2
    };

    
    // this is a temporary measure until I can
    // query the user for the ship locations
    // preferred method will be drag and drop, later.

    const player1Ships = [
        [1,5,'horizontal',[0,0]],
        [2,4,'horizontal',[1,1]],
        [3,3,'horizontal',[2,2]],
        [4,3,'horizontal',[3,3]],
        [5,2,'horizontal',[4,4]]
    ]; //placeholder ship placing TODO

    const player2Ships = [
        [1,5,'horizontal',[3,2]],
        [2,4,'horizontal',[4,5]],
        [3,3,'horizontal',[6,4]],
        [4,3,'horizontal',[6,0]],
        [5,2,'horizontal',[0,0]]
    ]; //placeholder ship placing TODO

    const tempPlace = [player1Ships,player2Ships];

    const gridDots = [[],[]];

    for (let i = 0; i < 2; i++) {
        //let coordinate = [0,0];
        // for (const [key,value] of Object.entries(shipnames)) {
                       
        //     // let alignment = prompt(`How do you want to place the ${key}? "horizontal" or "vertical"`,'horizontal');
        //     // coordinate[0] = parseInt(prompt(`What row do you want to place the ${key}? on? Between 0 and 9)`,'0')); //TODO: make this clicking the board instead, since this is dangerous (?)
        //     // coordinate[1] = parseInt(prompt(`What column do you want to place the ${key}? on? Between 0 and 9)`,'0')); //TODO: make this clicking the board instead, since this is dangerous (?)
            
        //     databoards[i].placeShip(i+1,value,alignment,coordinate);
            
        //     DOM.displayGrid(databoards[i],domBoards[i]);
        // }


        for (let j = 0; j < 5; j++) {
            databoards[i].placeShip(tempPlace[i][j][0],tempPlace[i][j][1],tempPlace[i][j][2],tempPlace[i][j][3])
        }

        gridDots[i] = DOM.displayGrid(databoards[i],domBoards[i]);

        for (let j = 0; j < 100; j++) {
            gridDots[j].addEventListener('click',)
        }

    }







    return;
};





export default gameloop;