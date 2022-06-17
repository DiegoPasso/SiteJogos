const produto = require("../../models/produtos2")
const ProdutosIniciais = require("../../models/registros")
const conexao = require('../infraestrutura/conexao')

class Tabelas {
    
    init(conexao) {
        this.conexao = conexao
 
        this.criarProdutos()
    }

    inserirProdutosIniciais(codigo, prod){
        var query = 'select codigo_produto from produtos where codigo_produto = ?'

        this.conexao.query(query,codigo,(erro, resultado) => {

            if(resultado.length == 0){
                produto.adiciona(prod)
                console.log(prod.codigo_produto + " foi inserido")
            }else{
                console.log(resultado)
            }

        })
    }
 
    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, preco float(4,2) NOT NULL, genero varchar(50) NOT NULL, descricao varchar(255) NOT NULL, tipo_plataforma varchar(50) NOT NULL, imagem varchar(100), codigo_produto varchar(10) NOT NULL UNIQUE, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {

                ProdutosIniciais.lista.forEach(prod =>{
                    this.inserirProdutosIniciais(prod.codigo_produto, prod)
                })

                console.log('Tabela de Produtos criada')
            }
        })

    }
}
module.exports = new Tabelas
