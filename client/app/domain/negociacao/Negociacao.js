class Negociacao {
    
    
    /*
    construtor normal
    constructor(data, quantidade, valor) {

        /*
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    
    contrutor com objeto assign (objetos literais)
    constructor(data, quantidade, valor) {
        Object.assign(this, { _data: new Date(data.getTime()), _quantidade: quantidade, _valor: valor });
        Object.freeze(this);
    }
    */

    /*Construtor com objetos literais
        Quando o nome da propriedade tem o mesmo nome da variável que esrá atribuiída como seru valor, podemos declarar nosso objeto desta forma:
    */

    contructor(_data, _quantidade, _valor) {

        //Object.assign(this, { _data: new Date(_data.getTime()), _quandiade, _valor }); Para melhorar a legibilidade, todapropriedade que precisa 
        //ser alterada antes da atribução, sera atribuida individualmente.
        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);
        
    }


    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}