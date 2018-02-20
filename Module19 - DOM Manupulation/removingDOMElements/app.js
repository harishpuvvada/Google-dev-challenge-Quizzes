/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

var articleItems,ul;

articleItems = $('.article-list').children().first();

ul = articleItems.find('ul');

ul.remove('ul');
