import express, { response } from 'express';
import { request } from 'http';

 const publicAppRouter = express .Router();
 
 publicAppRouter.get('/', (request, response, next) => {
    response.send(
        '<h1>Hello from NodeJS server</h1>'
    );
  });

  publicAppRouter.use((request, response, next) => {
    response.status(404).send('<h1>Page introuvable</h1>')
  });

  export default publicAppRouter;
