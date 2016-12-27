$(document).ready(function(e) {
	$('html,body').animate({scrollTop:'0px'}, 0); 
	
	
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
	navegador = $('#navegador');
	
	
	procesando = $('#procesando');
	barra = $('#progreso');
	buzonmask = $('#buzonmask');
	capsula = $('#capsula');
	capsula2 = $('#capsula2');
	capsula3 = $('#capsula3');
	capsula4 = $('#capsula4');
	
	flasheo = $('#flasheo');
	TweenLite.to(flasheo, 0, {alpha:0});
	
	flasheo2 = $('#flasheo2');
	astronauta = $('#astronauta');
	animacioncofre = $('#animaciocofre');
	tapacofre = $('#tapacofre');
	ojoscofre = $('#ojoscofre');
	
	miformulario = $('#miformulario');
	TweenLite.to(miformulario, 0, {alpha:0});
	
	paso1_dis = $('#paso1_dis');
	paso2_dis = $('#paso2_dis');
	
	paso1_tra = $('#paso1_tra');
	paso2_tra = $('#paso2_tra');
	
	humillo = $('#humillo');
	
	alertaTradicional = $('#alertaTradicional');
	intro_tra = $('#intro_tradicional');
	intro_dis = $('#intro_disruption');
	
	vela = $('#luz');
	
	sombra = $('#sombra');
	sombra2 = $('#sombra2');
	pfinal = $('#pantallafinal');
	
	TweenLite.to(cabeza_monster, 0, {x:-200});
	TweenLite.to(cuerpo_monster, 0, {x:-200});
	
	control="activo";
	TweenLite.to(tit_tra, 0, {alpha:0});
	TweenLite.to(tit_dis, 0, {alpha:0});
	
	/*animamos las luces*/
	TweenLite.to(luzroja, 0, {alpha:0});
	TweenLite.to(luzazul, 0, {alpha:0});
	animacionluces();
	

});
/* --------------------------------- Animación Luces ---------------------------------------------- */

function animacionluces(){
		TweenLite.to(luzazul, 0.5, {alpha:0});
		TweenLite.to(luzroja, 0.5, {alpha:1,delay:1});
		TweenLite.to(luzroja, 0.5, {alpha:0,delay:2});
		TweenLite.to(luzazul, 0.5, {alpha:1,delay:3});
		setTimeout(function(){
				animacionluces();
      	},4000);
}
function animacionVela(){
		TweenLite.to(vela, 5, {alpha:0.5});
		TweenLite.to(vela, 5, {alpha:1,delay:5});
		setTimeout(function(){
				animacionVela();
      	},10000);
}
function animacionHumo(){
		TweenLite.to(humillo, 0, {scaleX:0.2,scaleY:0.2,x:0,alpha:0,delay:0});
		TweenLite.to(humillo, 1, {alpha:1,delay:0.2});
		TweenLite.to(humillo, 6, {scaleX:1,scaleY:1,x:+150,delay:0.2,ease:Power2.easeOut});
		TweenLite.to(humillo, 1, {alpha:0,delay:5.5});
		setTimeout(function(){
				animacionHumo();
      	},6500);
}
/* --------------------------------- Boton Izquierda ---------------------------------------------- */

