var dieHTML = '';


var dice = {
    d1: true,
    d2: true,
    d3: true,
    d4: true,
    d5: true,
    sides: 6,
    rollOne: function(){
    if (this.d1 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: red; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        $('.die-one h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollTwo: function(){
    if (this.d2 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: orange; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        $('.die-two h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollThree: function(){
    if (this.d3 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: yellow; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        $('.die-three h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollFour: function(){
    if (this.d4 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: green; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        $('.die-four h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollFive: function(){
    if (this.d5 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: blue; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        $('.die-five h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    } 
}


$('.roll').on().click(function() {
    dice.rollOne();
    dice.rollTwo();
    dice.rollThree();
    dice.rollFour();
    dice.rollFive();
    
});

$('.die-one').click(function() {
    $(this).toggleClass('selected');
    dice.d1 = !dice.d1;
    console.log("d1"+dice.d1);
    console.log("slected die")
});

$('.die-two').click(function() {
    $(this).toggleClass('selected');
    dice.d2 = !dice.d2;
    console.log("d2"+dice.d2);
    console.log("slected die")
});

$('.die-three').click(function() {
    $(this).toggleClass('selected');
    dice.d3 = !dice.d3;
    console.log("d3"+dice.d3);
    console.log("slected die")
});

$('.die-four').click(function() {
    $(this).toggleClass('selected');
    dice.d4 = !dice.d4;
    console.log("d4"+dice.d4);
    console.log("slected die")
});

$('.die-five').click(function() {
    $(this).toggleClass('selected');
    dice.d5 = !dice.d5;
    console.log("d5"+dice.d5);
    console.log("slected die")
});