import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { moviesRoutes } from './routes/movie.route';
import { scheduleRoutes } from './routes/schedule.route';
import { errorHandler } from './middleware/errorHandler';
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

  .use(moviesRoutes)
  .use(scheduleRoutes)
  .use(errorHandler)
  
  
  .listen(process.env.PORT || 3004);

console.log(`🦊 Movie service running at ${app.server?.hostname}:${app.server?.port}`);