
cd=true
function c(a){console.log(a)}

/*ANIMER LE JETON*/
/*Cree un tableau de 8*8 et le remplie de 0 */
function init(){
	tab=[[],[],[],[],[],[],[],[]]
	for (i=0;i<8;i++){for(j=0;j<8;j++){tab[i][j]=0}}
	lig=0

}
/*Cette fonction permet de reperer la derniere
ligne vide en partant du haut et prend en 
parametre le tableau et la colonne*/
function cherchlig(tabl,colo){
	j=0
	ver=0
	while(ver==0&&j<9){	
	ver=tabl[colo][j]
		j++
	}
	return j-2			
}

$(".t").click(function(){
	/*bloqué si cd=false*/
	if(cd==true){
		cd=false	
		/*	je met $("this") en variable*/ 
		thi=$(this)
		/*largeur hauteur du body en variable*/
		larbo=$(".body").width();
		haubo=$(".body").height();
		/*position de la case cliquée en variable*/
		t=thi.position().top;
		l=thi.position().left;
		/*retrouve la colonne cliquée en fonction de 
		la largrue du body et de la position left du cliqué*/
		col=Math.floor(l/(larbo/8))
		/*appelle la fonction cherchlig sur la colonne cliquée*/
		lig=cherchlig(tab,col)
		tab[col][lig]=1
		
		/*met en variable la case sur la derniere 
		ligne vide de la colonne cliquée*/
		 ta=$("#dc"+lig+col)
		 /*positionne le jeton animé*/
		$(".jeton").css({top: t+"px",left:l+"px"})
		/*appelle la fonction jets*/
		jets(thi)
		/*anime le jeton animé*/
		$(".jeton").animate({top:t+(lig+1)*larbo/8},1000,function(){
			/*reactive si animation terminee*/
			cd=true
			jeth(ta,thi);
		});
	}
});
/*----------------------------*/
/*AFFICHER JETON QUI BOUGE CACHER JETON STATIQUE*/
function jets(t){
	t.hide()
	$(".jeton").show();
	
}
/*AFFICHER JETON statique CACHER JETON qui bouge*/
function jeth(ta,t){	
	$(".jeton").hide();	 
ta[0].style.background="url('rouge.png') no-repeat"
ta[0].style.backgroundSize="100%"
	t.show()
}
/*----------------------------*/

