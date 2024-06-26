// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import javascript_book from '../public/imgs/javascript_book.png'
export const handlers = [
  http.get('https://api.deepspacestore.com/offers/:id', () => {
    return HttpResponse.json({
      id: '1',
      name: 'Estruturas de dados com JavaScript',
      image: javascript_book,
      price: '81,75',
      description: 'O livro "Estruturas de dados e algoritmos com JavaScript" começa abordando o básico sobre JavaScript e apresenta a ECMAScript 2017, antes de passar gradualmente para as estruturas de dados mais importantes, como arrays, filas, pilhas e listas ligadas. Você adquirirá um conhecimento profundo sobre como as tabelas hash e as estruturas de dados para conjuntos funcionam, assim como de que modo as árvores e os mapas hash podem ser usados para buscar arquivos em um disco rígido ou para representar um banco de dados.',
      numberPages: '408 páginas',
      publisher: 'Novatec Editora; 2ª edição (11 março 2019)',
      isbn: '8575226932',
      dimensions: '23.37 x 17.02 x 2.03 cm',
      language: 'Português',
      author: 'Loiane Groner'
    })
  }),

  http.post(`https://api.deepspacestore.com/offers/:id/create_order`, (req,res) => {
    const orderData = req.body;
    return HttpResponse.json({
      'message': `Pedido criado com sucesso!`,
      'orderData': orderData
    }
  )
  }),

];


