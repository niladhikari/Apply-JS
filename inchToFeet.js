var inch = 69;
var feet = inch/12;
console.log('Your are '+feet+ ' feet.')

/* when multiful value is come,,,we done this clculation repeat..
so we can use the function for the easier way. */

function inchToFeet(inch){
   var feet = inch/12;
   return feet;
}

 var friendFeet = inchToFeet(74).toFixed(3);
 console.log('Friend  '+friendFeet +' feet.');

 var girlFriendFeet = inchToFeet(65).toFixed(3);
 console.log('Gf  '+girlFriendFeet +' feet.');

 var brotherFeet = inchToFeet(68).toFixed(3);
 console.log('Brother  '+brotherFeet +' feet.');

