




 var   k=-1;

 function play()

{
	    
	    var f=document.getElementsByTagName('img');
	    for( j=0; j<f.length; j++)
	    {
	    	f[j].classList.add("hid");
	    	f[j].classList.remove("visible");
	    	
	    }
	    
	  if(k<f.length-1){ k++;}
	  else{k=0;}
        // if(f[k].classList.contains("hid"))
	
         // {
         	   f[k].classList.remove("hid");
         	   f[k].classList.add("visible");
         	   f[k].style.border="2px solid black";
         	   
         // }
       
      


}
 

setInterval(function(){ play();},2000);
