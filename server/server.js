// Express
const express = require(`express`)
const app = express()

app.use(require(`body-parser`).json())
app.use(require(`cors`)({credentials: true, origin: process.env.LOCAL_HOST}))

// Port
app.listen(4000, () => 
{
    console.log(`Connected to port ` + 4000)
})

// Routers
app.use(require(`./routes/books`))
app.use(require(`./routes/users`))

// Error 404
app.use((req, res, next) => {next(createError(404))})

// Other errors
app.use(function (err, req, res, next)
{
    console.error(err.message)
    if (!err.statusCode) 
    {
        err.statusCode = 500
    }
    res.status(err.statusCode).send(err.message)
})