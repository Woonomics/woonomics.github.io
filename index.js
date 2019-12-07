
//TYPE economics student and hobbyst programmer 

function subtitle(){

	var counter = 0
	var underscore = 0

	var subtitle_show = document.getElementById("subtitle")
	
	var tempstring = ""
	var subtitle_string = "economics student and hobbyst programmer"
	
	var type_speed = 50
	
	typewriter()
	function typewriter(){

		if (tempstring.length < subtitle_string.length){

			tempstring += subtitle_string.charAt(counter)
			
			subtitle_show.innerHTML = tempstring
			console.log(tempstring)

			counter++
		}

		if(tempstring.length >= subtitle_string.length){
			
			console.log("done")
			type_speed = 1000

			if (underscore == 0) {

				tempstring += "_"
			
				subtitle_show.innerHTML = tempstring
				console.log(tempstring)
	
				underscore = 1
				console.log("underscore is now 1")


			} else {

				(underscore == 1) 

				tempstring = tempstring.substring(0, tempstring.length - 1);

			
				subtitle_show.innerHTML = tempstring
				console.log(tempstring)	

				underscore = 0
				console.log("underscore is now 0")


			}

		}
		setTimeout(typewriter, type_speed);
	}

}
subtitle()
