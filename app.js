import express from 'express';

//create an express application
const app = express();

//Middleware that allows express to read form data and store it in req.body
app.use(express.urlencoded({ extended: true }));

//create a temp array to store appointments
const appointments = [];

//define a port number where server will listen
const PORT = 4000;

//enable static file serving
app.use(express.static('public'));

// define confirmation route
app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// admin route ('/')
app.get('/admin', (req, res) => {
    res.send(appointments);
});

app.post('/submit', (req, res) => {

    //crate a JSON object to store the order data
    const appointment = {
        fname: req.body.fname,
        lname: req.body.lname,
        date: req.body.date,
        time: req.body.time,
        timestamp: new Date()
    };

    //Add appointment object to appointments
    appointments.push(appointment)

    //res.send(appointments)
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get('/admin', (req, res) => {
    res.send(appointments);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});