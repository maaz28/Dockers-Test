const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    //in above host when we are not working with docker, we give url in host
    port: 6379
    // by default redis server runs on port 6379
})


app.get('/', (req, res) => {
 res.send('working')
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})