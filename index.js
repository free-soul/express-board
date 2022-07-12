const express = require('express');
const app = express();

const mysql = require('sync-mysql')
const date = require('./public/js/date');
const database_config = require('./database.config.json');

const db = new mysql(database_config);

function xs(v) { return v.replaceAll("'", "\\'").replaceAll('"', '\\"') }

// --------------------------------------------------------------------------------------------------------------------------------------

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => { res.render('index', {components: db.query("SELECT * from boards order by createdAt desc")}); })
app.get("/create", (req, res) => { res.render('create'); })
app.get("/content", (req, res) => { 

    if (req.query != undefined && req.query.title)
    {
        //res.render('content', { title: req.query.title });
        var data = db.query(`SELECT * from boards where title = "${xs(req.query.title)}"`);
        if ((data.length > 0))
        {
            data = data[0];
            res.render('content', { 
                title: req.query.title, 
                writer: data.creator, 
                createdAt: data.createdAt, 
                content: data.content 
            })
            return;
        }
    }
    res.redirect('/404');
 })
app.get("/404", (req, res) => { res.render('404') })
app.get("*", (req,res) => { res.redirect('/404'); });
app.post("/c", function (request, respone) { 
    if (request.body != undefined)
    {
        var username = xs(request.body.data.username);
        var title = xs(request.body.data.title);
        var content = xs(request.body.data.content);

        db.query(`INSERT INTO boards VALUES ("${username}", "${date.createDate()}", "${title}", "${content}")`) 
    }
})

app.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
});