require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");


const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("DB connection established");
});

// render the Rasa Webchat widget on the /rasa endpoint
app.get('/chatbot', (req, res) => {
    res.render("chatbot")});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/login", async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const user = await User.findOne({ email: email.toLowerCase() });

        console.log(password, user.password);
        if (user && password === user.password) {
            // res.status(201).json({
            //     userDetails: {
            //         username: user.username,
            //         email: user.email,
            //     },
            // });
            res.redirect("/");
        } else {
            return res
                .status(400)
                .send("Invalid creditials, please try again.");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("Something went wrong. Please try again.");
    }
});

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body);
        const { name, password, email } = req.body;

        // check if email is already registered
        const userExists = await User.findOne({ email: email.toLowerCase() });
        if (userExists) {
            return res.status(409).send("Email already in use.");
        }

        // Create user to the database
        const user = await User.create({
            username: name,
            email: email.toLowerCase(),
            password: password,
        });

        // sending success response status
        return res.status(201).send({
            userDetails: {
                username: user.username,
                email: user.email,
            },
        });
    } catch (err) {
        // Catching, logging, and sending error response status
        console.log(err);
        return res.status(500).send("Error Occured, Please Try Again!");
    }
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log("Server started on port successfully");
});
