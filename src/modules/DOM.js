

const DOM = (() => {

  


    const displayGrid = (gameboard, boardDOM) =>  {
        // displays dots on the boards corresponding to the data board.
        

        while (boardDOM.firstChild) {
            boardDOM.removeChild;
        }


        const gridDots = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const gridDot = document.createElement('div');
                gridDot.classList.add('gridDot');
                gridDot.setAttribute('coords_bs',[i,j]);
                gridDot.textContent = gameboard.board[i][j];
                gridDots.push(gridDot);

                boardDOM.appendChild(gridDot);
            }
            
        }

        
        return;

    }


    const displayBoards = () => {
        // adds boards to container and displays
        const container = document.querySelector('.container');

        while (container.firstChild) {
            container.removeChild;
        }

        const boards = document.createElement('div');
        boards.classList.add('boards-container');
        container.appendChild(boards);
    
        const lBoard = document.createElement('div');
        //lBoard.textContent = 'Test a board.';
        lBoard.classList.add('board','l')
        const rBoard = document.createElement('div');
        //rBoard.textContent = 'Test b board.';
        rBoard.classList.add('board','r');
        boards.appendChild(lBoard);
        boards.appendChild(rBoard);


        const infotainer = document.createElement('div')
        infotainer.classList.add('infotainer');
        infotainer.textContent = 'placeholder';
        container.appendChild(infotainer);
        



        return;
    }



    return {
        displayBoards,
        displayGrid,
    }

})();

export default DOM;