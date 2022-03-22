import express from 'express'
const app = express()

const port = 8080
app.set('views','dist/views')
app.set('view engine','ejs')

app.use(express.static('dist'))

app.use('css',express.static(__dirname + 'public/css'))
app.use('js',express.static(__dirname + 'code'))


app.get('/', (req,res) => {
res.render('pages/Index')
})

app.listen(port,() => { console.info(`
[+]-----------------------------------------------------
Server Online and Listening to Port localhost:${port}
[+]-----------------------------------------------------
`)})
