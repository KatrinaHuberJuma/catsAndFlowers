const express = require("express");
const app = express();


app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var catsObj = {
    "cuddles": {"name":"Cuddles", "hobbies":["cuddles", "snuggles", "birdwatching"], "napspot":"Any lap!"},
    "yarn": {"name":"Liam", "hobbies":["multi-threaded play", "knitting", "bungee jumping"], "napspot":"N/A, Liam doesn't nap"},
    "ocelot": {"name":"Hunter", "hobbies":["animal rights activism", "raising awareness"], "napspot":"Any sofa that will have him"},
    "kitten": {"name":"Lucy", "hobbies":["adventuring", "misc mischeif", "painting"], "napspot":"Under the Stars"}
    }


app.get('/cats', (request, response) => {
    response.render("cats");
});
app.get('/flowers', (request, response) => {
    response.render("flowers");
});
app.get('/form', (request, response) => {
    response.render("form");
});
app.get('/cats', (request, response) => {
    response.render("cats");
});
app.get('/cats/:catname/', function (request, response) {
    var cat = catsObj[request.params.catname]
    response.render("cat", {cat:cat})
})






app.listen(8000, () => console.log("listening on port 8000"));
