

const DOM = (() => {

  


    const createDOMGrid = (gameboard, boardDOM) =>  {
        // displays dots on the boards corresponding to the data board.
        

        while (boardDOM.firstChild) {
            //boardDOM.removeChild;
            boardDOM.textContent = '';
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

        
        return gridDots;

    }


    const displayBoards = () => {
        // adds boards to container and displays
        const container = document.querySelector('.container');

        while (container.firstChild) {
            container.removeChild;
        }

        const boardsContainer = document.createElement('div');
        boardsContainer.classList.add('boards-container');
        container.appendChild(boardsContainer);
    
        const domBoard1 = document.createElement('div');
        //lBoard.textContent = 'Test a board.';
        domBoard1.classList.add('board','board-one')
        const domBoard2 = document.createElement('div');
        //rBoard.textContent = 'Test b board.';
        domBoard2.classList.add('board','board-two');
        boardsContainer.appendChild(domBoard1);
        boardsContainer.appendChild(domBoard2);


        const infotainer = document.createElement('div')
        infotainer.classList.add('infotainer');
        infotainer.textContent = 'placeholder';
        container.appendChild(infotainer);
        



        return;
    }



    return {
        displayBoards,
        createDOMGrid,
    }

})();

export default DOM;