import express from 'express';

 const adminAppRouter = express.Router();
 
 // /admin/add-lesson (GET)
 adminAppRouter.get ('/add-lesson', (request, response, next) => {
    response.send(
        '<form action="/admin/lesson" method="POST"><input type="text" name="title"><button type="submit">Add lesson</button></form>'
    );
  });

  // /admin/lesson (POST)
  adminAppRouter.post('/lesson', (request, response, next) => {
    console.log(request.body);
    response.redirect('/');
  });


  export default adminAppRouter;