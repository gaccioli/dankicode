const fs = require('fs')
const read = require('readline')

    
    const rl = read.createInterface({

        input: process.stdin,
        output: process.stdout
    })
    
    rl.question('Qual seu nome?', function(name){
        console.log('O nome inserido foi:'+name)
        fs.appendFile('dankicode.txt', `\n${name}`, (err) => {
            if(err) throw err
            //console.log('Dados salvos com sucesso')
        })
        rl.question('Qual sua idade?', function(idade){
            console.log('A idade inserida foi:'+idade)
            fs.appendFile('dankicode.txt', `\n${idade}`, (err) => {
                if(err) throw err
                console.log('Dados salvos com sucesso')
            })
            fs.readFile('dankicode.txt', function(err, data) {

                let str = data.toString()
                
                let newStr = str.split('\n')
                console.log(newStr)
            })
        })
        
      
    })


    rl.on('close', function(){
        console.log('Volte Sempre')
        process.exit(0)
    })


/*
    Deleta Arquivos
    fs.unlink('danki.txt', function (err){
       console.log('Arquivo deletado!')
    })

    Renomea arquivos
  fs.rename('danki.txt', 'dankicode.txt', function (err){
      console.log('Arquivo renomeado!')
  })

  ------------------------------------------------


fs.readFile('danki.txt', function(err, data) {

let str = data.toString()

let newStr = str.split(' ')
console.log(newStr)

newStr = str.substring(0,3)
console.log(newStr)

})
*/
