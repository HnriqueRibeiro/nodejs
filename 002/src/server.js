import http from 'node:http'

const server = http.createServer((req, res) => {
    return res.writeHead(200).end("Criado com sucesso!")
})

server.listen(3333)