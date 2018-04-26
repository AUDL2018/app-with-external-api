const express = require('express')

// Fetch module for Node
// Documentation: https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch')

const app = express()

app.get('/github/:username', (req, res) => {
    let { username } = req.params
    
    let url = `https://api.github.com/users/${username}`

    fetch(url)
    .then(response => response.json())
    .then(user => {
        res.json(user)
    })
})

// Unsplash documentation
// General API docs: https://unsplash.com/documentation
// Get random photo: https://unsplash.com/documentation#get-a-random-photo
app.get('/photo', (req, res) => {
    let url = 'https://api.unsplash.com/photos/random'

    let options = {
        headers: {
            'Authorization': 'Client-ID 25e7d080b38d27769e31f282614342f2c493bc2a5d2359f543f8412440598f68'
        }
    }

    fetch(url, options)
    .then(response => response.json())
    .then(json => {
        res.json(json)
    })
})

app.listen(3000, () => {
    console.log('Server started')
})