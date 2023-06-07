// 1. require
// 2. express
// 3.  get
// 4. listen

const express = require('express')
const app = express()
const PORT = 8000
// API
const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    
}

// get is method that comes with express and we can plug stuff into this get.
// The main route is '/' (Serve the .html)
// () => {} is callback
app.get('/', (request, response) =>{
    // __dirname : server knows to look in its direct liket he current directory file (Just telling it where to start looking right.)
    response.sendFile(__dirname + '/index.html')
})
// the route that we're gonna use API
app.get('/api/:name', (request, response) => {
    // whenever a request comes in after the slash ':name' -> Grab 'request.params.name' below:
    const rapperName = request.params.name.toLocaleLowerCase()
    // if property of rappers
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    console.log(rapperName)
    console.log(rappers[rapperName].birthName)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})