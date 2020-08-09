import express from 'express';

const app = express();

app.use(express.json());

// Request Body (request.body): Dados para criação ou atualização de um registro
// Route Params (request.params): Identificar qual recurso deve ser atualizado ou deletado
// Query Params (request.query): Paginação, filtros, ordenação

app.get('/', (request, response) => {
  return response.send({ message: 'hey friend' });
});

app.listen(3333);