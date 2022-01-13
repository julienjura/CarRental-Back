import express from 'express';
import path from 'path';
import rootDir from '../utils/path';

 export interface product {
    title: string;
 };

 export const products:product[] = [];

 const adminAppRouter = express.Router();
 
 // /admin/add-lesson (GET)
 adminAppRouter.get ('/add-product', (request, response, next) => {
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  });

  // /admin/lesson (POST)
  adminAppRouter.post('/add-product', (request, response, next) => {
    products.push({title: request.body.title});
    response.redirect('/');
  });


  export default adminAppRouter;