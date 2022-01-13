import path from 'path';
import express, { response } from 'express';
import rootDir from '../utils/path';
import { products } from './admin';

 const publicAppRouter = express .Router();
 
 publicAppRouter.get('/', (request, response, next) => {
     console.log(products);
    response.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });

  publicAppRouter.use((request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', '404.html'));
  });

  export default publicAppRouter;
