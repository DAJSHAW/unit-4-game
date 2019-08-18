$(document).ready(function(){

    var targetNumber = Math.floor(Math.random() * 120) + 19
    $("#number-to-guess").text(targetNumber);

    var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];
    var increment = numberOptions[Math.round(Math.random())];
    for (var i = 0; i < numberOptions.length; i++) {
        var imageCrystal = $("<img>");
        imageCrystal.addClass("diamondcrystals");
        imageCrystal.attr("src", "/assets/images/blackdiamond.jpg", numberOptions[0,3,5]);
        imageCrystal.attr("src", "/assets/images/redrubydiamond.jpg", numberOptions[1,7,9]);
        imageCrystal.attr("src", "/assets/images/greendiamond.jpg", numberOptions[2,4,6]);
        imageCrystal.attr("src", "/assets/images/bluediamond.jpg", numberOptions[8,10,11]);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        $("#diamondcrystals").append(imageCrystal);
}   
    var score = 0;
    var wins = 0;
    var losses = 0;
        $(".diamondcrystals").on("click", function() {
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            score += crystalValue;
            if (score === targetNumber){ 
                alert("You Win!");
                wins += 1;
                console.log("Your score: " + score);
            }
        
                else if (score > targetNumber){
                alert("You Lose!"); 
                losses += 1;
            }

        });