import { getdata } from "./getdata.js";
import fs from 'node:fs/promises'
import path from 'node:path'
import { json } from "node:stream/consumers";

export async function addNewSighting(data){
    try{
        const sightings = await getdata();
        sightings.push(data);
        const JSONpath = path.join("data", 'data.json');
        await fs.writeFile(JSONpath, JSON.stringify(sightings, null, 2), "utf8")

    }
    catch(err){
        throw new Error(err);
    }
}