import { getdata } from "../utils/getdata.js";
import { sendresponse } from "../utils/sendresponse.js";

export async function handleGet(res){
    const data = JSON.stringify(await getdata());
    sendresponse(res, 200, 'application/json', data);
}