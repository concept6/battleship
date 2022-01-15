
const Ship = (enter_length,align,origin) => {
    // assume enter_length is valid for now.
    // also assumes align is either 'horizontal' or 'vertical'

    const length = enter_length;

    const hits = new Array(length).fill(0);

    let sunk = false;

    

    const rotate = () => {
        if (align === 'horizontal') {
            align = 'vertical'
        } else if (align === 'vertical') {
            align = 'horizontal'
        }
    };

    const hit = (num) => {
        // not worried about duplicate guesses here. possible TODO
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
        hits, //may stop returning this in the future. Currently, need it for tests.
        align,
        rotate,
        origin,
        hit,
        sunk,
        isSunk,
    };

};

export default Ship;