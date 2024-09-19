const express = require('express')
const userRouter = require('./routers/user.router')
const path = require('path')
//Запус сервера nodeJS: npm run dev
const PORT = process.env.PORT || 8080
const app =express()
const pool = require('./db');


app.use(express.json())
app.use('/api',userRouter)


// ПРОВЕРКА НА ПОДКЛЮЧЕНИЕ К БАЗЕ ДАННЫХ
pool.query('SELECT NOW()', (err, res) => {
    if(err) {
      console.error('Error connecting to the database', err.stack)
    } else {
      console.log('Connected to the database:', res.rows)
    }
  });

  

app.listen(PORT,()=>{
    console.log(`Server start on port: ${PORT}`)
})

app.get('/api',(req,res)=>{
    res.json({
        message:"Hello from back end!!"
    })
})