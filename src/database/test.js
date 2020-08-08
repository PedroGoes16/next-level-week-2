const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "Pedro Henrique", 
        avatar: "https://avatars1.githubusercontent.com/u/68116354?v=4", 
        whatsapp: "35998587192",
        bio: "Entusiasta das melhores tecnologias de matemática avançada. Apaixonado por explodir raciocínios e por mudar a vida das pessoas através do pensamento. Menos de 1 pessoa já passou por um de meus raciocínios.", 
    }

    classValue = {
        subject: "Matemática", 
        cost: "20", 
    }

    classScheduleValues = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220 
        }
    ]

    //await createProffy(db, { proffyValue, classValue, classScheduleValues })

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectClassesSchedules)
})