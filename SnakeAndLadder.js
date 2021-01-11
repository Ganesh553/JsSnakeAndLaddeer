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
                            if(Player>=WinPoint){
                                Player=WinPoint;
                                console.log("Player reached: ",Player)
                                return Player;
                            }else{
                                Player = Player+value;
                                diceCount=diceCount+1;
                                console.log("Players gets Lader is: ",Player)
                                if(Player == WinPoint){
                                    flag = false;
                                    return Player;
                                }
                            }
                            break;
                case Snake: var value1 = Dice()
                            if(Player>=WinPoint){
                                Player=WinPoint;
                                console.log("Player reached: ",Player)
                                return Player;
                            }else{
                                Player = Player - value1
                                diceCount=diceCount+1;
                                if(Player <= 0 || Player<=-1){
                                    Player=0;
                                }
                                console.log("Players gets Snake is: ",Player)
                                if(Player == WinPoint){
                                    flag = false;
                                    return Player;
                                }
                            }
            }
            console.log("Number of times Dice Rolled is: ",diceCount)
            
        }      
        return Player;
    }  
}
let ref = new Snakeladder();
function rollDi(){
        let Dice = Math.floor(Math.random() * 6)+1;
        return Dice;
}
var player1 = ref.DiceFunction(rollDi)
var player2 = ref.DiceFunction(rollDi)
if(player1==100){
    console.log("Player 1 is Winner")
}
else{
    console.log("Player 2 is Winner")
}



