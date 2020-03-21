$(document).ready(()=>{

	getAllData();
});

let getAllData=()=> {
	console.log("making request")
	$.ajax({
			type:'GET',
			dataType:'json',
			url:'ajax1.json',
			success:(data)=>{
				console.log(data);
				let allPeople=data.people

		    	for(person of allPeople){
		    		let tempRow=  `<div class="row">
		    	                   <div class="col">${person.name}</div>
		    	                   <div class="col"> ${person.craft}</div>
		    	                   </div>`
		    	
		    $("showData").append(tempRow);
		    }  // End of for loop
	        }, ///End of succes
		    error: (data)=>{
		    	alert("Some Error occured...!!!")
		    }
    }); //End of ajax
} // END OF getAllData
