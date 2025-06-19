import express from 'express';
import taskRoutes from './routes/taskRoutes';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(express.json());
app.use('/tasks', taskRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
