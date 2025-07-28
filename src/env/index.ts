import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_HOST: z.string().default('localhost'),
  DATABASE_PORT: z.coerce.number().default(5432),
  DATABASE_USER: z.string().default('postgres'),
  DATABASE_PASSWORD: z.string().default('postgres'),
  DATABASE_NAME: z.string().default('projeto_segundo_modulo'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid enviroment variables', _env.error.format())

  throw new Error('Invalid enviroment variables')
}

export const env = _env.data
