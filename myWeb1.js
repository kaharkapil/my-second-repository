$(document).ready(()=> {
	/*let myText=$('body').html();
	alert(myText);*/
	//let myText=$('.paragraph').html();  // using class
	//alert(myText); 
	//let myText1=$('#someRandomId').text(); //using Id
	//alert(myText1);
	//let myText=$('.my-image').attr("src"); // ant attribute can be fetched by jquery
	//alert(myText);
	//let someParagraph="this is going to replace the previous one. this is going to replace the previous one this going to replace the previous one"
	 //$('#someId').text(someParagraph); 
	 //$('#someRandomId').append("Some extra element at end");
	 //$('#someRandomId').prepend("Some extra element at begining");
	 //$('#someRandomId').after("Some extra element after element");
     //$('#someRandomId').before("Some extra element before element");
    


     //$('#performAction').click(()=>{
     //	$('#someRandomId').addClass('big-font');
     //})

     $('#newElement').dblclick(()=>{
     	$("#someRandomId").css("color","green");
     })

     $("#some-image").hover(()=>{
     	$(".my-image").hide("5000");
     })

               //Traversal
     //$('#performAction').parent().addClass('highlight'); //Parent
     //$('#performAction').parents().addClass('highlight');
     // $('#performAction').parentsUntil("div").addClass('highlight');
     //$('#someRandomId').children().addClass("highlight");
     //$('body').find("*").addClass("highlight");

           //// custom
      $('.row').first().addClass("highlight");
      $('a').filter("#someId").addClass("change");


})