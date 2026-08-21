export function getcontenttype(extname){
    const types = {
        ".js" : "text/javascript",
        ".css" : "text/css",
        ".json" : "application/json"
    }
    return types[extname.toLowerCase()] || "text/html";
}