import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import userRoutes from '../routes/users.routes';


class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users'
    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT  || '4000';

        this.middlewares();

        this.routes();

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server run on port:' + this.port)
        });
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // reading and parsing the body
        this.app.use(express.json());

        // public folder
        this.app.use(express.static('src/public'));

        // morgan: records by console all requests made to the database.
        this.app.use(morgan('dev'));

    }

    routes() {
        
        this.app.use( this.paths.users, userRoutes );

    }

}


export default Server;