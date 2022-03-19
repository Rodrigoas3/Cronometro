"use strict"


var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;// Quantos milesimos valem 1 segundo ?
var cron;

//Inicia o temporizador

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variveis 
function pause() {
    clearInterval(cron);

}

//Para o temporizador e limpa as variáveis 
function stop(){
    clearInterval(cron);
        hh = 0;
        mm = 0;
        ss = 0;

        document.getElementById('counter').innerText = '00:00:00';

}

//Faz a contagem do tempo e exibição
function timer() {

    ss++; //

    if (ss == 59){
        ss = 0;
        mm++;

        if (mm == 59){
            mm = 0;
            hh++;




        }
            



    }
   

//cria uma variavel com valor tratado HH:MM:SS
var format = (hh < 10 ? '0' + hh:hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

//Insere o valor tratado no elemento counter
document.getElementById('counter').innerText = format;

//Retorna o valor tratado
return format;


}