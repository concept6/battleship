const DOM = require('./modules/DOM');
const Ship = require('./modules/Ship');
const Gameboard = require('./modules/Gameboard');
const Player = require('./modules/Player');


const leftBoard = Gameboard();
const rightBoard = Gameboard();


DOM.mainScreen();
const aBoard = document.querySelector('.a');
const bBoard = document.querySelector('.b');
DOM.displayBoard(leftBoard,aBoard);
DOM.displayBoard(rightBoard,bBoard);


const gameloop = () => {

    const gameboard1 = Gameboard();
    const gameboard2 = Gameboard();


    const player1 = Player(false,gameboard1,gameboard2,false);
    const player2 = Player(false,gameboard2,gameboard1,false);








    return;
};





module.exports = gameloop;