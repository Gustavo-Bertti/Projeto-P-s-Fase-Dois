import { env } from '@/env'
import { app } from '@/app'
const port = Number(process.env.PORT) || 3000;
app.listen({ host: '0.0.0.0', port })
  .then(() => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  })
  .catch((err) => {
    console.error('Erro ao iniciar servidor:', err);
  });
