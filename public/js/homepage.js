$(document).ready(function(){
	$( "#register" ).hide();
	$( "#login").hide();
});
$(document).on("click", function(e){
    var targ = $(e.target);
    var panrentUl = $(targ).closest('ul').attr('id');
     if($("#login").css('display') == 'block'  ){
		if(targ.attr('id') != 'sign-in-btn' && panrentUl !='login'){
			$( "#login").slideUp();
		}
	}
	if($("#register").css('display') == 'block'){
		if(targ.attr('id') != 'register-btn' && panrentUl !='register'){
			$( "#register").slideUp();
		}
	}
});
// function showDialog(id){
// 	$("#"+id).css("display", "block");
// 	$("#bodypage").addClass("modal-backdrop fade in");
// }
// function oldMode(id){
// 	$("#"+id).css("display", "none");
// 	$("#bodypage").removeClass("modal-backdrop fade in");
// }
function slideShow(id){
	if($("#"+id).css('display') == 'none'){
		$( '#'+id ).slideDown('low');
	} else {
		$( '#'+id ).slideUp('low');
	}

}
