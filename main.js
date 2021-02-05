const http=require('http');

const server=http.createServer(function(req,res){
 //console.log(req); 
//res.setHeader('Content-Type','text/plain');
res.setHeader('Content-Type','text/html');
//res.end('Hello from Node');//request of the browser to a server
res.end(`
<h1>Browser calling server</h1>
<p>Lorem ipsum</p>
`)
})

server.listen(1337,function(){
console.log('listening to port 1337');


})