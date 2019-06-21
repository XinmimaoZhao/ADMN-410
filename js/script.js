$(document).ready(function() {
						   
  $("#slide_show_controls").on('click', 'span', function() {
												  
    $("#slide_show img").removeClass("opaque");

    var newImage = $(this).index();

    $("#slide_show img").eq(newImage).addClass("opaque");

    $("#slide_show_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});