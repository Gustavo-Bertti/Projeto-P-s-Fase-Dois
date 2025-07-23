import fastify from 'fastify'
import { postagemRoutes } from '@/http/controllers/postagem/routes'

export const app = fastify()

app.register(postagemRoutes)