import sanitize from 'sanitize-html';
import sanitizehtml from 'sanitize-html'

export function sanitizeinput(data){
    const sanitizeddata = {}

    for (const [key, value] of Object.entries(data)){
        if (typeof value === 'string'){
            sanitizeddata[key] = sanitizehtml(value, {allowedTags: ['b'], allowedAttributes: {}});
        }
        else{
            sanitizeddata[key] = value;
        }
    }

    return sanitizeddata;
}