import { env } from "@/env";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";


interface ErrorHandlerMap {
    [key: string]: (
        error: Error | ZodError,
        request: FastifyRequest,
        reply: FastifyReply,
    ) => void
}

export const errorHandlerMap: ErrorHandlerMap = {
    ZodError: (error, request, reply) => {
        return reply.status(400).send({ message: 'Validation error', ...(error instanceof ZodError && { error: error.message }) })
    },
    ResourceNotFoundError: (error, request, reply) => {
        return reply.status(404).send({ message: error.message })
    }
}

export const globalErrorHandler = (error: Error, _: FastifyRequest, reply: FastifyReply) => {

    if (env.ENV === 'development') {
        console.error(error)
    }

    const handler = errorHandlerMap[error.constructor.name];

    if (handler) return handler(error, _, reply);


    return reply.status(500).send({ message: 'Internal Server Error' });

}