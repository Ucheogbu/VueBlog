const express = require('express')
const fs = require('fs')
const route = express.Router()

route.post('/blogs', (req, res) => {

    let blog = req.body
    let blogs = fs.readFile('../blog.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            return JSON.parse(data)
        }
    })

    if (blogs) {
        blogs.unshift(blog)
    }
    fs.writeFile('../blog.json', JSON.stringify(blogs), (err) => {
        if (err) {
            console.log(err)
        }
    })
    res.statusCode(201)

})

route.get('/blogs', (req, res) => {
    console.log(req.url)

    let blogs = fs.readFile('blog.json', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            return JSON.parse(data)
        }
    })

    res.json(blogs)
})

module.export = route;