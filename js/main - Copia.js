$(document).ready(function(e) {

	/*Declaramos las variables para cada id dentro de la web*/
	fondo = $('#fondo');
	vackslash = $('#backslash');
	mountains = $('#mountains');
	luzroja = $('#rojo');
	luzazul = $('#azul');
	tit_tra = $('#tit_tra');
	tit_dis = $('#tit_dis');
	izq = $('#izq');
	dch = $('#dch');
	monster = $('#monster');
	cabeza_monster = $('#hmonster');
	cuerpo_monster = $('#bmonster');
	
	miformulario = $('#miformulario');
	TweenMax.to(miformulario, 0, {alpha:0});
	
	paso1_dis = $('#paso1_dis');
	paso2_dis = $('#paso2_dis');
	
	paso1_tra = $('#paso1_tra');
	paso2_tra = $('#paso2_tra');
	
	alertaTradicional = $('#alertaTradicional');
	intro_tra = $('#intro_tradicional');
	intro_dis = $('#intro_disruption');
	
	sombra = $('#sombra');
	
	TweenMax.to(cabeza_monster, 0, {x:-200});
	TweenMax.to(cuerpo_monster, 0, {x:-200});
	
	control="activo";
	TweenMax.to(tit_tra, 0, {alpha:0});
	TweenMax.to(tit_dis, 0, {alpha:0});
	
	/*animamos las luces*/
	TweenMax.to(luzroja, 0, {alpha:0});
	TweenMax.to(luzazul, 0, {alpha:0});
	animacionluces();
	

});
/* --------------------------------- Animación Luces ---------------------------------------------- */

function animacionluces(){
		TweenMax.to(luzazul, 0.5, {alpha:0});
		TweenMax.to(luzroja, 0.5, {alpha:1,delay:1});
		TweenMax.to(luzroja, 0.5, {alpha:0,delay:2});
		TweenMax.to(luzazul, 0.5, {alpha:1,delay:3});
		setTimeout(function(){
				animacionluces();
      	},4000);
}

/* --------------------------------- Boton Izquierda ---------------------------------------------- */

