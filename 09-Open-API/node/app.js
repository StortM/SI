import express from 'express'
import router from './routers/users.js'
import spacecrafts from './routers/spacecrafts.js'
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "Spacecrafts and their brave users API",
      version: "1.0.0",
      description: "A simple API that returns spacecrafts and their brave users.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  };

const options = {
    swaggerDefinition,
    apis: ['./routers/*.js'], // files containing annotations as above
};
 
const app = express()
app.use(express.json())

app.use(router)
app.use(spacecrafts)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

app.listen(3000, () => {
    console.log('listening on port 3000')
})