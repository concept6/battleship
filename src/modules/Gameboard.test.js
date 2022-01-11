const Gameboard = require('./Gameboard');


const dummyArray = Array(10).fill().map(() => Array(10).fill(0));


test('Has 10x10 gameboard array associated with it.', () => {
    expect(Gameboard().board).toStrictEqual(dummyArray);
})

const battleshipArray = Array(10).fill().map(() => Array(10).fill(0));
battleshipArray[0][0] = 1;
battleshipArray[1][0] = 1;
battleshipArray[2][0] = 1;
battleshipArray[3][0] = 1;

const testBattleshipArray = Gameboard();
testBattleshipArray.placeShip(1,4,'horizontal',[0,0]);

test('Places battleship horizontally in top left corner.', () => {
    expect(testBattleshipArray.board).toStrictEqual(battleshipArray);
});


const destroyerArray = Array(10).fill().map(() => Array(10).fill(0));
destroyerArray[4][0] = 1;
destroyerArray[4][1] = 1;
destroyerArray[4][2] = 1;

const testDestroyerArray = Gameboard();
testDestroyerArray.placeShip(1,3,'vertical',[4,0]);

test('Places destroyer vertically in the middle.', () => {
    expect(testDestroyerArray.board).toStrictEqual(destroyerArray);
});

const testSubmarineArray = Gameboard();


test('Detects invalid proposed location.', () => {
    expect(testSubmarineArray.placeShip(1,3,'vertical',[9,9])).toStrictEqual('Invalid location');
})

testBattleshipArray.receiveAttack([1,0]);
test('Logs coords of hit on battleship', () => {
    expect(testBattleshipArray.hitShots).toStrictEqual([[1,0]]);
});

test('Logs hit on battleship on battleship', () => {
    expect(testBattleshipArray.ships[0].hits).toStrictEqual([0,1,0,0]);
});



testBattleshipArray.receiveAttack([0,4]);
test('Logs miss on battleship', () => {
    expect(testBattleshipArray.missedShots).toStrictEqual([[0,4]]);
});
