import { promises as fs } from "fs"

// precisa chamar a função
init()
writeReadJson()

//usando async/await
async function init(){
    try{
        await fs.writeFile("teste.txt", "bla bla bla")
        await fs.appendFile("teste.txt","\nteste apend file")
        const data = await fs.readFile("teste.txt", "utf-8")
        console.log(data)

    }catch(err){
        console.log(err)
    }   
}

async function writeReadJson(){
    try{
        //escrito com valores iniciais
        const arrayCarros = [ "Gol", "Palio", "Uno" ]
        const obj = {
            carros: arrayCarros
        }
        await fs.writeFile("teste.json", JSON.stringify(obj))

        //fez a leitura do conteudo atual
        const data = JSON.parse(await fs.readFile("teste.json"))

        //modificamos o conteudo
        data.carros.push("Sandero")

        //sobrescrevemos o arquivo com o conteudo modificado
        await fs.writeFile("teste.json", JSON.stringify(obj))
        
       
    }catch(err){
        console.log(err)
    }
}

//usando promise para fazer o código
/*fs.writeFile("teste.txt", "bla bla bla").then(() => {
    fs.appendFile("teste.txt","\nteste apend file").then(() => {
        fs.readFile("teste.txt", "utf-8").then(resp => {
            console.log(resp)

        }).catch(err => {
            console.log(err)

        })
    }).catch(err => {
        console.log(err)
    })
}).catch(err => {
    console.log(err)
})*/


//utilizando com callbacks
// import fs from "fs"
// comando fs é um arquivo interno que já cria e coloca o texto dentro do arquivo
/*fs.writeFile('teste.txt', "bla bla bla", function(err){
    if (err){
        console.log(err)
    } else{
        // aqui estamos concatenando os arquivos
        fs.appendFile("teste.txt", " teste append file", (err)=>{
            if(err){
                console.log(err)
            }else{
                // pode ser assim
                // console.log("arquivo escrito com sucesso") 
                // tenho que passar o utf-8 abaixo para que ele entenda as letras
                // esse bloco pode ficar só no primeiro else
                fs.readFile("teste.txt", "utf-8", function(err, data){
                    if(err){
                        console.log(err)
                    }else {
                        console.log(data)
                    }
                })

            }
        })
    }
})*/


/*try{
    fs.writeFileSync("teste.txt", "bla bla bla")
    const data = fs.readFileSync("teste.txt", "utf-8")
    console.log(data)
}catch(err){
    console.log(err)
}*/