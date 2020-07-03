const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const port = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log(`App listenting port: ${port}, and using cors`)
})
