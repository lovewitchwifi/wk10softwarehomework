const express = require('express')
const app = express()
const port = 3000

//GET
app.get('/items', (req, res) => {
    res.json(items)
})

//ADD
app.post('/items', (req, res) => {
    const { name, price } = req.body
    
    if (!name || !price) {
        res.status(400).send('invalid request')
        return
    }
    const id = Math.random().toString(36).substr(2, 9)

    const newItem = {
        id,
        name,
        price
    }
    items.push(newItem)
    res.json(newItem)
})

//GET
app.get('/items/:id', (req, res) => {
    const id = req.params.id
    const foundItem = items.find(item => item.id === id)

    if (!foundItem) {
        res.status(404).send('sorry not found')
        return
    }
    res.json(foundItem)
})

//PUT
app.put('/items/:id', (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const price = req.body.price
    const foundItem = items.find(item => item.id === id)
   
    if (!foundItem) {
        res.status(404).send('sorry not found')
        return
    }

    foundItem.name = name || foundItem.name
    foundItem.price = price || foundItem.price

    res.json(foundItem)
})

//DELETE
app.delete('/items/:id', (req, res) => {
    const id = req.params.id
    const itemIndex = items.findIndex(item => item.id === id)

    if (itemIndex === -1) {
        res.status(404).send('sorry not found')
        return
    }

    const deletedItem = items.splice(itemIndex, 1) [0]

    res.json(deletedItem)
})

app.listen(port, () => {
    console.log('listening on port ${port}')
})