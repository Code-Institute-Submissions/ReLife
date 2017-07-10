window.onresize = function(){ 
      location.reload(); 
  }
  
  // Functions for the interactive Nav-Bar. Duplicated variables to avoid declaring globals
  function expandNav() {
      var i = document.getElementById("myNav");
	  var x = document.body;
	  var n = document.getElementById("ngView");
	  var p = document.getElementById("logo");
	  var h = document.getElementsByClassName("panel-heading");
	  var b = document.getElementsByClassName("panel-body");
	  var z;
	  var y;
	  
	  if ($(window).width() > 750) {
	      i.style.left = "0";
	      x.style.backgroundColor = "rgb(153,153,153)";
		  n.style.background = "rgb(153,153,153)";
		  p.src = "pics/ReLife_logo2.jpg";
		  
		  for (z = 0; z < h.length; z++) {
			  h[z].style.backgroundColor = "rgb(153,153,153)";
		  }
		  
		  for (y = 0; y < b.length; y++) {
			  b[y].style.backgroundColor = "rgb(153,153,153)";
		  }
      }
  }
  
  function contractNav() {
      var i = document.getElementById("myNav");
	  var x = document.body;
	  var n = document.getElementById("ngView");
	  var p = document.getElementById("logo");
	  var h = document.getElementsByClassName("panel-heading");
	  var b = document.getElementsByClassName("panel-body");
	  var z;
	  var y;
	  
	  if ($(window).width() > 750) {
	      i.style.left = "-175px";
	      x.style.backgroundColor = "#fff";
		  n.style.background = "linear-gradient(to bottom, rgba(155,235,255,0), rgba(155,235,255,1))";
		  p.src = "pics/ReLife_logo.jpg";
		  
		  for (z = 0; z < h.length; z++) {
			  h[z].style.backgroundColor = "#f5f5f5";
		  }
		  
		  for (y = 0; y < b.length; y++) {
			  b[y].style.backgroundColor = "#fff";
		  }
      }
  }
  
  // The toggle function for touch screens that replaces the fade in and out version for desktop
  function toggleNav() {
      var i = document.getElementById("myNav");
	  var x = document.body;
	  var n = document.getElementById("ngView");
	  var p = document.getElementById("logo");
	  var h = document.getElementsByClassName("panel-heading");
	  var b = document.getElementsByClassName("panel-body");
	  var z;
	  var y;
	  
	  
	  if ($(window).width() <= 750) {
	      if (i.style.left == "-125px") {
	          i.style.left = "0";
	          x.style.backgroundColor = "rgb(153,153,153)";
			  n.style.background = "rgb(153,153,153)";
	          p.src = "pics/ReLife_logo2.jpg";
			  
			  for (z = 0; z < h.length; z++) {
				  h[z].style.backgroundColor = "rgb(153,153,153)";
			  }
			  
			  for (y = 0; y < b.length; y++) {
				  b[y].style.backgroundColor = "rgb(153,153,153)";
			  }
	      } else {
	          i.style.left = "-125px";
		      x.style.backgroundColor = "#fff";
			  n.style.background = "linear-gradient(to bottom, rgba(155,235,255,0), rgba(155,235,255,1))";
		      p.src = "pics/ReLife_logo.jpg";
			  
			  for (z = 0; z < h.length; z++) {
				  h[z].style.backgroundColor = "#f5f5f5";
			  }
			  
			  for (y = 0; y < b.length; y++) {
				  b[y].style.backgroundColor = "#fff";
			  }
	      }
	  }
  }