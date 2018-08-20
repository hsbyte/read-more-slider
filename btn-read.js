$(function() {

  /* read button */
  var $btn = $(".btn-read")

  $btn.prev().slideToggle(0);
  $btn.on('click', function() {

    $(this).prev().slideToggle(500);
    $(this).html( $(this).html() === 'read more' ? 'read less' : 'read more' );
  });

});
