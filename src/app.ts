import dotenv from 'dotenv';
import Server from './models/server.model';


// configure dotenv
dotenv.config();

const server = new Server();

server.listen();