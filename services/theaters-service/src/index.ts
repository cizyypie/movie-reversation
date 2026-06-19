import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { theatersRoutes } from './routes/theater.route';
import { errorHandler } from './middleware/errorHandler';
import { authMiddleware } from './middleware/authMiddleware';
import jwt from '@elysiajs/jwt';

const app = new Elysia()
  .use(swagger({ path: '/docs' }))
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET! || 'randomparanolep',
      exp: "1h",
    })
  )
  .use(cors())

  .use(theatersRoutes)
  .use(errorHandler)
  
  
  .listen(process.env.PORT || 3002);

console.log(`🦊 Theaters service running at ${app.server?.hostname}:${app.server?.port}`);