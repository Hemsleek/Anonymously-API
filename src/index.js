const express= require('express')

const app= express()

port = 3030

app.get('/anonymously',(req,res) => res.json('we are here😎'))

app.listen(port,()=>console.log(`app is running on port ${port}`))