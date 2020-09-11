interface Remuneravel {
    remuneravel(): number;
}

class ContratoClt implements Remuneravel {
    public remuneravel(): number { return 0}
}
class ContratoPJ implements Remuneravel {
    public remuneravel(): number { return 0}
}
class ContratoEstagio implements Remuneravel {
    public remuneravel(): number { return 0}
}

class FolhaPagamento {
    protected saldo: number = 0;

    public calcular( contrato: Remuneravel){
        this.saldo = contrato.remuneravel();
    }
}