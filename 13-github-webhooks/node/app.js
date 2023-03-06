import express from 'express';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/webhook', (req, res) => {
    console.log(JSON.parse(req.body.payload))
    res.send({})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})