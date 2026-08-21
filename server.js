import http from 'node:http'
import { servestatic } from './utils/servestatic.js';
import { sendresponse } from './utils/sendresponse.js';
import { getdata } from './utils/getdata.js';
import { handleGet } from './handlers/routeHandlers.js';
import { handlePost } from './handlers/routeHandlers.js';

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {

    if (req.url === '/api'){
        if(req.method === "GET"){
            return await handleGet(res);
        }
        else if (req.method === "POST"){
            handlePost(req, res);
        }
    }
    else if (!req.url.startsWith('/api')){
        return await servestatic(res, req, __dirname);
    }
});

server.listen(PORT, ()=>console.log(`server at port ${PORT}`));