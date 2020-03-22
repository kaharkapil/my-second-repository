$(document).ready(()=>{

	getAllData();
});

let getAllData=()=> {
	console.log("making request");
	$.ajax( {

			type:'GET',
			dataType:'json',
			async:true,
			url:'http://api.open-notify.org/astros.json',
			success:(data)=>{
				console.log(data);
				let allPeople=data.people;

		    	for(person of allPeople){
		    		let tempRow=  `<div class="row">
		    	                   <div class="col">${person.name}</div>
		    	                   <div class="col"> ${person.craft}</div>
		    	                   </div>`
		    	
		    $("#showData").append(tempRow);
		    }  // End of for loop
	        }, ///End of succes
		    error: (err)=>{
		    	alert("Some Error occured...!!!");
		    	// alert(err.responseJSON.error.message);
		    }
    }); //End of ajax
} // END OF getAllData
