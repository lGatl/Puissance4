
/*function myMove() {
    var elem = document.getElementById("myAnimation"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}*/

anim("t",1)
anim("t",2)
anim("t",3)
anim("t",4)
anim("t",5)
anim("t",6)
anim("t",7)
anim("t",8)

function anim(t,n){


		var element=document.getElementById(t+n);
		element.onclick = function(e) {
			
			
			elt= document.getElementById(element.id);
			largbody=document.getElementById("body").offsetWidth;
			topbody=document.getElementById("body").offsetTop;
			taille1c=largbody/8;
			lleft=taille1c*(n-1)
			document.getElementById("jet0").id="jet"
			document.getElementById("jet").style.left=lleft+8+"px";
			document.getElementById("jet").style.top =20+ "px";
			for(i=1;i<100;i++){
				console.log("frtftrf");
				setTimeout(function(){
					console.log(i);i++
					document.getElementById("jet").style.left=lleft+i+8+"px";

				},1000)
			}
/*10
*/		
	     

	   	 setTimeout(function(){document.getElementById("jet").id="jet0" },1000)
						
						}
		
	
	
}

