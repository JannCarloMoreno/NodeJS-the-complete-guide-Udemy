
const requestHandler = (req,res)=>{
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Hola busca un usuario</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Enviar</button></form>')
        return res.end()
    }
    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<ul><li>Carlos Jose</li><li>Maria Eugenia</li><li>Jose David</li></ul>')
        return res.end()
    }
    if(url === '/create-user' && method==='POST'){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end', (chunks)=>{
            const parsedBody = Buffer.concat(body).toString()
            const user = parsedBody.split('=')[1]
            res.statusCode= 302
            res.setHeader('Location', '/')
            console.log(user)
            return res.end()
        })
    }
}

module.exports = requestHandler