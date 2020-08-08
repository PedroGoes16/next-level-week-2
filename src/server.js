const Database = require('./database/db')

const {pageLanding, pageStudy, pageGiveClasses} = require('./page')

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure("src/views", {
    express: server,
    noCache: true 
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)