function izqOn() {
	    TweenMax.to(fondo, 1, {x:+200,ease:Power2.easeOut});
		TweenMax.to(vackslash, 1, {x:+205,ease:Power2.easeOut});
		TweenMax.to(mountains, 1, {x:+205,ease:Power2.easeOut});
		TweenMax.to(tit_tra, 0.5, {alpha:1,ease:Power2.easeOut});
		TweenMax.to(tit_dis, 0, {alpha:0});
}
function izqOff(){
		if(control=="activo"){
		TweenMax.to(tit_tra, 1, {alpha:0,ease:Power2.easeOut});
    	TweenMax.to(fondo, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(vackslash, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(mountains, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(tit_dis, 0, {alpha:0});
		}
}

/* --------------------------------- Boton Derecha ---------------------------------------------- */

function dchOn() {
		TweenMax.to(fondo, 1, {x:-200,ease:Power2.easeOut});
		TweenMax.to(vackslash, 1, {x:-205,ease:Power2.easeOut});
		TweenMax.to(mountains, 1, {x:-205,ease:Power2.easeOut});
		TweenMax.to(tit_dis, 0.5, {alpha:1,ease:Power2.easeOut});
		TweenMax.to(tit_tra, 0, {alpha:0});
}
function dchOff(){
		if(control=="activo"){
		TweenMax.to(tit_dis, 1, {alpha:0,ease:Power2.easeOut});
		TweenMax.to(fondo, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(vackslash, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(mountains, 1, {x:0,ease:Power2.easeOut});
		TweenMax.to(tit_tra, 0, {alpha:0});
		}
}
/*----------------- ver u ocultar sombra ------------------------*/

function VerOcultarSombra(valor){
	if(valor=="ocultar"){
		
		TweenMax.to(sombra, 0.5, {alpha:0});
		setTimeout(function(){
				sombra.css("display","block");				
      	},500);
		
	}else if(valor=="mostrar"){
		
		sombra.css("display","block");
		TweenMax.to(sombra, 0, {alpha:0});
		TweenMax.to(sombra, 0.5, {alpha:1,delay:0.5});
				
	}
}
/*--------------------------- Seleccion de Felicitacion TRADICIONAL -------------------------------*/
function seleccionNormal(){
		control="inactivo";
		TweenMax.to(izq, 0.2, {alpha:0});
		TweenMax.to(dch, 0.2, {alpha:0});
		TweenMax.to(tit_tra, 0.2, {alpha:0});
		
		TweenMax.to(fondo, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		TweenMax.to(vackslash, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		TweenMax.to(mountains, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		setTimeout(function(){
				izq.css("display","none");
				dch.css("display","none");
				tit_dis.css("display","none");
				tit_tra.addClass('titcentro');
				TweenMax.to(tit_tra, 0, {y:+1000});
				TweenMax.to(tit_tra, 0.5, {alpha:1,delay:1.5});
				TweenMax.to(tit_tra, 2, {y:0,delay:1.5,ease:Power2.easeInOut});
				
				intro_tra.css("display","block");
				TweenMax.to(intro_tra, 0, {alpha:0});
				TweenMax.to(intro_tra, 0.5, {alpha:1,delay:3.5});
				
				
				
      	},200);
}

/*--------------------------- Seleccion de Felicitacion DISRUPTIVA -------------------------------*/

function seleccionDisruption(){
		
		control="inactivo";
		TweenMax.to(izq, 0.2, {alpha:0});
		TweenMax.to(dch, 0.2, {alpha:0});
		TweenMax.to(tit_dis, 0.2, {alpha:0});
		TweenMax.to(fondo, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		TweenMax.to(vackslash, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		TweenMax.to(mountains, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		setTimeout(function(){
				izq.css("display","none");
				dch.css("display","none");
				tit_dis.addClass('titcentro2');
				TweenMax.to(tit_dis, 0, {y:+1000});
				TweenMax.to(tit_dis, 0.5, {alpha:1,delay:1.5});
				TweenMax.to(tit_dis, 2, {y:0,delay:1.5,ease:Power2.easeInOut});
				
				intro_dis.css("display","block");
				TweenMax.to(intro_dis, 0, {alpha:0});
				TweenMax.to(intro_dis, 0.5, {alpha:1,delay:3.5});
				
				monster.css("display","block");
				TweenMax.to(cabeza_monster, 2, {x:10,ease:Power2.easeInOut,delay:3});				
				TweenMax.to(cuerpo_monster, 2, {x:0,ease:Power2.easeInOut,delay:3});
				TweenMax.to(cabeza_monster, 1, {rotation:5,x:+10,ease:Power2.easeInOut,delay:5});
				
      	},200);
}



/*------------- PASOS -------------------------*/
function paso1(wariable){	

	VerOcultarSombra("mostrar");
	miformulario.css("display","block");	
	TweenMax.to(miformulario, 0.5, {alpha:1,delay:0.3});

	
	
	if(wariable=='tradicional'){
		
		TweenMax.to(intro_tra, 0.5, {alpha:0});
		
		setTimeout(function(){
				intro_tra.css("display","none");
				paso1_tra.css("display","block");				
				
				TweenMax.to(paso1_tra, 0, {alpha:0});											
				TweenMax.to(paso1_tra, 0.5, {alpha:1,delay:0.5});
				
      	},500);
		
	}else if(wariable=='disruption'){
		
		TweenMax.to(intro_dis, 0.5, {alpha:0});
		TweenMax.to(cabeza_monster, 0.3, {y:+3,delay:0});
		TweenMax.to(cabeza_monster, 0.3, {y:0,delay:0.3});
		TweenMax.to(cabeza_monster, 0.3, {y:+3,delay:0.6});
		TweenMax.to(cabeza_monster, 0.3, {y:0,delay:0.9});
		TweenMax.to(cabeza_monster, 0.3, {y:+3,delay:1.2});
		TweenMax.to(cabeza_monster, 0.3, {y:0,delay:1.5});
		
		setTimeout(function(){
				intro_dis.css("display","none");
				paso1_dis.css("display","block");				
				
				TweenMax.to(paso1_dis, 0, {alpha:0});											
				TweenMax.to(paso1_dis, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	
	}
}

function paso2(wariable){
	if(wariable=='tradicional'){
		TweenMax.to(alertaTradicional, 0.5, {alpha:0});	
		
		setTimeout(function(){
				alertaTradicional.css("display","none");
				paso2_tra.css("display","block");				
				
				TweenMax.to(paso2_tra, 0, {alpha:0});											
				TweenMax.to(paso2_tra, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	}else if(wariable=='disruption'){
		TweenMax.to(paso1_dis, 0.5, {alpha:0});	
		
		setTimeout(function(){
				paso1_dis.css("display","none");
				paso2_dis.css("display","block");				
				
				TweenMax.to(paso2_dis, 0, {alpha:0});											
				TweenMax.to(paso2_dis, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	}else if(wariable=='alerta'){
		
		TweenMax.to(paso1_tra, 0.5, {alpha:0});	
		
		setTimeout(function(){
				paso1_tra.css("display","none");
				alertaTradicional.css("display","block");				
				
				TweenMax.to(alertaTradicional, 0, {alpha:0});											
				TweenMax.to(alertaTradicional, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	}
}

function cambiaraDisruption(){
	TweenMax.to(alertaTradicional, 0.5, {alpha:0});	
	TweenMax.to(miformulario, 0.5, {alpha:0});
		
	setTimeout(function(){
				alertaTradicional.css("display","none");
				miformulario.css("display","none");				
				VerOcultarSombra("ocultar");		
     },500);
	 
	TweenMax.to(fondo, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenMax.to(vackslash, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenMax.to(mountains, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenMax.to(tit_tra, 2, {y:+1000,delay:0.5,ease:Power2.easeInOut});
	setTimeout(function(){
				tit_dis.addClass('titcentro2');					
				tit_dis.css("display","block");
				
				TweenMax.to(tit_dis, 0, {y:+1000});
				TweenMax.to(tit_dis, 0.5, {alpha:1,delay:0});
				TweenMax.to(tit_dis, 2, {y:0,delay:0,ease:Power2.easeInOut});
				
				intro_dis.css("display","block");
				TweenMax.to(intro_dis, 0, {alpha:0});
				TweenMax.to(intro_dis, 0.5, {alpha:1,delay:2});
				
				monster.css("display","block");
				TweenMax.to(cabeza_monster, 2, {x:10,ease:Power2.easeInOut,delay:3});				
				TweenMax.to(cuerpo_monster, 2, {x:0,ease:Power2.easeInOut,delay:3});
				TweenMax.to(cabeza_monster, 1, {rotation:5,x:+10,ease:Power2.easeInOut,delay:5});
	 },1000);
		
	
}

/*------ mostrar y ocultar campos del formulario ------------------------*/
function mostrar(miid){
	identificador=$('#'+miid);
	identificador.css("display","block");
	TweenMax.to(identificador, 0, {alpha:0});											
	TweenMax.to(identificador, 0.5, {alpha:1,delay:0.5});
}
function ocultar(miid){
	identificador=$('#'+miid);	
	TweenMax.to(identificador, 0.5, {alpha:0});	
	setTimeout(function(){
				identificador.css("display","none");
				
    },500);										

}
