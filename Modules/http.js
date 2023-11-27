var http=require('http');
var fs=require('fs');

const url=require('url');
var calcFun=require('./calc');

http.createServer(function(req,res){
    let requestUrl=req.url
    console.log("request received......>>>>,requestUrl");

    // var query=url.parse(re.url,true).query;
    // console.log("Query string ==>>",JSON.stringify(query))

    if(requestUrl.indexOf("home")>0){
        fs.readFile('./Modules/home.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }else if(requestUrl.indexOf("index")>0){
        fs.readFile('./Modules/index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    }else if(requestUrl.indexOf("calc") >0){
    var query = url.parse(req.url,true).query;
    console.log("Query string ==>>", query)
    var queryJosn = JSON.stringify(query);
    var queryJosnObj = JSON.parse(queryJosn);
    console.log("Query string queryJosn ==>>", queryJosnObj)
    console.log("Query string queryJosn ==>>", queryJosnObj.operation)
    var result = calcFun(queryJosnObj.operation, parseInt(queryJosnObj.x), parseInt(queryJosnObj.y));
    console.log("result=", result);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var response = JSON.stringify({"result": result});
    res.write(response);
    return res.end();
}else{
        res.write('welcome to regnant');
        res.end();
    }
}).listen(8000);
console.log("server is running");
