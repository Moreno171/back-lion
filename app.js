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
const funcao = require('./json/function.js')
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

//endPoint que recupera uma lista de todos os cursos oferecidos pela escola
app.get('/v1/lion-school/cursos', cors(), async function (request, response, next) {

    //chama a função que retorna os cursos
    let todosOsCursos = funcao.getCursos()
    //Tratamento para validar se a função realizou o processamento
    if (todosOsCursos) {
        response.json(todosOsCursos)
        response.status(200)
    } else {
        response.status(500)
    }
})

//endPoint que recupera uma lista de todos os alunos matriculados na escola
app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {

    let jsonA = {}

    //chama a função que retorna os alunos
    let todosOsAlunos = funcao.getListaDosAlunos()

    //Tratamento para validar se a função realizou o processamento
    if (todosOsAlunos) {
        jsonA = todosOsAlunos
        response.status(200)
    } else {
        response.status(500)
    }

    response.json(jsonA)
})

// 	endPoint para recupera uma lista de todos os alunos matriculados em um dos cursos.
app.get('/v1/lion-school/alunos/matricula', cors(), async function (request, response, next) {

    let numeroDaMatricula = request.query.matricula

    if (numeroDaMatricula == '' || numeroDaMatricula == undefined || isNaN(numeroDaMatricula)) {
        statusCode = 400
        dadosMatricula.message = "Não é possivel processar a requisição pois esse não e o numero correto da matricula"

    } else {
        //chama a função que filtra pela Matricula
        let aluno = funcao.getMatricula(numeroDaMatricula)
        //Valida se houve retorno válido da função
        if (aluno) {
            statusCode = 400
            dadosMatricula = aluno
        } else {
            statusCode = 400

        }
    }
    response.status(statusCode)
    response.json(dadosMatricula)
})
// 	endPoint para recupera uma lista de todos os alunos com um curso específico.
app.get('/v1/lion-school/alunos/curso', cors(), async function (request, response, next) {

    let siglaDoCurso = request.query.sigla

    if (siglaDoCurso == '' || siglaDoCurso == undefined) {
        statusCode = 400
        dadosDoCurso.message = "Não é possivel processar a requisição pois a sigla não foi escrita corretamente"
    } else {
        let curso = funcao.getcursoEspecifico(siglaDoCurso)

        if (curso) {
            statusCode = 400
            dadosDoCurso = curso
        } else {
            statusCode = 400

        }
    }
    response.status(statusCode)
    response.json(dadosDoCurso)
})
// 	
// app.get('/v1/lion-school/alunos/status', cors(), async function (request, response, next) {

//     let statusDoAluno = request.query.status
//     const dadosStatus = {}
//     const statusCode = 200 

//     console.log(statusDoAluno);
//     if (statusDoAluno == '' || statusDoAluno == undefined) {
//         //dadosStatus.message = "Não é possivel processar a requisição pois o status não está correto"
//         console.log('entrou');
//     } else {
//         let alunoStatus = funcao.getStatusAluno(statusDoAluno)

//         if (alunoStatus) {
//             // statusCode = 200
//             dadosStatus = alunoStatus
//         } else {
//             // statusCode = 400

//         }
//     }
//     response.status(statusCode)
//     response.json(dadosStatus)

// })
// endPoint para recupera uma lista de todos os alunos com o status específico.
app.get('/v1/lion-school/alunos/status', cors(), async function (request, response, next) {

    let statusDoAluno = request.query.status

    if (statusDoAluno == '' || statusDoAluno == undefined) {
        statusCode = 400
        dadosStatus.message = "Não é possivel processar a requisição pois a sigla não foi escrita corretamente"
    } else {
        let alunoStatus = funcao.getStatusAluno(statusDoAluno)

        if (alunoStatus) {
            statusCode = 400
            dadosStatus = alunoStatus
        } else {
            statusCode = 400

        }
    }
    response.status(statusCode)
    response.json(dadosStatus)
})




//  Permite carregar os endpoint criados e aguadar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080');
})

