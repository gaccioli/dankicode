const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

/*
//criar arquivo
fs.writeFile('danki.txt', 'Teste danki aqui', function (err){
    if(err) throw err
    console.log('O arquivo foi criado com sucesso')
})
*/

//editar arquivo
fs.appendFile('danki.txt', '\nConteudo adicionado', (err) =>{
    if(err) throw err
    console.log('O arquivo foi  Editado e salvo com sucesso')
})



const server = http.createServer((req, res) =>{

    if(req.url == '/danki'){
        fs.readFile('index.html',function(err, data) {

            fs.appendFile('danki.txt', '\nConteudo adicionado dentro da Requisição', (err) =>{
                if(err) throw err
                console.log('O arquivo foi  Editado e salvo com sucesso')
            })

            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    
    }else {
            return res.end()
        }
        
})


server.listen(port, hostname, () => {
    console.log('Servidor está Rodando')
})
