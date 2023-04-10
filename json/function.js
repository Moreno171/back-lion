const cursosJson = require('./cursos.js')
const estudante = require('./alunos.js')
 
function getCursos (){

    let cursosJ = {}
    let array = []

  cursosJson.cursos.forEach(function(cursosFill){

    let json = {
        icon:cursosFill.icone,
         nome:cursosFill.nome,
         sigla:cursosFill.sigla,
         carga:cursosFill.carga
        }

         array.push(json)   
    })

    cursosJ.curso =  array

    return cursosJ
}
// console.log(getCursos());


const getListaDosAlunos = function(){
    const estudanteJson = {}
    const estudanteArray = []
     
    
    let status = false

    estudante.alunos.forEach (function(infoEstudante){
        status = true
        const infoEstudanteJson = {
            foto: infoEstudante.foto,
            nome: infoEstudante.nome,
            matricula: infoEstudante.matricula,
            sexo: infoEstudante.sexo
        }
        infoEstudante.curso.forEach(function(infoCurso){
            const infoCursoArray = []
            const infoCursoJson = {
                
                nome:infoCurso.nome,
                sigla: infoCurso.sigla,
                icone: infoCurso.icone,
                carga: infoCurso.carga,
                conclusao: infoCurso.conclusao

            }
            infoCursoArray.push(infoCursoJson)
            infoEstudanteJson.curso = infoCursoArray
            infoCursoJson.status = infoEstudante.status

            const infoDisciplinaArray = []
            infoCurso.disciplinas.forEach(function(infoDisciplina){
                const infoDisciplinaJson = {
                    nome: infoDisciplina.nome,
                    carga: infoDisciplina.carga,
                    media: infoDisciplina.media,
                    status: infoDisciplina.status
                }

                infoDisciplinaArray.push(infoDisciplinaJson)
                infoCursoJson.disciplinas = infoDisciplinaArray
            })

        })
        estudanteArray.push(infoEstudanteJson)
        

    })
    estudanteJson.alunos = estudanteArray
    if(status){
        return estudanteJson
    }else{
        return status
    }
    


}
console.log(getListaDosAlunos())


const getMatricula = function(matricula){
    const estudanteJson = {}
    const estudanteArray = []

    let status = false

    estudante.alunos.forEach(function(infoEstudante){
        if(infoEstudante.matricula == matricula){
            status = true
            const infoEstudanteJson = {
                foto: infoEstudante.foto,
                nome: infoEstudante.nome,
                matricula: infoEstudante.matricula,
                sexo: infoEstudante.sexo
    
            }
            infoEstudante.curso.forEach(function(infoCurso){
                const infoCursoArray = []
                const infoCursoJson = {
                    nome: infoCurso.nome,
                    sigla: infoCurso.sigla,
                    icone: infoCurso.icone,
                    carga: infoCurso.carga,
                    conclusao: infoCurso.conclusao
                }
                infoCursoArray.push(infoCursoJson)
                infoEstudanteJson.curso = infoCursoArray
                infoEstudanteJson.status = infoEstudante.status
    
                const infoDisciplinaArray = []
                infoCurso.disciplinas.forEach(function(infoDisciplina){
                    const infoDisciplinaJson = {
                        nome:infoDisciplina.nome,
                        carga:infoDisciplina.carga,
                        media:infoDisciplina.media,
                        status:infoDisciplina.status
                    }
                    infoDisciplinaArray.push(infoDisciplinaJson)
                    infoCursoJson.disciplinas = infoDisciplinaArray
                })
            })
            estudanteArray.push(infoEstudanteJson)
        }
       
    })
    estudanteJson.alunos = estudanteArray
    if(status){
        return estudanteJson
    }else{
        return status
    }
}
// console.log(getMatricula('20151001024'));

const getcursoEspecifico = function($cursoSigla){
    const todosAlunosJson = {}
    const todosAlunosArray = []
    let status = false

    estudante.alunos.forEach(function($curso){
        $curso.curso.forEach(function($data){
            if($cursoSigla.toUpperCase() == $data.sigla.toUpperCase()){
                status = true
                infoEstudante = {
                    foto: $curso.foto,
                    nome: $curso.nome,
                    matricula: $curso.matricula,
                    sexo: $curso.sexo
                }
                $curso.curso.forEach(function($cursoData){
                    infoCursoArray = []
                    infoCurso = {
                        nome: $cursoData.nome,
                        sigla: $cursoData.sigla,
                        icone: $cursoData.icone,
                        carga: $cursoData.carga,
                        conclusao: $cursoData.conclusao
                    }
                    
                    infoDisciplinaArray = []
                    $cursoData.disciplinas.forEach(function($disciplinaData){
                        const infoDisciplinaJson = {} //
                        infoDisciplinaJson.nome = $disciplinaData.nome,
                        infoDisciplinaJson.carga = $disciplinaData.carga,
                        infoDisciplinaJson.media = $disciplinaData.media,
                        infoDisciplinaJson.status = $disciplinaData.status

                        console.log(infoDisciplinaArray)
                        infoDisciplinaArray.push(infoDisciplinaJson)

                    })
                    infoCurso.disciplinas = infoDisciplinaArray
                    infoCursoArray.push(infoCurso)
                    infoEstudante.curso = infoCursoArray
                    infoEstudante.status = $curso.status
                })
                todosAlunosArray.push(infoEstudante)


            }
        })
    })
    todosAlunosJson.alunos = todosAlunosArray
    if(status){
        return todosAlunosJson

    }else{
        return status
    }
}
//  getcursoEspecifico('ds');

// console.log(getcursoEspecifico('ds'));
 



module.exports = {
  getCursos,
getListaDosAlunos,
getMatricula,
getcursoEspecifico
}