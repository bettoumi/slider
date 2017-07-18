



  //function for slider auto
 var   k=-1;
var f=document.getElementsByTagName('figure');
 function play()

{
	    
	    
	    for( j=0; j<f.length; j++)
	    {
	    	f[j].classList.add("hid");
	    	f[j].classList.remove("visible");
	    	
	    }
	    
	  if(k<f.length-1){ k++;}
	  else{k=0;}
        
	
     
         	   f[k].classList.remove("hid");
         	   f[k].classList.add("visible");
         	    // setTimeout(function(){ f[k].classList.add("anim");},500);
         	   f[k].style.border="2px solid black";
         	   
        
       
      


}

 

var intplay=setInterval(function(){ play();},2000);
document.getElementById("butnext").addEventListener("click", suivant);
document.getElementById("butprec").addEventListener("click", precedant);
function suivant()
{
     clearInterval(intplay);
     f[k].classList.add('hid');
     f[k].classList.remove('visible');
    
      if(k<f.length-1)
      	{ k++;}
	  else
	  	{k=0;}


   f[k].classList.remove("hid");
   f[k].classList.add('visible');
   // console.log(k);

}

function precedant()
{
     clearInterval(intplay);
     f[k].classList.add('hid');
     f[k].classList.remove('visible');
    
      if(k>0)
      	{ k--;}
	  else
	  	{k=f.length-1;}
        
   
   

   f[k].classList.remove("hid");
   f[k].classList.add('visible');
   // console.log(k);

}
