import express from 'express'

const app = express()
app.use(express.json())

app.post('/bo', (req, res) => {
    console.log("bo here", req.body)

    res.send('ok')
})

app.post('/lis', (req, res) => {
    console.log("lis is also here", req.body)

    res.send('ok')
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
