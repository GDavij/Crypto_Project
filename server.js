const express = require('express')
const app = express()

const port = 8080
app.set('views','./views')
app.set('view engine','ejs')

app.use(express.static('public'))

app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))


app.get('/', (req,res) => {
res.render('pages/Index')
})

app.listen(port,() => { console.info(`Server Online and Listening to Port ${port}`)})