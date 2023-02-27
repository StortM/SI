import express from 'express'
import router from './routers/users.js'
import spacecrafts from './routers/spacecrafts.js'
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openApi: '3.0.0',
    info: {
        title: 'Hello World',
        version: '1.0.0',
        description: 'A sample API',
    },
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