const express = require('express');
const app = express();

app.get('/api', (req, res) => res.send('Its working!'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

app.listen(3000, function() {
    console.log('listening on 3000')
})
console.log('May Node be with you')