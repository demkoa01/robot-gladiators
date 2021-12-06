// Game States:
// "WIN" - Plater robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// prompt player to enter a name & save as variable
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// create a function named "fight"
var fight = function (enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {

        // ask if the player wants to fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // log player answer to fight or skip
        console.log(playerName + " has chosen to " + promptFight + ".");

        // if the player choses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // subtract 'playerAttack' from 'enemyHealth' to get new 'enemyHealth' vlaue
            enemyHealth = enemyHealth - playerAttack;
            // log new value
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // subtract 'enemyAttack' from 'playerHeath' to get new 'playerHealth' value
            playerHealth = playerHealth - enemyAttack;
            // log new value
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

        // if player choses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
            }
            // if no (false), ask question by running fight() again
            else {
                fight();
            }
        }

        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// execute fight function
// fight();
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}