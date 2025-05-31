// const express = require("express");
// const app = express()

// app.get('/services.html', (req, res) => {
//     res.send('/services.html')
// })

// app.listen(3000, () => {
//     console.log("listening in")
// })


const express = require("express");
const path = require("path"); // Import the path module
const bodyParser = require('body-parser')
const emailjs = require('emailjs-com')

const app = express();

 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, '/views'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
 app.use( '/', express.static(path.join(__dirname, 'public')));

// Define a route to serve each HTML page individually
 app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "public", "index.html"));
 });

// app.get('/', (req, res) => {
//     res.render('home.ejs')
// })


app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "services.html"));
});

app.get('/servicesa', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "servicea.html"));
});

app.get('/servicesb', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serviceb.html"));
});

app.get('/servicesc', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "servicec.html"));
});

app.get('/servicesd', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "serviced.html"));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "portfolio-1.html"));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-2.html"));
});

app.get('/project3', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-3.html"));
});

app.get('/project4', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-4.html"));
});

app.get('/project5', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-5.html"));
});

app.get('/project6', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "project-6.html"));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "privacy.html"));
});

app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "team.html"));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "blog.html"));
});

app.get('/publication1', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "publication-1.html"));
});

app.get('/publication2', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "publication-2.html"));
});

app.get('/publication3', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "publication-3.html"));
});

app.get('/publication4', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "publication-4.html"));
});

app.get('/home-2', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home-2.html"));
});
// Add similar routes for other HTML pages as needed

app.post('/send-email', (req, res) => {
    const { user_email, user_message } = req.body;

    if (!user_email || !user_message) {
        res.status(400).send('Both email and message are required.');
        return;
    }

    const emailParams = {
        service_id: 'service_qpk03se',
        template_id: 'template_9nekcsh',
        user_id: 'r99WkUK02R3vCeCrT',
        template_params: {
            'email-input': email_input,
            'message-input': message_input
        }
    };

    emailjs.send('default_service', 'template_9nekcsh', emailParams.template_params)
        .then(function(response) {
            console.log('Email sent:', response);
            res.send('Your message has been sent successfully!');
        }, function(error) {
            console.error('Failed to send email:', error);
            res.status(500).send('Failed to send email.');
        });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});