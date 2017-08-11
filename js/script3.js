// Rectifies the issue of the nav-bar not taking its proper place on screen when the window is resized on a browser
window.onresize = function() { 
    location.reload(); 
}

function initialiseVariables() {
 var nav = document.getElementById("myNav");
 var body = document.body;
 var ng = document.getElementById("ngView");
 var logo = document.getElementById("logo");
 var panHead = document.getElementsByClassName("panel-heading");
 var panBody = document.getElementsByClassName("panel-body");
 var reg = document.getElementById("regForm");
 var field = document.getElementsByTagName("input");
 var selection = document.getElementsByTagName("select");
 var z,y,x,v;
}

function expandNav() {
 
 //Continue with the rest of the code
 if ($(window).width() > 750) {
	    initialiseVariables();
	    nav.style.left = "0";
	    body.style.backgroundColor = "rgb(153,153,153)";
		ng.style.background = "rgb(153,153,153)";
		logo.src = "pics/ReLife_logo2.jpg";
		  
		// Included if statements due to clashes when trying to execute the code while not on the page that contained the affected classes
		if (window.location.pathname == "/faq") {
		  
		    for (z = 0; z < panHead.length; z++) {
			    panHead[z].style.backgroundColor = "rgb(153,153,153)";
		    }
		  
		    for (y = 0; y < panBody.length; y++) {
			    panBody[y].style.backgroundColor = "rgb(153,153,153)";
		    }
		}
		  
		if (window.location.pathname == "/register") {
		    reg.style.backgroundColor = "rgb(153,153,153)";
		  
		    for (x = 0; x < field.length; x++) {
			    field[x].style.backgroundColor = "rgb(153,153,153)";
		    }
		  
		    for (v = 0; v < selection.length; v++) {
			    selection[v].style.backgroundColor = "rgb(153,153,153)";
		    }
		}
    }
}

function contractNav() {
	initialiseVariables();

	if ($(window).width() > 750) {
	    nav.style.left = "-175px";
	    body.style.backgroundColor = "#fff";
		ng.style.background = "linear-gradient(to bottom, rgba(155,235,255,0), rgba(155,235,255,1))";
		logo.src = "pics/ReLife_logo.jpg";
		  
		if (window.location.pathname == "/faq") {
		  
		    for (z = 0; z < panHead.length; z++) {
			    panHead[z].style.backgroundColor = "#f5f5f5";
		    }
		  
		    for (y = 0; y < panBody.length; y++) {
			    panBody[y].style.backgroundColor = "#fff";
		    }
		}
		  
		if (window.location.pathname == "/register") {
		    reg.style.backgroundColor = "#fff";
		  
		    for (x = 0; x < field.length; x++) {
			    field[x].style.backgroundColor = "#fff";
		    }
		  
		    for (v = 0; v < selection.length; v++) {
			    selection[v].style.backgroundColor = "#fff";
		    }
		}
    }
}

function toggleNav() {
	initialiseVariables();

	if ($(window).width() <= 750) {
	    if (nav.style.left == "-125px") {
	        nav.style.left = "0";
	        body.style.backgroundColor = "rgb(153,153,153)";
			ng.style.background = "rgb(153,153,153)";
	        logo.src = "pics/ReLife_logo2.jpg";
			  
			if (window.location.pathname == "/faq") {  
			  
			    for (z = 0; z < panHead.length; z++) {
				    panHead[z].style.backgroundColor = "rgb(153,153,153)";
			    }
			  
			    for (y = 0; y < panBody.length; y++) {
				    panBody[y].style.backgroundColor = "rgb(153,153,153)";
			    }
			}
			  
			if (window.location.pathname == "/register") {
			    reg.style.backgroundColor = "rgb(153,153,153)";
			  
			    for (x = 0; x < field.length; x++) {
				    field[x].style.backgroundColor = "rgb(153,153,153)";
			    }
			  
			    for (v = 0; v < selection.length; v++) {
				    selection[v].style.backgroundColor = "rgb(153,153,153)";
			    }
			}
			  
		} else {
	        nav.style.left = "-125px";
		    body.style.backgroundColor = "#fff";
			ng.style.background = "linear-gradient(to bottom, rgba(155,235,255,0), rgba(155,235,255,1))";
		    logo.src = "pics/ReLife_logo.jpg";
			  
			if (window.location.pathname == "/faq") {
			  
			    for (z = 0; z < panHead.length; z++) {
				    panHead[z].style.backgroundColor = "#f5f5f5";
			    }
			  
			    for (y = 0; y < panBody.length; y++) {
				    panBody[y].style.backgroundColor = "#fff";
			    }
			}
			  
			if (window.location.pathname == "/register") {
			    reg.style.backgroundColor = "#fff";
			  
			    for (x = 0; x < field.length; x++) {
				    field[x].style.backgroundColor = "#fff";
			    }
			  
			    for (v = 0; v < selection.length; v++) {
				    selection[v].style.backgroundColor = "#fff";
			    }
			}
	    }
	}
}

function closeModal() {
	setTimeout(function(){
        $("#myModal").modal("hide");
        $("body").removeClass("modal-open");
        $(".modal-backdrop").remove();
    }, 5000);
}