const express=require('express')
const app= express()
const route=require('./router/router')
const PORT= Number(process.env.PORT || 4500)
const upload= require('express-fileupload')
const bodyParser=require('body-parser')


app.use(upload())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)

app.set('views','./views')
app.set('view engine','ejs')

app.listen(PORT,()=>{
    console.log(`The Server is up and Running at Port ${PORT}`)

})


