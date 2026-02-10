import express from 'express';

//create an express application
const app = express();

//Middleware that allows express to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

//create a temp array to store orders
const appointments = [];

//define a port number where server will listen
const PORT = 4000;

//enable static file serving
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) => {

    //crate a JSON object to store the order data
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.tim,
        timestamp: new Date()
    };

    //Add order object to orders
    appointments.push(appointment)

    //res.send(orders)
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});