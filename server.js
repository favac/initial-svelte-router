require('dotenv').config()
const path = require('path')
const express = require('express')
const app = require('./public/App.js')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', function (req, res) {
  const { html } = app.render({ url: req.url })

  res.write(`
    <!DOCTYPE html>
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/pulse/bootstrap.min.css'>
    <link rel='stylesheet' href='/bundle.css'>
    <div id="app">${html}</div>
    <script src="/bundle.js"></script>
  `)

  res.end()
})

const port = process.env.PORT
server.listen(port, () => console.log(`Listening on port ${port}`))
