var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // When we visit different urls, read and respond with different files
    switch (path) {

        case "/reservations":
            return fs.readFile(__dirname + "/newres.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });

        case "/tables":
            return fs.readFile(__dirname + "/tables.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });


            // default to rendering index.html, if none of above cases are hit
        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            });
    }
}