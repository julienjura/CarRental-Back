import http  from 'http';
import path  from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import multer from 'multer';

// App
const app = express();

const csrfProtection = csrf();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'Infrastructure', 'webserver', 'public')));    // statically served files
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
// app.use('/admin', adminRoutes);
// app.use(publicRoutes);

// Server
const server = http.createServer(app);
server.listen(3000);

console.log("Car Rental Node Server running ...");