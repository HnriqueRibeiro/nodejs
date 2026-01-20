
export const routes = [
    {
        method:"GET",
        path:"/products",
        handler: (req, res) => {
            return res.end("lista encontrada!")
        },
    },
    {
        method:"POST",
        path:"/products",
        handler: (req, res) => {
            return res.writeHead(201).end(JSON.stringify(req.body))
        },
    },
]