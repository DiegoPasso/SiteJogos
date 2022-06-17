const res = require('express/lib/response')
const conexao = require('../controllers/infraestrutura/conexao')

class produto {

    adiciona(produto) {
        const sql = 'INSERT INTO produtos SET ?'

        conexao.query(sql, produto, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    getImg(res, img) {

        var path = ('C:/Users/Diego/Projeto de Node e React - Usabilidade/Backend/imagem/' + img)

        res.sendFile(path)

    }

    getProdById(res, id) {

        const sql = 'select * from produtos where id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(resultados)
            } else {
                res.status(200).json(resultados)
            }
        })

    }

    getProd(res) {
        const sql = 'select * from produtos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(resultados)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

}

module.exports = new produto