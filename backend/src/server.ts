import app from './app'
import { AppDataSource } from './config/data-source'

const PORT = process.env.PORT || 3000

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`))
  })
  .catch(err => console.error('Erro ao conectar no banco:', err))