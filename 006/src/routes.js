import { parseRoutePath } from './utils/parseRoutePath.js'

export const routes = [
    {
        method: "GET",
        path: parseRoutePath('/products'),
        handler: (req, res) => {
            return res.end(JSON.stringify(req.query));
        },
    },
    {
        method: "POST",
        path: parseRoutePath('/products'),
        handler: (req, res) => {
            return res.writeHead(201).end(JSON.stringify(req.body))
        },
    },

    {
        method: "DELETE",
        path: parseRoutePath('/products/:id'),
        handler: (req, res) => {
            return res.end("Produto removido com ID: " + req.params.id)
        },
    },
]