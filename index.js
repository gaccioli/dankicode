const express = require('express')
const path = require('path')

const app = express()

//receita de bolo
// configurar o index para abrir via html na pasta views e o CSS na pasta public
app.engine('html', require('ejs'). renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))


var tarefas = ['Arrumar o quarto', 'Fazer Feira', 'estudar NodeJS']



app.get('/', (req, res) => {

    res.render('index', {tarefaslist: tarefas})
})

app.get('/deletar/:id', (req, res) => {
    tarefas = tarefas.filter(function(val, index) {
        if(index != req.params.id) {
            return val
        }
    })

    res.render('index', {tarefaslist: tarefas})
})

app.listen(5000, () => {
        console.log('Server Rodando')
})