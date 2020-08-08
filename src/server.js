const proffys = [
    {
         name: "Pedro Henrique", 
         avatar: "https://avatars1.githubusercontent.com/u/68116354?v=4", 
         whatsapp: "35998587192",
         bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por explodir raciocínios e por mudar a vida das pessoas através do pensamento. Menos de 1 pessoa já passou por um de meus raciocínios.", 
         subject: "Matemática", 
         cost: "20", 
         weekday: [0], 
         time_FormData: [720], 
         time_to: [1220]
    },
    {
        name: "Daniela Conceição", 
        avatar: "https://avatars1.githubusercontent.com/u/68116354?v=4", 
        whatsapp: "895628565656445",
        bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por explodir raciocínios e por mudar a vida das pessoas através do pensamento. Menos de 1 pessoa já passou por um de meus raciocínios.", 
        subject: "Matemática", 
        cost: "20", 
        weekday: [1], 
        time_FormData: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays })
}

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