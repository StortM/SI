import express from 'express'
import nedb from 'nedb'

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
        res.send({})
    }

    db.insert(payload, (err) => {
        if (err) throw err
        console.log('payload inserted', payload)
    })
})

// ping callback_url every 1 minute
setInterval(async () => {
    const payloads = await findAll() 
    payloads.forEach((payload) => {
        const { callback_url } = payload
        console.log('pinging', callback_url)

        ping(callback_url)
    })
}, 60000)

const findAll = () => {
    return new Promise((resolve, reject) => {
        db.find({}, (err, docs) => {
            if (err) reject(err)
            resolve(docs)
        })
    })
}

const ping = (callback_url) => {
    fetch(callback_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'ping' }),
    })
}

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
