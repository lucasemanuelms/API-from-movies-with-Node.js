const express = require('express')
let router = express.Router()

let filmes = [
    {
        nome: "Senhor dos Anéis - A Sociedade do Anél",
        ano: 2001,
        categoria: "Ficção e Aventura"
    },
    {
        nome:"Harry Potter e a Pedra Filosofal",
        ano: 2001,
        categoria: "Ficção e Aventura"
    },
    {
        nome: "Piratas do Caribe",
        ano: 2003,
        categoria: "Ficção e Aventura"
    },
    {
        nome: "Invocação do Mal",
        ano: 2013,
        categoria: "Terror"
    },
    {
        nome: "Annabelle",
        ano: 2014,
        categoria: "Terror"
    },
    {
        nome: "Simplesmente Acontece",
        ano: 2014,
        categoria: "Romance"
    },
    {
        nome: "Resgate",
        ano: 2020,
        categoria: "Ação"
    }
]

function filmesAcao(filme){
    return filme.categoria == "Ação"
}

function filmesTerror(filme){
    return filme.categoria == "Terror"
}

function filmesFicAven(filme){
    return filme.categoria == "Ficção e Aventura"
}

router.get("/todos", (req, res)=>{
    res.json(JSON.stringify(filmes))
})

router.get("/acao", (req, res)=>{
    let acao = filmes.filter(filmesAcao)
    res.json(JSON.stringify(acao))
})

router.get("/terror", (req, res)=>{
    let terror = filmes.filter(filmesTerror)
    res.json(JSON.stringify(terror))
})

router.get("/ficcaoEaventura", (req, res)=>{
    let ficAven = filmes.filter(filmesFicAven)
    res.json(JSON.stringify(ficAven))
})

module.exports = router;