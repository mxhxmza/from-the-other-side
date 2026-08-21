import path from 'node:path'
import fs from 'node:fs/promises'

export async function getdata(){
    try {
        const pathJSON = path.join('data', 'data.json');
        const data = await fs.readFile(pathJSON, 'utf-8');
        const parseddata = JSON.parse(data);
        return parseddata;
    }
    catch(err){
        console.log(err);
        return [];
    }

}