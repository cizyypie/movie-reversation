import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { ticketsRoutes } from './routes/tickets.route';
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
  .use(cors({
    origin: "http://localhost:3005", // Replace with your frontend URL
    credentials: true, // Allow sending cookies
  }))

  .use(ticketsRoutes)
  .use(errorHandler)
  .listen(process.env.PORT || 3005);

console.log(`🦊 Seat Reservastion service running at ${app.server?.hostname}:${app.server?.port}`);