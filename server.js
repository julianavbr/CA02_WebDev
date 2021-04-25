const express = require('express');
const app = express();

var path = require("path");
app.use(express.static(__dirname + '/public'));
// app.use(express.static('chocolateShop'));
app.set('views', './views');
app.set('view engine', 'html');
app.get('/api', (req, res) => res.send('Its working!'));

app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');

});

app.listen(3000, function() {
    console.log('listening on 3000')
})
console.log('May Node be with you')

// app.get('/', function(req, res) {
//     res.send();
// })
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
// exports.getHome = (req, res) => {
//     res.send(page);
// }
// app.get('/', (req, res) => {
//     res.sendFile('C:/Users/Jorge/Google Drive/Education/IT/Semester 06/T01_Interactive Web Application/CA02_WebDev/chocolateShop/views/'+'index.html')
// })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chocolateShop/views/index.html')
})