import express from 'express'
import nedb from 'nedb'
import fetch from "node-fetch";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const acceptedWebhookEventTypes = ['order.created', 'order.updated', 'order.deleted']

const app = express()
app.use(express.json())

// initialize nedb
const db = new nedb({ filename: './database.db', autoload: true })

// Swagger documentation
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Order API',
      version: '1.0.0',
      description: 'Express Order API',
    },
}
  
const swaggerOptions = {
    swaggerDefinition,
    apis: ['*.js'],
    explorer: true,
}

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJSDoc(swaggerOptions))
)

/**
 * @openapi
 * /webhook:
 *   post:
 *     description: Post a webhook
 *     requestBody:
 *       description: Register webhook. Accepts callback_url and event. See schema for event types.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               callback_url:
 *                 type: string
 *               event:
 *                 type: string
 *                 enum: [order.created, order.updated, order.deleted]
 *             required:
 *               - callback_url
 *               - event
 *           example:
 *             callback_url: http://example.com/help
 *             event: order.created
 *     responses:
 *       200:
 *         description: saves the webhook to the database and sends test ping the specified callback_url
 *       400:
 *        description: Bad request
 * 
 */
app.post('/webhook', (req, res) =>{
    const { event, callback_url } = req.body

    // validate that the payload has the correct structure
    if (!event || !callback_url) {
        res.status(400).send('Invalid or missing properties', "event: " + event + ", callback_url: " + callback_url)
        return
    } else {
        res.send({'message': 'payload received'})
    }

    // validate that the event is one of the accepted types
    if (!acceptedWebhookEventTypes.includes(event)) {
        res.status(400).send('Invalid event type', event)
        return
    }

    const payload = { event, callback_url }
    db.insert(payload, (err) => {
        if (err) throw err
        console.log('payload inserted', payload)
    })

    // ping the registered callback_url
    ping(payload.callback_url, "payload received with event " + payload.event)
})

/**
 * @openapi
 * /webhook:
 *   delete:
 *     description: Delete all registered webhooks for a specific url
 *     requestBody:
 *       description: Accepts a callback_url
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               callback_url:
 *                 type: string
 *             required:
 *               - callback_url
 *           example:
 *             callback_url: http://example.com/help
 *     responses:
 *       200:
 *         description: deletes all registered webhooks for the respective callback_url
 *       400:
 *        description: Bad request
 * 
 */
app.delete('/webhook', (req, res) => {
    const { callback_url } = req.body
    console.log("received delete request for callback_url", callback_url);

    if (!callback_url) {
        res.status(400).send('Invalid or missing callback_url', callback_url)
        return
    }

    db.remove({ callback_url }, {multi: true}, (err, numRemoved) => {
        if (err) throw err
        console.log('webhook(s) removed', numRemoved)
        res.send({'message': `webhook(s) removed: ${numRemoved}, callback_url: ${callback_url}`})
    })
})
    

// ping callback_url at random intervals between 10 seconds and 1 minute
const interval = Math.floor(Math.random() * 50000) + 10000
setInterval(async () => {
    const payloads = await findAll() 
    console.log('found payloads', payloads)
    
    payloads.forEach(async (payload) => {
        const { callback_url } = payload
        console.log('pinging', callback_url)

        await ping(callback_url)
    })
}, interval) 


const findAll = () => {
    return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if (err) reject(err)
            console.log('found docs', docs)
            resolve(docs)
        })
    })
}

const ping = async (callback_url, message) => {
    try {
        fetch(callback_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message ? message : 'ping' }),
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
