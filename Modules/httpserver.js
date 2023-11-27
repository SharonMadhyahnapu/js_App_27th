var http=require('http')

http.createServer(function(req,res){
    res.write("Welcome back Alien!!!")
    res.end()
})
.listen(9000)
console.log('server running on port 9000')
