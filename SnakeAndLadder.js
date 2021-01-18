class Snakeladder{
    twoPlayer(){
        var Player1position;
        var Player2position;
        var position = Math.floor(Math.random() * 2)
        if(position == 0){
            Player1position = this.DiceFunction()
        }
        else{
            Player2position = this.DiceFunction()
        }
        if(Player1position==100)
            console.log("Player1 is winner")
        else
            console.log("Player2 is winner")
        
    }
    rollDi(){
        let Dice = Math.floor(Math.random() * 6)+1;
        return Dice;
    }

    DiceFunction(){
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
                case Ladder: var value = this.rollDi()
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
                case Snake: var value1 = this.rollDi()
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
console.log("adcsdcsc")
ref.twoPlayer()
// var f = ref.DiceFunction(rollDi)
// console.log(f)
