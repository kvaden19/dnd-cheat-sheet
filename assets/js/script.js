// DOM Variables
const hpForm = $('#hpForm');
const hp = $('#hp');
const attack = $('#attack');
const damage = $('#damage');
const spell = $('#spell');

// Local Storage Variables
var storedHP = localStorage.getItem("storedHP");
hp.val(storedHP);

// Interaction
hpForm.submit(function() {
    var inputHP = hp.val();
    console.log(inputHP);
    localStorage.setItem("storedHP", inputHP);
})

attack.on("click", function(e) {
    attack.css("color", "white");
    attack_roll = Dice(20, 4)
    if (attack_roll === 100) {
        attack.text(20);
        attack.css("color", "blue");
    } else if (attack_roll === -1) {
        attack.text(1);
        attack.css("color", "red");
    } else {
    attack.text(attack_roll);
    }
})

damage.on("click", function(e) {
    damage_roll = Dice(6, 2)
    damage.text(damage_roll);
})

spell.on("click", function(e) {
    spell.css("color", "white");
    spell_roll = Dice(20, 5)
    if (spell_roll === 100) {
        spell.text(20);
        spell.css("color", "blue");
    } else if (spell_roll === -1) {
        spell.text(1);
        spell.css("color", "red");
    } else {
    spell.text(spell_roll);
    }
})


// Function Definitions
function Dice(sides, mod) {
    var roll = Math.floor(Math.random() * sides) + 1;
    console.log(roll);
    if (sides === 20 && roll === 20) { // If roll is a nat 20, return a special value and don't add modifier
        return 100;
    }
    if (sides === 20 && roll === 1) { // If roll is a nat 1, return a special value and don't add modifier
        return -1;
    }
    roll += mod;
    return roll;
}