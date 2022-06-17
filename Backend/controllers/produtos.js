const { json } = require('express/lib/response');
const produtos = require('../models/produtos2')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './imagem/')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage});

module.exports = app => {

    app.get('/produtos', (req, res) => {
        produtos.getProd(res);
    })

    app.post('/upImg', upload.single('imagem'),(req,res)=>{

        console.log(req.file)

        res.send("armazenado com sucesso")

    })

    app.post('/produtos', (req, res) => {

        const produto = req.body

        produtos.adiciona(produto)

        res.send('Post produto')
    })

    app.get('/produtosPage', (req, res) => {
        var id = req.query.id
        produtos.getProdById(res,id);
    })

    app.get('/getI', (req, res) => {
        
        var img = req.query.img
        produtos.getImg(res, img)

    })

}
