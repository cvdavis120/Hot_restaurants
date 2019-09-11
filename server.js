var express = require('express');
var path = require('path');

// servers
var app =  express();
var PORT = 2560;

//express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// path for the reservations
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname,"newres.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname,"tables.html"));
});


// reservation table json
var customerReserve = [
    {
        customerID: "01",
        customerName: "Example",
        customerEmail: "example@ex.com",
        phoneNumber: 123-9292
    }
];

// function to add a new reservation for customer
app.post("/reservation", function(req, res) {
    var newcustomerResverve = req.body;

    newcustomerResverve.customreID = newcustomerResverve.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(newcustomerResverve);

    customerReserve.push(newcustomerResverve);

    res.json(newcustomerResverve);
});

// server listening to the PORT to get hit
app.listen(PORT, function() {
    console.log("PORT listening to " + PORT);
});