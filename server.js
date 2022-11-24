

const http = require('http')
const port = 3000

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Mostrar editora',
    '/dev': 'Pag do desenvolvedor do projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log('Servidor escutando em http://localhost: ' + port)

})
