const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Login')
})

app.get('/notes', (req, res) => {
    res.send('Notes')
})


app.get('/new', (req, res) => {
    res.send('New note')
})

app.get('/delete', (req, res) => {
    res.send('Delete')
})

app.get('/options', (req, res) => {
    res.send('Options')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})