class Snakeladder{
    DiceFunction(Dice){
        var WinPoint=100;
        var Ladder=1;
        var Snake=2;
        var NoPlay=0;
        var Player=0;
        var diceCount=0;        
        console.log("Player Starts play")
        var flag = true;
        while(flag){
            var position = Math.floor(Math.random() * 3)
            switch(position){
                case NoPlay: console.log("No die is Rolled")
                             break;
                case Ladder: var value = Dice()
                            break;
                case Snake: var value1 = Dice()
                            break;
            }
        }
    }
}
let ref = new Snakeladder();
function rollDi(){
        let Dice = Math.floor(Math.random() * 6)+1;
        return Dice;
}
ref.DiceFunction(rollDi)