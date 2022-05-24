const { response } = require('express');
const express = require('express');

const app = express();

app.use(express.json())

/**
 * GET - Buscar informações do servidor;
 * POST - Inserir informação;
 * PUT - Alterar informação;
 * PATCH - Alterar informação específica;
 * DELETE - Deletar informação
 */

/**
 * tipos de parâmetros
 * 
 * Routes params => Identificar um recurso para editar, deletar ou buscar 
 * Query Params => Paginação, filtro
 * Body Params => Objetos de inserção/alteração
 */

app.get("/courses", (request, response)=>{

    const query = request.query;
    console.log(query)

    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
})

app.post("/courses", (request, response)=>{

    const body = request.body;

    console.log(body)

    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
})

app.put("/courses/:id", (request, response)=>{

    const {id} = request.params;
    console.log(id)

    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.patch("/courses/:id", (request, response)=>{
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ]);
});

app.delete("/courses/:id", (request, response)=>{
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 4"
    ]);
});

app.listen(3333, ()=>{
    console.log(`rodando na porta ${3333}`)
});