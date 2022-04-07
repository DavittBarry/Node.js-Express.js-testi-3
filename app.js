// Luodaan ensin, dotenv- ja express:in config path. Halutaan semmonen yksinkertanen sisäänkirjautimisen apin.

const dotenv = require('dotenv')
dotenv.config( {path: './config/config.env'})

const express = require('express')
const app = express()

// Sitten, laitetaan portti-, ja user configit.

const port = process.env.PORT || 3332
const testi = process.env.TESTI
const user = process.env.USER
const user2 = process.env.USER2

console.log(testi)
console.log(user)

// Pushaan Express.js:in avulla sivut.

app.get('/', (req, res) => {
    if (user != user) {
        res.send('Hei, et ole Davitt...')
    }
    else {
    res.send('Mjoro vua! Sun portti on:' + port)
    }
})

// Tulostetaan mikä portti on käytössä.

app.listen(port, () => console.log("Sun porttisi on " + port))