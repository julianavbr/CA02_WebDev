// Code adapted from the code developed on class by Mikhail @Interactive Web Applications.
var http = require('http'), //This variable activates the use of the http's features.
    path = require('path'), //It activates the use of file's locations.
    express = require('express'), //It allows to receive a reply the requests from http
    fs = require('fs'), //It activates the reading and writing in files
    xmlParse = require('xslt-processor').xmlParse, //It activates the integration with xml
    xsltProcess = require('xslt-processor').xsltProcess, //It activates the integration with xsl Transformation
    xml2js = require('xml2js'); //It converts XML > JSON > XML

var router = express(); //Establish the routing with the http
var server = http.createServer(router); //To create a server

router.use(express.static(path.resolve(__dirname, 'views'))); //Establish that the "Views" folder is where the static content is
router.use(express.urlencoded({extended: true})); //To use data from the client in requests (GET and POST)
router.use(express.json()); //To allow the use of JSON

//XML to JSON
function xmlFileToJs(filename, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  fs.readFile(filepath, 'utf8', function(err, xmlStr) {
    if (err) throw (err);
    xml2js.parseString(xmlStr, {}, cb);
  });
}

// JSON to XML + save file
function jsToXmlFile(filename, obj, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.unlinkSync(filepath);
  fs.writeFile(filepath, xml, cb);
}

router.get('/', function(req, res) {

    res.render('index');

});
// To read the files
router.get('/get/html', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'}); //We are responding to the client that the content served back is HTML and the it exists (code 200)

    var xml = fs.readFileSync('TheChocolateShop.xml', 'utf8'); //Read XML
    var xsl = fs.readFileSync('TheChocolateShop.xsl', 'utf8'); //Read XSL

    var doc = xmlParse(xml); //Parse xml
    var stylesheet = xmlParse(xsl); //Parse xsl

    var result = xsltProcess(doc, stylesheet); //The result file

    res.end(result.toString()); //Print to the user
});

//to add new information to the server
router.post('/post/json', function (req, res) {

    function appendJSON(obj) {

        console.log(obj)

        xmlFileToJs('TheChocolateShop.xml', function (err, result) {
           
            if (err) throw (err);
     var checkNum = obj.price;
     var checkDes = obj.item;
     checkNum = sanitiseInput(checkNum); //to sanitise the number
     checkDes = sanitiseInput(checkDes); //to sanitise the description
     //to check if it is a number, otherwise it won't include the file
     if(isNumber(checkNum)){
            result.chocolatedescs.section[obj.main_groups].opt.push({'desc': checkDes, 'prc': checkNum});

            console.log(JSON.stringify(result, null, "  "));

            jsToXmlFile('TheChocolateShop.xml', result, function(err){
              if (err) console.log(err);
     

            });
        }
    });
    
    };

    appendJSON(req.body);

    res.redirect('back');

});

//to delete the entry
router.post('/post/delete', function (req, res) {

    function deleteJSON(obj) {

        console.log(obj)

        xmlFileToJs('TheChocolateShop.xml', function (err, result) {
            if (err) throw (err);
            
            delete result.chocolatedescs.section[obj.section].opt[obj.opt];

            console.log(JSON.stringify(result, null, "  "));

            jsToXmlFile('TheChocolateShop.xml', result, function(err){
                if (err) console.log(err);
            });
        });
    };

    deleteJSON(req.body);

    res.redirect('back');

});
//to check if the input is a number
function isNumber(input) {
  if (typeof input != "string") return false 
  return !isNaN(input) && !isNaN(parseFloat(input)) // clean and check if the input is a number
}
//to check and remove illegal char from the input
function sanitiseInput(input){
    input = input.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,""); 
    return input.trim();
}
//added the port 5501 to talk to my server
server.listen(process.env.PORT || 5501, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Server listnening at", addr.address + ":" + addr.port);
    });
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Server listnening at", addr.address + ":" + addr.port);
});
