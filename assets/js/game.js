// prompt player to enter a name & save as variable
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create a function named "fight"
var fight = function () {
    window.alert("Welcome to Robot Gladiators!");
    
    // subtract 'playerAttack' from 'enemyHealth' to get new 'enemyHealth' vlaue
    enemyHealth = enemyHealth - playerAttack;
    // log new value
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // subtract 'enemyAttack' from 'playerHeath' to get new 'playerHealth' value
    playerHealth = playerHealth - enemyAttack;
    // log new value
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
}

// execute fight function
 fight();