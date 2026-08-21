export function sendresponse(res, statuscode, contenttype, payload) {
    res.statuscode = 200;
    res.setHeader('Content-type', contenttype);
    res.end(payload);
}