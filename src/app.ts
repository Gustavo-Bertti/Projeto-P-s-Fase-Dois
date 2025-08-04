import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { postagemRoutes } from '@/http/controllers/postagem/routes'
import { globalErrorHandler } from '@/utils/global-error-handler'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

export const app = fastify()
app.register(fastifySwagger,{
    swagger: {
    info: {
      title: 'Blog de Estudos',
      description: 'API para criação de um blog de estudos',
      version: '1.0.0',
    },
    tags:[{
        name: 'Postagem',
        description: 'Gerenciamento de postagens',
    }]
},
})
app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
})
app.register(postagemRoutes)
app.setErrorHandler(globalErrorHandler);