import path from 'node:path'
import fs from 'node:fs/promises'
import { sendresponse } from './sendresponse.js';
import { getcontenttype } from './getcontenttype.js';

export async function servestatic(res, req, dirname) {
    
    const publicdir =  path.join(dirname, 'public');
    const filepath = path.join(publicdir, 
        req.url === '/' ? 'index.html' : req.url
    );

    const extname = path.extname(req.url);

    const contenttype = getcontenttype(extname);
    
    try{
        const content = await fs.readFile(filepath);
        sendresponse(res, 200, contenttype, content);
    }
    catch(err){
        if (err.code === 'ENOENT'){
            const content = await fs.readFile(path.join(publicdir, '404.html'));
            sendresponse(res, 404, 'text/html', content);
        }
        else{
            sendresponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`);
        }
        console.log(err);
    }
}