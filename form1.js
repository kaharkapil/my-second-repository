$(document).ready(()=>{
    $('#email-input').trigger('focus');// triggering



	$('input').focus(function(){
		$(this).addClass('coloured-border')
	});


	$('input').focusout(function(){
		$(this).removeClass('coloured-border')
	});

    $('form').submit((event)=>{ //event e also
    	    event.preventDefault();
    		alert("User logged in successfully...!!!")
    });
})