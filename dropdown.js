
$(document).ready(function () {
	$('#searchbox').keyup(function(event) {
		var search_text = $('#searchbox').val();
		search_text = search_text.split(' ').join('.*');
		var rg = new RegExp(search_text,'i');
		$('#nav li').each(function(){
 			if($.trim($(this).html()).search(rg) == -1) {
 				$(this).css('display', 'none');
			}	
			else {
				$(this).parents().css('display', '');
				$(this).css('display', '');
				$(this).parent().parent().css('background-color', '#CE2661');
			}
		});
	});
});
 
$('#search_clear').click(function() {
	$('#searchbox').val('');	
 
	$('#nav li').each(function(){
		$(this).parents().css('display', '');
		$(this).css('display', '');
		$(this).css('background-color', '#ffffff');
		$(this).parents().css('background-color', '#ffffff');
	});
});