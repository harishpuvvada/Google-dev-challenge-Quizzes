/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

var fam1,fam2,immSon,kid1,kid2;

fam1 = $('#family1');

fam2 = $("<div id='family2'> <h1>Family2</h1> </div>");

immSon = $("<div id='bruce'> <h2>Bruce</h2> </div>");

kid1 = $("<div id='madison'> <h3>Madison</h3> </div>");

kid2 = $("<div id='hunter'> <h3>Hunter</h3> </div>");


fam2.insertAfter(fam1);

fam2.append(immSon);

immSon.append(kid1);

immSon.append(kid2);
