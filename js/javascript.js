$(document).ready(function(){


  $('#add-items').keydown(function(enter){
      if(enter.keyCode == 13) {
          postItem();
      }
  });

    function postItem(){
        var item = $('#add-items').val();
        var placeIt = $('<li><span class="delete">'+ item +' </span>' + '<span class="checkOff"></span></li>');
        $('.items').prepend(placeIt);
        $('#add-items').val('');
    }

    $('ul').on('click', '.delete', function() {

        $(this).parent().remove();

    });

    $('ul').on('click', '.checkOff', function(){ //Selects the class .checkOff in the second span. Not both of the spans.

      $(this).parent().toggleClass('completed');


    });


});
