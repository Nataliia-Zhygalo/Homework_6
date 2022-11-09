

firstQuestion = prompt('What company was initially known as "Blue Ribbon Sports?');
secondQuestion = prompt('What nut is used to make marzipan?'); 
thirdQuestion = prompt('Which country produces the most coffee in the world?');
fourthQuestion = prompt('How many states are there in the US?');
fifthQuestion = prompt('How many days in a fortnight?');
  let correct = 0;
  let points = 0;
if(firstQuestion === 'Nike' || firstQuestion === 'nike') {
  correct += 1;
  points += 10;
}
if(secondQuestion?.toLowerCase() === 'almond') {
  correct += 1;
  points += 10; 
} 
if(thirdQuestion === 'Brazil'|| thirdQuestion === 'brazil') {
  correct += 1;
  points += 10;
}
if(+fourthQuestion === 50) {
  correct += 1;
  points += 10;
}
if(+fifthQuestion === 14) {
  correct += 1;
  points += 10;
}
alert(`You get ${points} points, you answered ${correct}/5 questions correctly.`);

 


/* capitalizeFirstLetter*/

