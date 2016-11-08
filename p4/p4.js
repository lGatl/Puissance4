
/*ANIMER LE JETON*/

$(".t").click(function(){
/*	je met $("this en variable")*/ 
thi=$(this)
larbo=$(".body").width();
haubo=$(".body").height();
t=thi.position().top;
l=thi.position().left;
 col=Math.floor(l/(larbo/8))+1
 lig=7
 ta=$("#dc"+lig+col)
$(".jeton").css({top: t+"px",left:l+"px"})

jets(thi)
$(".jeton").animate({top:t+(lig+1)*larbo/8},3000,function(){
	
	jeth(ta,thi);
});

});
/*----------------------------*/
/*AFFICHER JETON QUI BOUGE CACHER JETON STATIQUE*/
function jets(t){
	$(".jeton").show();
	t.hide()
}
/*AFFICHER JETON statique CACHER JETON qui bouge*/
function jeth(ta,t){
	
	$(".jeton").hide();
	 
ta[0].style.background="url('rouge.png') no-repeat"
ta[0].style.backgroundSize="100%"
	t.show()
}
/*----------------------------*/