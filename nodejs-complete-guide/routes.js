const fs = require('fs')
const http = require('http')

const requestHandler = (req,res) =>{
    const url = req.url
    console.log(url)
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Hola</h1>')
        res.write('<html>')
        res.write('<head><title>Root</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST' ){
        const body = []
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
    
        })
        req.on('end',(chunks)=>{
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            
            fs.writeFile('./message.txt', message,(err)=>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
                
            })
            console.log(message)
        })
       
    }
}

module.exports = requestHandler
/* module.exports = {
    handler :    requestHandler,
    someText: 'Algo escrito jeje'
}

module.exports.handler = requestHandler
module.exports.someText = 'Algo escrito jeje' */