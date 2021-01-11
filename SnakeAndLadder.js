class Snakeladder{
    DiceFunction(Dice){
        var WinPoint=100;
        var Ladder=1;
        var Snake=2;
        var NoPlay=0;
        var Player=0;
        var diceCount=0;        
        console.log("Player Starts play")
    }
}
let ref = new Snakeladder();
function rollDi(){
        let Dice = Math.floor(Math.random() * 6)+1;
        return Dice;
}
ref.DiceFunction(rollDi)