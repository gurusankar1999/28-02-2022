var http =require ('http');
 
let port=2020
 
http.createServer(function(req,res){

    res.writeHead(200,{'content-Type':'text/html'})
    res.write("<center> hello this is http </center>" )  
    res.end();


}).listen(port)