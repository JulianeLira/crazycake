class CupCake {
    constructor(massa, recheio, cobertura){
        this.massa = massa;
        this.recheio = recheio;
        this.cobertura = cobertura;
    }
    salvar(){
        var bolo = this.massa+"|"+this.recheio+"|"+this.cobertura;
        sessionStorage.setItem("Cupcake", bolo);
    }
}
