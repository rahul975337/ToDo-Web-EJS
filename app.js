const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();
var items = []
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: 'numeric',
        month: 'long'
    }
    var day = today.toLocaleDateString('en-US', options);

    res.render("list", { kindOfDay: day, newListItems: items });
})
app.post('/', function (req, res) {
    item = req.body.newItem;
    items.push(item);

    // console.log(item);
    res.redirect('/')
})


app.listen(3000, function () {
    console.log('Server started at port 3k');
})