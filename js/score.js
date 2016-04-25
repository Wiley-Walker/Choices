// Create a counter to know how many choices (squares) are left 
var counter = 0;
var points = 0;
var v = 25;
var p = 25;
var s = 25;
var r = 25;
var numberOne = document.getElementsByClassName('clickoption');
var mine = 0;


// check to see if pointer is hovering over Politics
 





         // Buildings section


  

           
    		$(".clickoption").on ('click', function(){
    			 
    				 
    				var value = $(this).attr('data-points');
    				var value1 = $(this).attr('data-politics');
    				var value2 = $(this).attr('data-plant');
    				var value3 = $(this).attr('data-religion');
    				var a = parseInt(value);
    				var b = parseInt(value1);
    				var c = parseInt(value2);
    				var d = parseInt(value3);
    				
    				

    				
    				 
    				points = points + 100;
    				v = v + a;
    				p = p + b;
    				s = s + c;
    				r = r + d;

    				console.log(v);
    				 
            $("#progress-bar").css("width", v +  '%');
            $("#progress-bar").attr("aria-valuenow", v + '%');
            $("#power-bar").css("width", p + '%');
            $("#power-bar").css("width", p + '%');
            $("#pop-bar").css("width", s + '%');
            $("#pop-bar").css("width", s + '%');
            $("#religion-bar").css("width", r + '%');
            $("#religion-bar").css("width", r + '%');
             document.getElementById("score").innerHTML = "Points: " + points;

    				if (v>100) {
    					v=25;
    					$("#progress-bar").css("width", v +  '%');
            			$("#progress-bar").attr("aria-valuenow", v + '%');
    				}

    				if (p > 100) {
    					p=25;
    					$("#power-bar").css("width", p + '%');
            			$("#power-bar").css("width", p + '%');
    				}

    				if (s > 100) {
    					s = 25;

    					$("#pop-bar").css("width", s + '%');
            			$("#pop-bar").css("width", s + '%');
    				}

    				if (r > 100) {
    					r = 25;
    					$("#religion-bar").css("width", r + '%');
            			$("#religion-bar").css("width", r + '%');
    				}

    				if (r + s + p + v == 400) 
    					{ 
    						alert("YOU WON!!!!!");
    			}

        });
         
        console.log(counter);

         
        counter = counter + 1;


     
      

        

      

     

 






