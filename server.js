const express = require('express');
const app = express();

const apiRoute = require('./routers/Index')

app.use(express.json());
app.use(express.urlencoded( {extended : true }))


app.use('/api', apiRoute)

/*app.use('/' , (request,resp) => {
    resp.send("API is running");
})
*/
app.listen(2000, '0.0.0.0', () => {
    console.log("API service running");
})

