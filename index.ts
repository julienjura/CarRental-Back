const http = require('http');
import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin'; 
import publicRoutes from './routes/public'; 

// App
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/admin', adminRoutes);
app.use(publicRoutes);

// Server
const server = http.createServer(app);
server.listen(3000);

console.log("Server running ...");