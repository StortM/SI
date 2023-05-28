import express, { static as expressStatic } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import { join } from 'path'

const app = express()

const port = process.env.SERVER_PORT || 3000

app.use(morgan('dev'))

app.use(
	helmet({
		contentSecurityPolicy: false,
	})
)

app.use(expressStatic(join(__dirname, 'build')))

app.listen(port, () => console.log(`Server listening on port ${port}`))
