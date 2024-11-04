function id( el ){
    return document.getElementById( el );
}

let total = -11.00;

function menos(numero , valor){
    if( id('format_'+numero).value>0 ){
        id('format_'+numero).value = parseInt( id('format_'+numero).value )-1;
        total -= valor;
        id('total').value = total;
        id('sub').value = total+11;
    }       
}

function mais(numero , valor){
    id('format_'+numero).value = parseInt( id('format_'+numero).value )+1;
    total += valor;
    id('sub').value = total+11.00;
    id('total').value = total;
}


window.onload = function(){
    id('mais_1').onclick = function(){
        mais(1, 17);
    }
    id('menos_1').onclick = function(){
        menos(1, 17);         
    }

    id('mais_2').onclick = function(){
        mais(2, 9);
    }
    id('menos_2').onclick = function(){
        menos(2, 9);         
    }

    id('mais_3').onclick = function(){
        mais(3, 16);
    }
    id('menos_3').onclick = function(){
        menos(3, 16);         
    }
}       