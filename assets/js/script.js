
randomNum = Math.floor(Math.random() * 101 + 19);

$("#random-number").text(randomNum);

var wins = 0;    
var losses = 0;
var userScore = 0;


for (var i = 0; i < 4; i++) {
    randomCrystalNum = Math.floor(Math.random() * 11 +1 );
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
    imageCrystal.attr("data-crystalvalue", randomCrystalNum);
    $("#crystals").append(imageCrystal);
  }

   
   $(".crystal-image").on("click", function() {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userScore += crystalValue;
        $("#user-score").text(userScore);
    if (userScore === randomNum) {
        wins++;
        $("#wins").text(wins);
        userScore = 0;
        $("#user-score").text(userScore);
        randomNum = Math.floor(Math.random() * 101 + 19);
        $("#random-number").text(randomNum);
        for (var i = 0; i < 4; i++) {
            randomCrystalNum = Math.floor(Math.random() * 11 +1 );    
        }    
    } else if (userScore >= randomNum) {
        losses++;
        $("#losses").text(losses);
        userScore = 0;
        $("#user-score").text(userScore);
        randomNum = Math.floor(Math.random() * 101 + 19);
        $("#random-number").text(randomNum);
        for (var i = 0; i < 4; i++) {
            randomCrystalNum = Math.floor(Math.random() * 11 +1 );    
        }    
    }

});

  






