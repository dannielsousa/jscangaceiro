class NegociacaoController {

    /*

    adiciona(event) {
        event.preventDefault();

        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));
    }

    Para melhorara performance, adicionaremos o  constructor e moveremos  os  elementos  de  entrada  para  dentro  dele. 
    Mas  em vez  de  criarmos  variáveis,  criaremos  propriedades  em   this.
    Sendo assim, a busca pelos elementos do DOM só serão realizadas uma única vez no  constructor() , e não mais a cada chamada do método  adiciona()
    */

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        /*
        Desta forma, damos um replace no item - em , fazendo um array separado por virgula. Criando um objeto"
        let data = new Date(this._inputData.value.replace(/-/g, ','));
        
        Desta forma, damos um split dividindo a data onde ele encontrar -. Assim Formamos um array.
        let data = new Date(this._inputData.value.split('-'));
        
        A partir do ES2015 (ES6), podemos utilizar o spread operator, que  permite  tratar  cada  elemento  do  array  como  um  elemento individualmente.
        let data = new Date(...this._inputData.value.split('-'));
        
        No entanto, quando passamos o array, o mês esta errado, pois ele para pegar o mes certo, tem que pegar uma posição antes no array, para isso fazemos:
        
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map(function(item,indice){
                if (indice == 1)
                    return item - 1;
                return item;
            }) 
        ); 
        
        Reescrevendo o código, com menas linhas

        let data = new Date(
            ...this._inputData.value
            .split(',')
            .map(function(item,indice){
                return item - indice % 2; 
            })
        )
        
        Podemos ainda reescrever com arrow function
        Quando nossa arrow function possui duas ou mais instruções, somos obrigados a utilizar o bloco  {} , 
        inclusive a adicionar  um  return .  No  entanto,  como  nosso  código  possui  apenas  uma
        instrução, é permitido remover o bloco  {} , inclusive a instrução  return .  Isso  pois  ela  é  
        adicionada  implicitamente  pela  arrow function. 
        
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map(function(item,indice){
                return item - indice % 2; 
            })
        )
        */

        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        console.log(negociacao.data);
    }
}