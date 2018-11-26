//==========================================
// Puerto
//==========================================


process.env.PORT = process.env.PORT || 3000;



//==========================================
// Entorno
//==========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// mongodb://<dbuser>:<dbpassword>@ds031948.mlab.com:31948/cafedb
// mongodb://localhost:27017/cafe
//==========================================
// Base de Datos
//==========================================
let urlDB;

if (process.env.NODE_ENV === 'dev')
    urlDB = 'mongodb://localhost:27017/cafe';
else
    urlDB = 'mongodb://cafe-user:1q2w3e@ds031948.mlab.com:31948/cafedb';

process.env.URLDB = urlDB;