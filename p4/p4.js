
xi=1
bgi={}
jo={xi,bgi}
cd=true

changj(xi)

j=0
/*ANIMER LE JETON*/
/*Cree un tableau de 8*8 et le remplie de 0 */
function init(){
	tab=[[],[],[],[],[],[],[],[]]
	for (i=0;i<8;i++){for(j=0;j<8;j++){tab[i][j]=0}}
	lig=0
}

function changj(x){
	if (xi==1){xi=2}else{xi=1}
		joueur(x)
	initp($(".ti"))

}

function joueur(x){
	if(x==1){
		bgi="url('rouge.png') no-repeat"
	}else{
		bgi="url('bleu.png') no-repeat"
	}

	jo.xi=x
	jo.bgi=bgi
	return jo
}

function initp(div){
	for (i=0;i<8;i++){
		div[i].style.background=jo.bgi
		div[i].style.backgroundSize="100%"
	}
}

function c(a){console.log(a)}



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

$(".t").hover(function(){if(cd){
	col=cherchcol($(this))+1

				$("#ti"+col).show()
			}},function(){if(cd){
	col=cherchcol($(this))+1
			$("#ti"+col).hide()
		}});


function cherchcol(thi){
			/*	je met $("this") en variable*/
		/*largeur hauteur du body en variable*/
		larbo=$(".body").width();
		haubo=$(".body").height();
		/*position de la case cliquée en variable*/
		t=thi.position().top;
		l=thi.position().left;
		/*retrouve la colonne cliquée en fonction de
		la largrue du body et de la position left du cliqué*/
		col=Math.round(l/(larbo/8),1)

		return col
}

$(".ti").click(function(){
	/*bloqué si cd=false*/
	if(cd==true){
		cd=false
		thi=$(this)
		col=cherchcol(thi)
		/*appelle la fonction cherchlig sur la colonne cliquée*/
		lig=cherchlig(tab,col)
		tab[col][lig]=jo.xi
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
				jeth(ta,thi);
				changj(xi);

				testgn(tab)
				cd=true
		});
	}

});
/*----------------------------*/
/*AFFICHER JETON QUI BOUGE CACHER JETON STATIQUE*/
function jets(t){
	$(".jeton")[0].style.background=jo.bgi
	$(".jeton")[0].style.backgroundSize="100%"
	t.hide()
	$(".jeton").show();

}
/*AFFICHER JETON statique CACHER JETON qui bouge*/
function jeth(ta,t){
	$(".jeton").hide();
ta[0].style.background=jo.bgi
ta[0].style.backgroundSize="100%"

}
/*----------dd------------------*/



function testgn(tab){
	verti(tab)
	horz(tab)
	diagdr(tab)
	diagga(tab)
}
function diagga(tab){
	puis1=0
	puis2=0
	i=7
	j=7
	while(j>=0&&puis1<3&&puis2<3){
		i=7
		while((j-(7-i))>=0&&i>=1&&puis1<3&&puis2<3){
			if(tab[i][j-(7-i)]==1&&tab[i-1][j-(7-i)-1]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[i][j-(7-i)]==2&&tab[i-1][j-(7-i)-1]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i--
		}
		j--
	}
	i=7
	j=7

	while(j>=0&&puis1<3&&puis2<3){
		i=7
		while((j-(7-i))>=1&&i>=1&&puis1<3&&puis2<3){
			c((j-(7-i)-1))
			if(tab[j-(7-i)][i]==1&&tab[j-(7-i)-1][i-1]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[j-(7-i)][i]==2&&tab[j-(7-i)-1][i-1]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i--
		}
		j--
	}

	if(puis1==3){gagn(1)}
	if(puis2==3){gagn(2)}
}

function diagdr(tab){
	puis1=0
	puis2=0
	i=0
	j=0
	while(j<=4&&puis1<3&&puis2<3){
		puis1=0
		puis2=0
		i=0
		while(j+i<=6&&i<=7&&puis1<3&&puis2<3){
			if(tab[i][j+i]==1&&tab[i+1][j+i+1]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[i][j+i]==2&&tab[i+1][j+i+1]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i++
		}
		j++
	}
	i=0
	j=0
	while(j<=4&&puis1<3&&puis2<3){
		puis1=0
		puis2=0
		i=0
		while(j+i<=6&&i<=7&&puis1<3&&puis2<3){
			if(tab[j+i][i]==1&&tab[j+i+1][i+1]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[j+i][i]==2&&tab[j+i+1][i+1]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i++
		}
		j++
	}

	if(puis1==3){gagn(1)}
	if(puis2==3){gagn(2)}

}




function horz(tab){
	puis1=0
	puis2=0
	i=0
	j=0
	while(j<=7&&puis1<3&&puis2<3){
		i=0
		while(i<=6&&puis1<3&&puis2<3){
			if(tab[i][j]==1&&tab[i+1][j]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[i][j]==2&&tab[i+1][j]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i++
		}
		j++

	}
	if(puis1==3){gagn(1)}
	if(puis2==3){gagn(2)}
}
function verti(tab){
	puis1=0
	puis2=0
	i=0
	j=0
	while(j<=7&&puis1<3&&puis2<3){
		i=0
		while(i<=7&&puis1<3&&puis2<3){

			if(tab[j][i]==1&&tab[j][i+1]==1){
				puis1++
				puis2=0
			}else{puis1=0}
			if(tab[j][i]==2&&tab[j][i+1]==2){
				puis2++
				puis1=0
			}else{puis2=0}
			i++
		}
		j++

	}
	if(puis1==3){gagn(1)}
	if(puis2==3){gagn(2)}

}

function gagn(j){

	alert("j"+j+" gagné")
	location.reload()
}




