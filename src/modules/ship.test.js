const ship = require('./Ship');


test('Should have a length of 4 with zero hits.', () => {
    expect(ship(4).hits).toStrictEqual([0,0,0,0]);
})

const hitBattleship = ship(4)
hitBattleship.hit(1);

test('Can be created and then hits at the second spot.', () => {
    expect(hitBattleship.hits).toStrictEqual([0,1,0,0]);
})


const destroyer = ship(2);
destroyer.hit(0);
destroyer.hit(1);

test('destroyer can be sunk.', () => {
    expect(destroyer.isSunk()).toBe(true);
})