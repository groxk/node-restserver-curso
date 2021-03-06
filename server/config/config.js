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
    urlDB = process.env.MONGO_URI;

process.env.URLDB = urlDB;


//==========================================
// Fecha de Vecimiento Token
//==========================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//==========================================
// SEED de autenticación
//==========================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==========================================
// Google Client ID
//==========================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '228658828012-7peabkvke36m7c8ilge1nhat8a2c9u0n.apps.googleusercontent.com';