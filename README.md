/*********************WEEK 10 WRITTEN HOMEWORK*********************/# wk10softwarehomework

1. Explain what a REST API is. What makes an API "RESTful"?

A REST APT is a type of API that lets different devices with different programming languages be able to understand and communicate with each other. REST = representational state transfer. It's like the middle man tool between two parties trying to communicate and exchange information even if they don't speak the same language. 

What makes an API restful is when an API follows certain standards to get things done. An example of this is using the GET POST PUT DELETE methods, if your API uses this, it is restful. 

Another standard it upholds is organization. This means that each action is nicely bucketed into a specific URL address like Arthur's instagram example in class. You can have instagram.com/username to go to the user's page or instagram.com/userfeed to go to the user's instagram feed. it keeps things organized. 

Since RESTful stands for representational state transfer it's important that your RESTful API can also be flexible and stateless. meaning it doesn't have to store history and can work independently and from scratch for each request. 

2. What is Node.js and why is it often used when building server-side applications?

Node is an environment where you can execute javascript code without touching anything on the client side web browser. it keeps javascript code on the server-side of the application. 

it's used when building server-side apps because it leverages your javascript on the backend as well as the frontend therefore making it super efficient. it also allows for your javascript code to run asynchronously eliminating any potential blockers in your code. 

Node is also useful because all of the existing packages it lets you access. This means that when you are writing code that has basic functions or attributes that are standard or templated, you can simply download existing packages without manually rewriting it all. in other words, it provides shared resources for developers saving us time and effort because we all would be writing the same blocks of code anyway. 

3. Express.js is a popular framework used in conjunction with Node.js. What are some of the key features of Express.js that make it useful for building web servers?

Routing, middleware, template enginers, HTTP utility methods, and error handling. 

4. In Express.js, what is middleware and how is it used?

when a client makes a request and the server sends a response, express.js has middleware functions that have accesss to those requests and are executed during the process of the request. 

these functions execute a bunch of tasks like processing the data, authenticating the request, error handling, etc. they basically intercept the request to make sure everything is working properly and execute code before a response is sent to the client. 

5. In terms of HTTP verbs, what is the difference between GET, POST, PUT, PATCH, and DELETE? When would you use each in the context of a RESTful API?

GET: you don't change anything on the server, you don't send any data but you use this when you want to retrieve data

POST: sends data to the server, might create new data but doesn't change anything that previously existed, use this when you want to create

PUT/PATCH: makes a change to something that previously existed, changes entire thing in database, replaces something new in the same position, with patch you just change one small piece, use this when you want to replace

DELETE: removes data that previously existed, use this when you want to remove

6. How would you handle parameters in the URL with Express.js? Provide an example.

You handle parameters in the URL by defining the route with a placeholder for those parameters. So if your request to a waiter is i want a pizza with these a pepperoni topping you would make a route that looks like this:

app.get('/pizza/:toppings', (req, res) => {
    const toppings = req.params.toppings
    res.send(`my pizza will have these toppings please: ${toppings}`)
}) 

and in the URL you would write dominos.com/pizza/pepperoni

7. How can you handle error situations when building an Express.js API?

with error middleware like explained above that is global so it will run through all of your code or through try/catch error blocks to send a status code

8. When building a RESTful API with Express.js, how would you structure your routes for a resource like items? What would the endpoints look like for performing CRUD (Create, Read, Update, Delete) operations?

//CREATE
app.post('/items', (req, res) => {
    const newItem = req.body
    items.push(newItem)
})

//READ
app.get('/items', (req, res) => {
    res.json(items)
})

//UPDATE
app.put('/items/:id', (req, res) => {
    const itemID = req.params.id
    const updatedItem = req.body
    const index = items.findIndex(item => item.id === itemId)

    if (index === -1 {
        res.status(404).json({ message: 'item not found'})
    } else {
        items[index] = updatedItem
        res.send(updatedItem)
    })
})

//DELETE
app.delete('/items/:id', (req, res) => {
    const itemID = req.params.id
    const index = items.findIndex(item => item.id === itemId)

    if (index === -1 {
        res.status(404).json({ message: 'item not found'})
    } else {
        const deletedItem = items.splice(index, 1)
        res.send(deletedItem[0])
    })
})

9. How would you parse incoming request bodies in Express.js? Provide an example of how you might handle a JSON payload.

const express = require('express')
const app = express()
app.use(express.json()) >>>>> this is how you would parse through json payload

app.post('/items', (req, res) => {
    const newItem = req.body
    console.log(newItem)

    res.status(201).json({ message: 'success'})
})

10. How can testing be implemented for a RESTful API built with Node and Express? Provide an example of a test case for one of your API endpoints.

it can be implemented by using jest or supertest frameworks! so you would write:

const request = require('supertest')
const express = require('express')
const app = express()

describe('GET/items', () => {
    it('returns list of items', async () => {
        const response = await app.get('/items')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {id: 1, name: 'item 1'}
            {id: 2, name: 'item 2'}
        ])

    })
})


/*********************WEEK 10 PRACTICAL README  HOMEWORK*********************/

This is a REST API to manage items

To use this API you need the following:

node.js installed
my repository cloned

open your terminal and cd wk10
enter node server.js to run the server

then go into the browser and enter http://localhost:3000/items
