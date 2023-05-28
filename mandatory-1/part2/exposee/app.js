import express from 'express'
import nedb from 'nedb'
import fetch from "node-fetch";

const acceptedWebhookEventTypes = ['order.created', 'order.updated', 'order.deleted']

const app = express()
app.use(express.json())

// initialize nedb
const db = new nedb({ filename: 'database.db', autoload: true })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/webhook', (req, res) => {
    const payload = req.body?.payload
    console.log("received payload", payload);

    // validate that the payload has the correct structure
    if (!payload || !payload.event || !payload.callback_url) {
        res.status(400).send('Invalid or missing payload')
        return
    } else {
        res.send({'message': 'payload received'})
    }

    db.insert(payload, (err) => {
        if (err) throw err
        console.log('payload inserted', payload)
    })
})

app.delete('/webhook/:eventType', (req, res) => {
    const eventType = req.params.eventType
    console.log("received delete request for eventType", eventType);

    if (!acceptedWebhookEventTypes.includes(eventType)) {
        res.status(400).send('Invalid or missing eventtype')
        return
    }

    db.remove({ event: eventType }, {}, (err, numRemoved) => {
        if (err) throw err
        console.log('webhook(s) removed', numRemoved)
        res.send({'message': `webhook(s) removed: ${numRemoved}`})
    })
})
    

// ping callback_url at random intervals between 10 seconds and 1 minute
setInterval(async () => {
    const interval = Math.floor(Math.random() * 50000) + 10000
    console.log('interval', interval)

    const payloads = await findAll() 
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
            resolve(docs)
        })
    })
}

const ping = async (callback_url) => {
    try {
        fetch(callback_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'ping' }),
        })
    } catch (error) {
        console.error('Error:', error);
    }
}

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
