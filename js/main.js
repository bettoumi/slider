



  //function for slider auto
 var   k=-1;

 function play()

{
	    
	    var f=document.getElementsByTagName('figure');
	    for( j=0; j<f.length; j++)
	    {
	    	f[j].classList.add("hid");
	    	f[j].classList.remove("visible");
	    	
	    }
	    
	  if(k<f.length-1){ k++;}
	  else{k=0;}
        
	
     
         	   f[k].classList.remove("hid");
         	   f[k].classList.add("visible");
         	   setTimeout(function(){ f[k].img.classList.add("anim");},500);
         	   f[k].style.border="2px solid black";
         	   
        
       
      


}

 

setInterval(function(){ play();},2000);
document.getElementById("myBtn").addEventListener("click", myFunction);
