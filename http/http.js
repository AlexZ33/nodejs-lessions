var http=require('http')

http
	.createServre(function(req,res){
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.write('Hello Nodejs')
		res.end()
	})
	.lisen(2015)
