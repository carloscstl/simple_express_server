const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { dbConnection } = require('../database/config');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        //ConectarDB
        // this.connectDB();
        
        //Middlewares
        this.middlewares();
              
        //Rutas de aplicacion
        this.routes();
    }

    // ? Database Connection
    // async connectDB() {
    //     await dbConnection();
    // }

    middlewares() {
        //Directorio Publico
        this.app.use( cors() );
        this.app.use(morgan('dev'));

        //Lectura y parse del body
        this.app.use( express.json() );
        
        //*Directorio publico
        // this.app.use(express.static('public'));
        
    }

    routes() {
        //? rutas
        // this.app.use('/api/auth', require('../routes/auth.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }

}

module.exports = Server;