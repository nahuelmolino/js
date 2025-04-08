class Computadora{
    //constructor
        constructor(idComputadora,nombre,monitor,teclado,raton,contadorCoputadoras){
            this.idComputadora= idComputadora;
            this.nombre=nombre;
            this.monitor=monitor;
            this.teclado= teclado;
            this.raton=raton
            this.contadorCoputadoras=contadorCoputadoras
        }

    //Método
    toString(entrada){
        return entrada.toString();
    }
    //tengo que crear la clase Monitor.

}

class Monitor extends Computadora {
    constructor(idMonitor,marca,tamanio,contadorMonitores){
        this.idMonitor= idMonitor;
        this.marca= marca;
        this.tamanio=tamanio;
        this.contadorMonitores= contadorMonitores
    }

    get idMonitor{
        return this.idMonitor
    }

}

class Raton extends DispositivoEntrada {
    constructor(idRaton,contadorRatones){
        this.idRaton=idRaton;
        this.contadorRatones= contadorRatones
    }
    toString(entrada){
        entrada.toString();
    }
}

class Teclado extends DispositivoEntrada {
    constructor(idTeclado,contadoTeclado){
        this.idTeclado=idTeclado;
        this.contadoTeclado= contadoTeclado
    }
    toString(entrada){
        entrada.toString();
    }
}


class Orden {
    constructor(_idOrden,_computadoras,contadorORdenes)
    {
        this._idOrden=_idOrden;
        this.Computadora =[];
        this.contadorORdenes =contadorORdenes;
    }
}

class DispositivoEntrada{
    constructor (tipoEntrada, marca){
        this.tipoEntrada=tipoEntrada;
        this.marca = marca;   
    }

    get tipoEntrada(){
        return this.tipoEntrada;
    }
    get marca(){
        return this.marca;
    }

    set tipoEntrada(){
        return this.tipoEntrada;
    } 
    set marca(){
        return this.marca;
    }


}
//enviar link
//raton y telcado extens de dispositivo entrada.
//monitor es calse que no herada de dispositivo entrada
//creamos clase computadora.
//relacion de agregacion le asociamos la instancia de la clase 
//responsabilidad de crear la calse Computadora
raton y teclado 