function izqOn() {
	    TweenLite.to(fondo, 1, {x:+200,ease:Power2.easeOut});
		TweenLite.to(vackslash, 1, {x:+205,ease:Power2.easeOut});
		TweenLite.to(mountains, 1, {x:+205,ease:Power2.easeOut});
		TweenLite.to(tit_tra, 0.5, {alpha:1,ease:Power2.easeOut});
		TweenLite.to(tit_dis, 0, {alpha:0});
}
function izqOff(){
		if(control=="activo"){
		TweenLite.to(tit_tra, 1, {alpha:0,ease:Power2.easeOut});
    	TweenLite.to(fondo, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(vackslash, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(mountains, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(tit_dis, 0, {alpha:0});
		}
}

/* --------------------------------- Boton Derecha ---------------------------------------------- */

function dchOn() {
		TweenLite.to(fondo, 1, {x:-200,ease:Power2.easeOut});
		TweenLite.to(vackslash, 1, {x:-205,ease:Power2.easeOut});
		TweenLite.to(mountains, 1, {x:-205,ease:Power2.easeOut});
		TweenLite.to(tit_dis, 0.5, {alpha:1,ease:Power2.easeOut});
		TweenLite.to(tit_tra, 0, {alpha:0});
}
function dchOff(){
		if(control=="activo"){
		TweenLite.to(tit_dis, 1, {alpha:0,ease:Power2.easeOut});
		TweenLite.to(fondo, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(vackslash, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(mountains, 1, {x:0,ease:Power2.easeOut});
		TweenLite.to(tit_tra, 0, {alpha:0});
		}
}
/*----------------- ver u ocultar sombra ------------------------*/

function VerOcultarSombra(valor){
	if(valor=="ocultar"){
		
		TweenLite.to(sombra, 0.5, {alpha:0});
		setTimeout(function(){
				sombra.css("display","none");				
      	},500);
		
	}else if(valor=="ocultar2"){
		
		TweenLite.to(sombra2, 0.5, {alpha:0});
		setTimeout(function(){
				sombra2.css("display","none");				
      	},500);
		
	}else if(valor=="mostrar"){
		
		sombra.css("display","block");
		TweenLite.to(sombra, 0, {alpha:0});
		TweenLite.to(sombra, 0.5, {alpha:1,delay:0.5});
				
	}else if(valor=="mostrar2"){
		
		sombra2.css("display","block");
		TweenLite.to(sombra2, 0, {alpha:0});
		TweenLite.to(sombra2, 0.5, {alpha:1,delay:0.5});
				
	}
}
/*--------------------------- Seleccion de Felicitacion TRADICIONAL -------------------------------*/
function seleccionNormal(){
		control="inactivo";
		TweenLite.to(izq, 0.2, {alpha:0});
		TweenLite.to(dch, 0.2, {alpha:0});
		TweenLite.to(tit_tra, 0.2, {alpha:0});
		
		TweenLite.to(fondo, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		TweenLite.to(vackslash, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		TweenLite.to(mountains, 2, {css:{left:"107vw"},ease:Power2.easeInOut,delay:0.5});
		setTimeout(function(){
				izq.css("display","none");
				dch.css("display","none");
				tit_dis.css("display","none");
				tit_tra.addClass('titcentro');
				TweenLite.to(tit_tra, 0, {y:+1000});
				TweenLite.to(tit_tra, 0.5, {alpha:1,delay:1.5});
				TweenLite.to(tit_tra, 2, {y:0,delay:1.5,ease:Power2.easeInOut});
				
				intro_tra.css("display","block");
				TweenLite.to(intro_tra, 0, {alpha:0});
				TweenLite.to(intro_tra, 0.5, {alpha:1,delay:3.5});
				
				
				
      	},200);
}

/*--------------------------- Seleccion de Felicitacion DISRUPTIVA -------------------------------*/

function seleccionDisruption(){
		
		control="inactivo";
		TweenLite.to(izq, 0.2, {alpha:0});
		TweenLite.to(dch, 0.2, {alpha:0});
		TweenLite.to(tit_dis, 0.2, {alpha:0});
		TweenLite.to(fondo, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		TweenLite.to(vackslash, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		TweenLite.to(mountains, 2, {css:{left:"-7vw"},ease:Power2.easeInOut,delay:0.5});
		setTimeout(function(){
				
				izq.css("display","none");
				dch.css("display","none");
				tit_dis.addClass('titcentro2');
				TweenLite.to(tit_dis, 0, {y:+1000});
				TweenLite.to(tit_dis, 0.5, {alpha:1,delay:1.5});
				TweenLite.to(tit_dis, 2, {y:0,delay:1.5,ease:Power2.easeInOut});
				
				intro_dis.css("display","block");
				TweenLite.to(intro_dis, 0, {alpha:0});
				TweenLite.to(intro_dis, 0.5, {alpha:1,delay:3.5});
				
				monster.css("display","block");
				TweenLite.to(cabeza_monster, 2, {x:10,ease:Power2.easeInOut,delay:3});				
				TweenLite.to(cuerpo_monster, 2, {x:0,ease:Power2.easeInOut,delay:3});
				TweenLite.to(cabeza_monster, 1, {rotation:5,x:+10,ease:Power2.easeInOut,delay:5});
				
      	},200);
}



/*------------- PASOS -------------------------*/
function paso1(wariable){	
	
	
	miformulario.css("display","block");	
	TweenLite.to(miformulario, 0.5, {alpha:1,delay:0.3});

	
	
	if(wariable=='tradicional'){
		
		TweenLite.to(intro_tra, 0.5, {alpha:0});
		
		setTimeout(function(){
				intro_tra.css("display","none");
				paso1_tra.css("display","block");				
				
				TweenLite.to(paso1_tra, 0, {alpha:0});											
				TweenLite.to(paso1_tra, 0.5, {alpha:1,delay:0.5});
				
      	},500);
		
	}else if(wariable=='disruption'){
		VerOcultarSombra("mostrar");
		TweenLite.to(intro_dis, 0.5, {alpha:0});
		TweenLite.to(cabeza_monster, 0.3, {y:+3,delay:0});
		TweenLite.to(cabeza_monster, 0.3, {y:0,delay:0.3});
		TweenLite.to(cabeza_monster, 0.3, {y:+3,delay:0.6});
		TweenLite.to(cabeza_monster, 0.3, {y:0,delay:0.9});
		TweenLite.to(cabeza_monster, 0.3, {y:+3,delay:1.2});
		TweenLite.to(cabeza_monster, 0.3, {y:0,delay:1.5});
		
		setTimeout(function(){
				intro_dis.css("display","none");
				paso1_dis.css("display","block");				
				
				TweenLite.to(paso1_dis, 0, {alpha:0});											
				TweenLite.to(paso1_dis, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	
	}
}

function paso2(wariable){
 if(wariable=='disruption'){
		TweenLite.to(paso1_dis, 0.5, {alpha:0});	
		
		setTimeout(function(){
				paso1_dis.css("display","none");
				paso2_dis.css("display","block");				
				
				TweenLite.to(paso2_dis, 0, {alpha:0});											
				TweenLite.to(paso2_dis, 0.5, {alpha:1,delay:0.5});
				
      	},500);
	}else if(wariable=='alerta'){
		
		TweenLite.to(paso1_tra, 0.5, {alpha:0});	
		TweenLite.to(miformulario, 0.5, {alpha:0});
		
		setTimeout(function(){
				paso1_tra.css("display","none");
				alertaTradicional.css("display","block");				
				
				TweenLite.to(alertaTradicional, 0, {alpha:0,scaleX:0.5,scaleY:0.5});											
				TweenLite.to(alertaTradicional, 1, {alpha:1,scaleX:1,scaleY:1,delay:0.5,ease:Back.easeOut.config (1.7)});
				
      	},500);
	}
}

function cambiaraDisruption(){
	TweenLite.to(alertaTradicional, 0.5, {alpha:0});	
	
		
	setTimeout(function(){
				alertaTradicional.css("display","none");
				miformulario.css("display","none");				
					
     },500);
	 
	TweenLite.to(fondo, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenLite.to(vackslash, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenLite.to(mountains, 2, {css:{left:"-29vw"},ease:Power2.easeInOut,delay:1});
	TweenLite.to(tit_tra, 2, {y:+1000,delay:0.5,ease:Power2.easeInOut});
	setTimeout(function(){
				tit_dis.addClass('titcentro2');					
				tit_dis.css("display","block");
				
				TweenLite.to(tit_dis, 0, {y:+1000});
				TweenLite.to(tit_dis, 0.5, {alpha:1,delay:0});
				TweenLite.to(tit_dis, 2, {y:0,delay:0,ease:Power2.easeInOut});
				
				intro_dis.css("display","block");
				TweenLite.to(intro_dis, 0, {alpha:0});
				TweenLite.to(intro_dis, 0.5, {alpha:1,delay:2});
				
				monster.css("display","block");
				TweenLite.to(cabeza_monster, 2, {x:10,ease:Power2.easeInOut,delay:3});				
				TweenLite.to(cuerpo_monster, 2, {x:0,ease:Power2.easeInOut,delay:3});
				TweenLite.to(cabeza_monster, 1, {rotation:5,x:+10,ease:Power2.easeInOut,delay:5});
	 },1000);
		
	
}
/*------ mostrar y ocultar campos del formulario ------------------------*/
function mostrar(miid){
	identificador=$('#'+miid);
	identificador.css("display","block");
	TweenLite.to(identificador, 0, {alpha:0});											
	TweenLite.to(identificador, 0.5, {alpha:1,delay:0.5});
}
function ocultar(miid){
	identificador=$('#'+miid);	
	TweenLite.to(identificador, 0.5, {alpha:0});	
	setTimeout(function(){
				identificador.css("display","none");
				
    },500);										

}

/*----------------------enviar capsula------------------------------*/
function EnviarAvion(){
	VerOcultarSombra("ocultar");
	TweenLite.to(miformulario, 0.4, {alpha:0});
	
	setTimeout(function(){
		miformulario.css("display","none"); 
		procesando.css("display","block"); 
		capsula.css("display","block");
		animacionVela();
		animacionHumo();
		TweenLite.to(capsula, 0, {scaleX:0,scaleY:0,delay:0});
		TweenLite.to(capsula, 0.7, {scaleX:1,scaleY:1,alpha:0.5,ease:Back.easeOut.config (1.7),delay:0.1});
		TweenLite.to(procesando, 0, {scaleX:0,scaleY:0,delay:0});
		TweenLite.to(procesando, 0.7, {scaleX:1,scaleY:1,ease:Back.easeOut.config (1.7),delay:0.1});
		TweenLite.to(barra, 0, {css:{left:"-30vw"},delay:0});
		TweenLite.to(barra,6, {css:{left:"-5vw"},delay:0.8, ease:Power0.easeNone});
		TweenLite.to(procesando, 1, {scaleX:0,scaleY:0,ease:Back.easeIn.config (1.7),delay:5.8});		
    },400);
	setTimeout(function(){
		procesando.css("display","none"); 
		
		$("#modulo2").css("display","block");
		$("#modulo3").css("display","block"); 
		$("#modulo4").css("display","block");
		$("#modulo5").css("display","block");
		$("#modulo6").css("display","block"); 
		VerOcultarSombra("ocultar");
		buzonmask.css("display","block");
		TweenLite.to(capsula, 0.7, {scaleX:0.07,scaleY:0.07,alpha:1,ease:Back.easeOut.config (1.7),delay:0});
		TweenLite.to(capsula, 3, {rotation:360,delay:0, ease:Power2.easeIn});		
		TweenLite.to(capsula, 1, {css:{top:"3vw"},ease:Power2.easeOut,delay:0.1});
		TweenLite.to(capsula, 2, {css:{top:"37vw"},scaleX:0.8,scaleY:0.8,ease:Power4.easeIn,delay:1});	
    },6800);
	setTimeout(function(){		
		$('html, body').stop().animate({scrollTop: $("#modulo4").offset().top }, 12000); 

		setTimeout(function(){		
			capsula.css("display","none");
			buzonmask.css("display","none");
			$( "div.micanasta" ).html( "<img src='http://tbwadisruptionxmas.com/images/modulo3/canasta.gif'>" );
			
    	},6000);
			
    },8500);

	
	
	setTimeout(function(){		
		animacionModulo4();
			
    },18500);
	
}


function animacionModulo4(){
	$("#canasta").css("display","none");
	TweenLite.to(capsula2, 3, {rotation:720, ease:Power2.easeIn});
	TweenLite.to(capsula2, 1.5, {css:{top:"12vw",left:"56vw"},ease:Power4.easeIn});
	TweenLite.to(capsula2, 4, {css:{top:"46vw",left:"54vw"},ease:Power4.easeOut,delay:1.5});
	TweenLite.to(flasheo, 0.1, {alpha:0.15,delay:3.5});
	TweenLite.to(flasheo, 0.1, {alpha:0,delay:3.6});
	TweenLite.to(flasheo, 0.1, {alpha:0.2,delay:3.7});
	TweenLite.to(flasheo, 0.1, {alpha:0,delay:3.8});
	TweenLite.to(flasheo, 0.5, {alpha:1,delay:3.9});
	setTimeout(function(){		
		$('html, body').stop().animate({scrollTop: $("#modulo5").offset().top }, 0); 	
    },4400);
	setTimeout(function(){		
		animacionModulo5();	
    },4500);
}

function animacionModulo5(){
	
	TweenLite.to(flasheo, 0, {alpha:0,delay:0});
	TweenLite.to(flasheo2, 1, {alpha:0,delay:0});
	TweenLite.to(capsula3, 0, {scaleX:0,scaleY:0});
	TweenLite.to(capsula3, 2, {scaleX:1,scaleY:1,delay:0.2});
	TweenLite.to(astronauta, 5, {css:{top:"-4vw",left:"28vw"},ease:Power1.easeOut});
	TweenLite.to(capsula3, 5, {css:{top:"26vw",left:"52vw"},ease:Power0.easeNone});
	TweenLite.to(capsula3, 1, {css:{top:"30vw",left:"51vw"},ease:Power0.easeNone,delay:5});
	TweenLite.to(capsula3, 10, {rotation:720,ease:Power1.easeIn,delay:5});
	TweenLite.to(capsula3, 2, {css:{top:"47vw",left:"44vw"},ease:Power0.easeNone,delay:6});
	TweenLite.to(capsula3, 1, {scaleX:0,scaleY:0,delay:7});
	setTimeout(function(){		
		astronauta.addClass("animaastro");
    },5000);
	setTimeout(function(){		
		astronauta.removeClass("animaastro").addClass("pararastro");
    },2500);

	setTimeout(function(){		
		$('html, body').stop().animate({scrollTop: $("#modulo6").offset().top }, 3000); 	
    },8500);
	setTimeout(function(){		
		animacionModulo6();	 
		capsula3.css("display","none");
		capsula2.css("display","none");
		$("sombrero").css("display","none");			
    },11500);
}

function animacionModulo6(){
	TweenLite.to(capsula4, 4, {rotation:900, ease:Power2.easeIn});
	TweenLite.to(capsula4, 2, {css:{left:"45vw",top:"18vw"},delay:0.1,ease:Power2.easeIn});
	TweenLite.to(capsula4, 2, {css:{left:"48vw",top:"40.5vw"},delay:2.1,ease:Power2.easeOut});
	setTimeout(function(){		
		capsula4.css("display","none");
		tapacofre.css("display","none"); 
		animacioncofre.removeClass("cofre").addClass("cofreani");
    },4100);
	TweenLite.to(animacioncofre, 10, {css:{top:"34vw"},delay:5,ease:Power2.easeOut});
	setTimeout(function(){	
		VerOcultarSombra("mostrar2");	
		pfinal.css("display","block");
		TweenLite.to(pfinal, 0, {alpha:0,delay:0});
		TweenLite.to(pfinal, 0.5, {alpha:1,delay:0.2});
		
    },10000);

}

function quitafinal(moment){
	/*VerOcultarSombra("ocultar2");
	TweenLite.to(pfinal, 0.5, {alpha:0,delay:0});
	setTimeout(function(){	
		pfinal.css("display","none");
		navegador.css("display","block");
		TweenLite.to(navegador, 0, {alpha:0,delay:0});
		TweenLite.to(navegador, 0.5, {alpha:1,delay:0.1});		
        },700);
        */
        $("#momentos").val(moment);
        enviaaa();
}
function todook(){

	TweenLite.to(pfinal, 0.5, {alpha:1,delay:0});
	setTimeout(function(){	
		pfinal.css("display","block");
		navegador.css("display","block");
		TweenLite.to(navegador, 0, {alpha:0,delay:0});
		TweenLite.to(navegador, 0.5, {alpha:1,delay:0.1});		
        },700);
        
}
//VerOcultarSombra("ocultar");
/*
rueda = $('#rueda');
TweenLite.to(rueda, 6, {rotation:360,delay:0, ease:Power2.easeInOut});	*/

/*-----------------------------*/

// funcion del boton de audio on/off -----------------------------------
	var controlSonidos=1;
	//musica = $('#musica');
	
function controlSonido(){
	var sonidoon = $('#sonidoon');
	var sonidooff = $('#sonidooff');

	
	if(controlSonidos==1){
		//quitas el sonido
		controlSonidos=0;
		sonidoon.css("display","none");
		sonidooff.css("display","block");
		musica.volume=0;
		musica.pause();
		
	}else{
		//ponemos el sonido
		controlSonidos=1;
		sonidoon.css("display","block");
		sonidooff.css("display","none");
		musica.volume=1;
		musica.play();
	}
		
}
var controlNavegador=6;
function GoTo(numero){
/*	controlNavegador	*/
	$("#circulo"+controlNavegador).removeClass("marcado");
	$("#circulo"+numero).addClass("marcado");
	$('html, body').stop().animate({scrollTop: $("#modulo"+numero).offset().top }, 2000);
	controlNavegador=numero;
	//alert("Voy al "+numero+" tiempo:"+temporizador); 
	
}
