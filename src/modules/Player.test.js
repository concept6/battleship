const Player = require('./Player');
const Gameboard = require('./Gameboard');


const pBoard = Gameboard();
const eBoard = Gameboard();

const dummyPlayer = Player(true,pBoard,eBoard,true);
dummyPlayer.attack();
console.log(eBoard.missedShots);

test('Computer attacks enemy board.', () => {
    expect(eBoard.missedShots).toBeTruthy();
})


const humanPlayer = Player(false,eBoard,pBoard,true);
humanPlayer.attack();
console.log(pBoard.missedShots);
console.log()

test('Player attacks [3,4] as is currently hardcoded when testing.', () => {
    expect(pBoard.missedShots).toStrictEqual([[3,4]]);
})