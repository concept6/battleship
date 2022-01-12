

const DOM = (() => {

  


    const displayBoard = (gameboard, boardDOM) =>  {
        // gameboard is the gameboard object.
        // boardDOM is the DOM object.
        
        const gridDots = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridDot = document.createElement('div');
                gridDot.classList.add('gridDot');
                gridDot.setAttribute('coords_bs',[i,j]);
                gridDot.textContent = '';
                gridDots.push(gridDot);

                boardDOM.appendChild(gridDot);
            }
            
        }

        
        return;

    }


    const mainScreen = () => {
        const container = document.querySelector('.container');

        const boards = document.createElement('div');
        boards.classList.add('boards-container');
        container.appendChild(boards);
    
        const aBoard = document.createElement('div');
        //aBoard.textContent = 'Test a board.';
        aBoard.classList.add('board','a')
        const bBoard = document.createElement('div');
        //bBoard.textContent = 'Test b board.';
        bBoard.classList.add('board','b');
        boards.appendChild(aBoard);
        boards.appendChild(bBoard);


        const infotainer = document.createElement('div')
        infotainer.classList.add('infotainer');
        infotainer.textContent = 'placeholder';
        container.appendChild(infotainer);
        



        return;
    }



    return {
        mainScreen,
        displayBoard,
    }

})();

module.exports = DOM;