import { Router } from "express";

const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
    const { page, limit } = request.query
    response.send(`${page} ${limit} `)
})



productsRoutes.post("/", (request, response) => {
    const { name } = request.body
    response.json({ name })
})
export { productsRoutes }