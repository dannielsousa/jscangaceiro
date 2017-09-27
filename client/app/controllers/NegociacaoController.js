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
    
            let data = new Date(this._inputData.value.replace(/-/g, '-'));
            console.log(data);
            let negociacao = new Negociacao(
                this._inputData.value,
                parseInt(this._inputQuantidade.value),
                parseFloat(this._inputValor.value)
            );

            console.log(negociacao);
    
        }
    }