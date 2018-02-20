function someFunction() {
  var arti = $('.article-list').children().first();
  arti.find('img').attr('src','http://lorempixel.com/350/150/animals/');
}

$(someFunction);
