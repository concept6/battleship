
const Player = (isComputer, pBoard, eBoard,testing) => {

    
    // place ships here?


   

    // attack enemy board
    const attack = () => {

        if (this.isComputer) {
            let legalAttack = false;
            while (legalAttack === false) {// checks to make moves it hasn't made before.
                let randX = Math.floor(Math.random() * 10);
                let randY = Math.floor(Math.random() * 10);
                let coords = [randX,randY];

                if (eBoard.missedShots.some((element) => {
                    element === coords;
                }) || eBoard.hitShots.some((element) => {
                    element === coords;
                })) {
                    legalAttack = false;
                    
                } else {
                    legalAttack = true;
                    eBoard.receiveAttack(coords);
                }
            }
            

        } else {
            //let coords = prompt('Enter coordinates to attack in the format "[X,Y]"');
            let coords;
            if (testing) {
                coords = [3,4];
                
            } else {
                coords = prompt('Enter coordinates to attack in the format "[X,Y]"','[0,0]');
            }
            eBoard.receiveAttack(coords);
            
        }

        
    };


    return {
        attack,
    }

}

export default Player;