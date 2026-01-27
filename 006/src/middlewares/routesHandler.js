import { routes } from "../routes.js"

export function routeHandler(req, res) {
    const route = routes.find((route) => {
        return route.method === req.method && route.path.test(req.url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        //pegando o id
        const { ...params } = routeParams.groups

        console.log(params);

        return route.handler(req, res)
    }

    return res.writeHead(404).end("Nada foi encontrado")

}