import http from 'http';
import app from './src/server';
import config from './src/server/config';
import { connect as connectDatabase } from './src/server/database';

connectDatabase();
const { port } = config.server;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
