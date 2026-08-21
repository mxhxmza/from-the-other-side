import { getdata } from "../utils/getdata.js";
import { sendresponse } from "../utils/sendresponse.js";
import { parseJSONbody } from "../utils/parseJSONbody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeinput } from "../utils/sanitizeinput.js";

export async function handleGet(res){
    const data = JSON.stringify(await getdata());
    sendresponse(res, 200, 'application/json', data);
}

export async function handlePost(req, res){
    try{
        const parsedbody = await parseJSONbody(req);
        const sanitizedbody = sanitizeinput(parsedbody);
        await addNewSighting(sanitizedbody);
        sendresponse(res, 201, 'application/json', JSON.stringify(sanitizedbody));
    }
    catch(err){
        sendresponse(res, 400, 'application/json', JSON.stringify({error: err}));
    }
}