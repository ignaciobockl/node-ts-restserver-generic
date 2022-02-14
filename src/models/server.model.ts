import express, { Application } from 'express';

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

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server run on port:' + this.port)
        });
    }

    routes() {
        
        this.app.use( this.paths.users, userRoutes );

    }

}


export default Server;