var dieHTML = '';
var numbers = [];


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
        numbers.splice(0, 1, randomNumber);
        $('.die-one h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollTwo: function(){
    if (this.d2 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: orange; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        numbers.splice(1, 1, randomNumber);
        $('.die-two h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollThree: function(){
    if (this.d3 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: yellow; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        numbers.splice(2, 1, randomNumber);
        $('.die-three h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollFour: function(){
    if (this.d4 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: green; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        numbers.splice(3, 1, randomNumber);
        $('.die-four h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    },
    rollFive: function(){
    if (this.d5 === true){
        var randomNumber = Math.floor(Math.random()*this.sides)+1;
        var dieHTML = '<h1 style="color: blue; text-align: center; margin:30px auto;">'+ randomNumber + '</h1>';
        numbers.splice(4, 1, randomNumber);
        $('.die-five h1').replaceWith(dieHTML);
        console.log(randomNumber);
        }
    } 
}

var roll = {
    turn: 0,
    rollRule: function(){
        if(roll.turn <5){
        dice.rollOne();
        dice.rollTwo();
        dice.rollThree();
        dice.rollFour();
        dice.rollFive();
        roll.turn ++; 
        console.log("Number Array: " + numbers)    
    }else{
        console.log("Select Score!");
        }
    }

}

var score = {
    ones: function(){
        var onesTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 1){
                onesTotal.push(numbers[i]);
            }
        }
        
        console.log(onesTotal);
    },
    twos: function(){
        var twosTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 2){
                twosTotal.push(numbers[i]);
            }
        }
        
        console.log(twosTotal);
    },
    threes: function(){
        var threesTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 3){
                threesTotal.push(numbers[i]);
            }
        }
        
        console.log(threesTotal);
    },
    fours: function(){
        var foursTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 4){
                foursTotal.push(numbers[i]);
            }
        }
        
        console.log(foursTotal);
    },
    fives: function(){
        var fivesTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 5){
                fivesTotal.push(numbers[i]);
            }
            console.log(fivesTotal);
        }
    },
    sixes: function(){
        var sixesTotal = [];
        for (var i = 0; i < numbers.length; i++){
            if (numbers[i] == 6){
                sixesTotal.push(numbers[i]);
            }
        }
        
        console.log(sixesTotal);
    }
    
}

$('.roll').on().click(function() {
    roll.rollRule();
    
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

$('.ones').on().mouseover(function() {
    score.ones();
})
$('.twos').on().mouseover(function() {
    score.twos();
})
$('.threes').on().mouseover(function() {
    score.threes();
})
$('.fours').on().mouseover(function() {
    score.fours();
})
$('.fives').on().mouseover(function() {
    score.fives();
})
$('.sixes').on().mouseover(function() {
    score.sixes();
})

