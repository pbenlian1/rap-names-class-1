const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'DiaperBoi',
        'birthLocation': 'London, Uk'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Illinois, USA'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
})
app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})