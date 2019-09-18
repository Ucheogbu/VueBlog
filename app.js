const Express = require('express');
const path = require('path');
const fs = require('fs')
    // const router = require('./Router/router')
const app = Express()
const blogpath = path.join(__dirname, 'blog.json')
    // Instantiate middlewares
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))

// instantiate static folder
app.use(Express.static(path.join(__dirname, 'dist')))
    // app.use('/', router)


app.post('/blogs', (req, res) => {

    let blog = JSON.parse(req.body.blog)
    fs.exists(blogpath, (fileok) => {
        if (fileok) {
            fs.readFile(blogpath, 'utf8', (err, data) => {
                if (err) {
                    return console.log(`Error Reading File ${err}`)
                }
                try {
                    let blogsFile = JSON.parse(data)
                    if (blogsFile) {
                        try {
                            let title = blog.title
                            blogsFile[title] = blog
                        } catch {
                            throw Error('Title Already Exists')
                        }
                    }
                    fs.writeFile('blog.json', JSON.stringify(blogsFile), (err) => {
                        if (err) {
                            console.log(`Error Writing File ${err}`)
                        }
                    })
                    res.sendStatus(201)
                } catch (err) {
                    console.log(`Unable to Parse Json ${err}`)
                    res.sendStatus(400)
                }

            })
        } else {
            console.log('File not found')
            res.sendStatus(400)
        }
    })



})

app.get('/blogs', (req, res) => {
    fs.exists(blogpath, (fileok) => {
        if (fileok) {
            fs.readFile(blogpath, 'utf8', (err, data) => {
                if (err) {
                    return console.log(`Error Reading File ${err}`)
                }
                try {
                    res.json(data)
                } catch (err) {
                    console.log(`Unable to Parse Json ${err}`)
                    res.sendStatus(400)
                }
            })
        } else {

            console.log('File not found')
            res.sendStatus(400)
        }
    })
})

const port = process.env.PORT || 4000

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server running on port: ${port}`)
    }
})