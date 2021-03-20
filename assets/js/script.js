// DOM Variables
var hpForm = $('#hpForm');
var hp = $('#hp');

// Local Storage Variables
var storedHP = localStorage.getItem("storedHP");
hp.val(storedHP);

// Interaction
hpForm.submit(function() {
    var inputHP = hp.val();
    console.log(inputHP);
    localStorage.setItem("storedHP", inputHP);
})