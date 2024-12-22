import express from 'express';
import dotenv from 'dotenv'
import prisma from './utils/prismaInstance';
import router from './routes';

const app = express();


dotenv.config();

const PORT = process.env.PORT || 8001;
app.use(express.json());

app.use("/api", router);
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    server.close(() => {
      console.log('Server stopped');
    });
    process.exit(0);
  });