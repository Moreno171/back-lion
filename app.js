    /*
 * Autor: Moreno / Murillo
 * Data: 03/04/2023
 * Versão: 1.0
 * 
 */

 //  Import das dependencias para criar a API 

// Responsavel pelas requisições
const express = require('express')

// Responsavel pelas permissões das requisições
const cors = require('cors')

// Responsavel pela manipulação do body da requisição
const bodyParser = require('body-parser')

// Cria um objeto com as informações da classe express 
const app = express()

// Define as permissões no header da API
app.use((request, response, next) => {
    // Permite gerenciar a origem das requisições da API
    // * - Significa que a API será publica 
    // IP - Se colocar o IP, a API somente responderá para aquela máquina 
    response.header('Access-Control-Allow-Origin', '*')

    // Permite gerenciar quais verbos (metodos) poderão fazer requisições 
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    // Ativa no cors das requisições as permissões estabelecidas
    app.use(cors())

    next()
})

    //endPoint
    app.get('/v1/lion-school/cursos', cors(), async function (response, next){
        
    })