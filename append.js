var fs=require('fs')
fs.appendFile('./js-app/Arrays/main.js','console.log("hello")',function(err){
    console.log('done');
}
)