
function ler1(){
    //Botão Submit1
    var confere = false; 
        var radios = document.getElementsByName("lider1");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                confere = true;
                console.log("Massa: " + radios[i].value)
                var rd_vl_mss = (radios[i].value);
            }
        }  
        var radios = document.getElementsByName("lider2");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                confere = true;
                console.log("Recheio: " + radios[i].value);
                var rd_vl_rch = (radios[i].value);
            }
        }
        var radios = document.getElementsByName("lider3");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                confere = true;
                console.log("Cobertura: " + radios[i].value);
                var rd_vl_cb = (radios[i].value);
            }
        }

        var bolo = new CupCake(rd_vl_mss, rd_vl_rch, rd_vl_cb);
        bolo.salvar();    

         if (confere == false) {
            alert("Insira as Informações")
        }else{
            window.alert("Informações Enviadas");
            open("Visualizar.html");
        }
};


function most(el){

        
    
        var display = document.getElementById(el).style.display;
        if(display == "block")
            document.getElementById(el).style.display = 'none';
        else
            document.getElementById(el).style.display = 'block';

        var botao = document.getElementById('view').style.display;
        if(botao == "block")
            document.getElementById('view').style.display = 'none';

        else
           document.getElementById('cmp_btn').style.display = 'block';
           document.getElementById('view').style.display = 'none';

        var pegar = sessionStorage.getItem("Cupcake");
        var separar = pegar.split("|");
        document.getElementById("massa").value = separar[0];
        document.getElementById("recheio").value = separar[1];
        document.getElementById("cobertura").value = separar[2];
};

function compra(){
    window.alert("Seu pedido foi enviado !!! \n Aguarde até 5 dias uteis.")
}