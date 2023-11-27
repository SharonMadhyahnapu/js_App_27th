const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const readstream=fs.createReadStream('./Modules/httpserver.js');
    res.writeHead(200,{'Content-type':'text/js'})
    readstream.pipe(res);
})
.listen(3000);