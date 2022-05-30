const { request } = require('express');
let express = require('express');
let app = express();
app.listen(3000, () => {
    console.log("This runs in port 3000! (workers)");
});

let Page = []
function addHeader() {
    Page.push(`
    <!doctype html> 
    <html>
    <head>
        <title>Response/reqest</title>
    </head>
    <body>
`)}
function addFooter() {
    Page.push(`
    </body>
    </html>
`)
}
workers = [
    {name: "Bob the builder", age:45, id:001}, 
    {name: "Mark", age:35, id:002}     
    ]
app.get('/workers/:id', function (req, res) {
    let find = -1;
    addHeader();
   for (let i=0; i< workers.length; i++) {
        if (workers[i].id == req.params.id) {     
        find = i;
        }
    };
    if (find > -1) {
        Page.push(`<h1>${workers[find].name}</h1>`);
        Page.push(`<h2>${workers[find].age}</h2>`);
    } else {
        Page.push(`<h2>workers not found</h2>`);
    }
    addFooter();
    res.send(Page.join(''));
    Page.splice(0);
})