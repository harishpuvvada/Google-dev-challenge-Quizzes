
//when submit button is clicked
$('#sub-btn').on('click',function(event){

  var hgt = $('#inputHeight').val();
  var wt = $('#inputWeight').val();

    for (var i=0;i<hgt;i+=1)
    {
        $('#pixelCanvas').append("<tr></tr>" );
    }
    for (var j=0;j<wt;j+=1)
    {
      $('tr').append("<td></td>" );
    }

  //when a cell is clicked, give the color of the colorPicker
  $('td').click( function()
  {   var clr = $('#colorPicker').val();
      $(this).css('background-color', clr);
  } );

  event.preventDefault();
});
