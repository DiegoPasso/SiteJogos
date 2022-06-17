
class modProduto{

    produto1 ={
        "nome": "Horizon Zero Dawn",
        "preco": 49.99,
        "genero":"RPG",
        "descricao":"Ação pós-apocalíptico em um mundo aberto",
        "tipo_plataforma": "PC/PS4",
        "imagem": "Horizon.jpg",
        "codigo_produto": "A1"
    };

    produto2 ={
        "nome": "Death Stranding",
        "preco": 39.99,
        "genero":"Luta/Aventura/Tiro",
        "descricao":"Mundo Apocalíptico",
        "tipo_plataforma": "PC/PS4",
        "imagem": "DeathStranding.jpg",
        "codigo_produto": "A2"
    };
    
    produto3= {
        "nome": "Overwatch",
        "preco": 49.99,
        "genero":"FPS",
        "descricao":"Shooter em equipe",
        "tipo_plataforma": "PC/PS4/Xbox/Switch",
        "imagem": "overwatch.png",
        "codigo_produto": "A3"
    };
    produto4 = {
        "nome": "God of War",
        "preco": 49.99,
        "genero":"Ação-Aventura",
        "descricao":"A história segue Kratos, um guerreiro espartano que foi levado a matar sua família por seu antigo mestre, o deus da guerra Ares.",
        "tipo_plataforma": "PC/PS4",
        "imagem": "GodOfWar.jpg",
        "codigo_produto": "A4"
    };
    produto5 = {
        "nome": "Valorant",
        "preco": 00,
        "genero":"FPS",
        "descricao":"FPS em equipe tático",
        "tipo_plataforma": "PC",
        "imagem": "Valorant.png",
        "codigo_produto": "A5"
    };
    produto6 = {
        "nome": "Lost Ark",
        "preco": 00,
        "genero":"MMORPG",
        "descricao":"MMORPG hack'n'slash",
        "tipo_plataforma": "PC",
        "imagem": "LostArk.jpg",
        "codigo_produto": "A6"
    };
     produto7 = {
        "nome": "Haven",
        "preco": 24.99,
        "genero":"RPG/Aventura",
        "descricao":" Dois jovens apaixonados largam tudo e fogem para um planeta perdido para ficar juntos.",
        "tipo_plataforma": "PC/PS4/SWITCH/XBOX",
        "imagem": "Haven.jpg",
        "codigo_produto": "A7"
      };
     produto8 ={
        "nome": "The Last of Us",
        "preco": 47.99,
        "genero":"Ação/Aventura/Sobrevivencia",
        "descricao":"se passa em um mundo pós-apocalíptico onde a sociedade desmoronou depois de uma pandemia",
        "tipo_plataforma": "PS4",
        "imagem": "LastOfUs.png",
        "codigo_produto": "A8"
     };
     produto9 ={
        "nome": "It takes two",
        "preco": 39.99,
        "genero":"Aventura/Plataforma",
        "descricao":"Preso em um mundo fantástico, o casal é relutantemente desafiado a salvar seu relacionamento conturbado pelo guru do amor Dr. Hakim.",
        "tipo_plataforma": "PC/PS4/SWITCH/XBOX",
        "imagem": "ItTakesTwo.jpg",
        "codigo_produto": "A9"
     };
     produto10 = {
        "nome": "Apex Legends",
        "preco": 00,
        "genero":"FPS/BattleRoyale",
        "descricao":"Um jogo de Battle Royale focado em personagens e esquadrão, em que o trabalho em equipe é a diferença entre vitória e derrota.",
        "tipo_plataforma": "PC",
        "imagem": "Apex.jpg",
        "codigo_produto": "A10"
     };

    lista = [this.produto1 ,this.produto2, this.produto3, this.produto4,this.produto5, this.produto6, this.produto7, this.produto8, this.produto9, this.produto10]
}

module.exports = new modProduto


