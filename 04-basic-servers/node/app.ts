import express from "express"

const app = express()

app.listen(3002, () => console.log('Server is running on port 3002'))

app.get('/', (req, res) => res.send({ message: 'Our first Express route' }))



