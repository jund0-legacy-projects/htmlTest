  $(function(){
  	$('.list-test li div a').click(function(e){

  		console.log($(this).data('item'));
  		
  		$(this).parent().fadeOut();
  		e.preventDefault();
  		
  	});
  });