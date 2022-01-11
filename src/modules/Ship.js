
const Ship = (enter_length) => {
    // assume enter_length is valid for now.
    const length = enter_length;

    const hits = new Array(length).fill(0);

    let sunk = false;


    const hit = (num) => {
        // not worried about duplicate guesses here.
        hits[num] = 1;
    }

    const isSunk = () => {
        if (hits.includes(0)) {
            return false;
        } else {
            return true;
        }
    }

    return {
        hits, //may stop returning this in the future.
        hit,
        isSunk,
    };

};

module.exports = Ship;