interface Ave {
    comer(): void;
}

interface AvesQueVoam  extends Ave{
    voar(): void;
}

class Papagaio implements AvesQueVoam {
    public comer(){}
    public voar(){}
}

class Pinguin implements Ave {
    public comer(){}
}

